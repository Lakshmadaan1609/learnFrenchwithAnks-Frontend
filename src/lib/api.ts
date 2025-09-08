/**
 * API Service for communicating with the backend
 * 
 * This service handles all HTTP requests to the backend API
 * including authentication, error handling, and token management.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Types for API responses
export interface LoginDto {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  access_token: string;
  user: {
    username: string;
    role: string;
  };
}

export interface ErrorResponse {
  success: false;
  message: string;
  error?: string;
}

export interface ValidateTokenResponse {
  success: boolean;
  message: string;
  user: {
    username: string;
    role: string;
  };
}

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Generic API request function with error handling
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include',
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Network or other errors
    throw new ApiError(
      error instanceof Error ? error.message : 'Network error occurred'
    );
  }
}

/**
 * Authentication API methods
 */
export const authApi = {
  /**
   * Login with username and password
   */
  async login(credentials: LoginDto): Promise<LoginResponse> {
    return apiRequest<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  /**
   * Validate JWT token
   */
  async validateToken(token: string): Promise<ValidateTokenResponse> {
    return apiRequest<ValidateTokenResponse>('/auth/validate', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  /**
   * Check auth service health
   */
  async healthCheck(): Promise<{ status: string; message: string; timestamp: string }> {
    return apiRequest('/auth/health');
  },
};

/**
 * Token management utilities
 */
export const tokenManager = {
  /**
   * Store JWT token in localStorage
   */
  setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  },

  /**
   * Get JWT token from localStorage
   */
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  },

  /**
   * Remove JWT token from localStorage
   */
  removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  },

  /**
   * Check if user is logged in (has valid token)
   */
  async isLoggedIn(): Promise<boolean> {
    const token = this.getToken();
    if (!token) return false;

    try {
      await authApi.validateToken(token);
      return true;
    } catch {
      // Token is invalid, remove it
      this.removeToken();
      return false;
    }
  },
};

export default authApi;
