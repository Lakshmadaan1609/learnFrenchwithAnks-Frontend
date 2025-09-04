import { useState, useEffect } from 'react';

export function useScrollTextHighlight(text: string) {
  const [letterColors, setLetterColors] = useState<string[]>([]);

  useEffect(() => {
    let rafId: number | null = null;
    
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        const element = document.querySelector('[data-scroll-text]');
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress based on element position in viewport
        let progress = 0;
        
        // Element is above viewport
        if (elementTop > windowHeight) {
          progress = 0;
        }
        // Element is below viewport
        else if (elementTop < -elementHeight) {
          progress = 1;
        }
        // Element is in viewport - calculate smooth progress
        else {
          // Start highlighting when element is 60% up the viewport
          const startPoint = windowHeight * 0.6;
          // End highlighting when element is 40% down the viewport
          const endPoint = -elementHeight + (windowHeight * 0.4);
          
          if (elementTop >= startPoint) {
            // Element entering from top
            progress = 1 - ((elementTop - startPoint) / (windowHeight * 0.4));
          } else if (elementTop <= endPoint) {
            // Element exiting from bottom
            progress = 1;
          } else {
            // Element in middle - full highlighting
            progress = 1;
          }
        }
        
        // Ensure progress is between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
        
        // Create smooth letter-by-letter highlighting
        const totalLetters = text.length;
        const colors = text.split('').map((_, index) => {
          // Calculate individual letter progress with staggered timing
          const letterProgress = Math.max(0, Math.min(1, (progress * totalLetters - index) / 1));
          
          if (letterProgress > 0) {
            // Smooth transition from white to dark blue
            const intensity = Math.min(1, letterProgress * 2); // Faster transition
            return `rgba(31, 41, 55, ${intensity})`; // Dark blue with opacity
          } else {
            return '#ffffff'; // White
          }
        });
        
        setLetterColors(colors);
        
        rafId = null;
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [text]);

  return { letterColors };
}
