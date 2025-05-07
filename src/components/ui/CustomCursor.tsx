import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../../context/CustomCursorContext';

const CustomCursor = () => {
  const { cursorType, cursorPosition, setCursorPosition } = useCustomCursor();
  
  // Refs for cursor elements
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const secondaryCursorRef = useRef<HTMLDivElement>(null);
  
  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
      
      // Update cursors directly for smoother performance
      if (mainCursorRef.current) {
        mainCursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      
      if (secondaryCursorRef.current) {
        secondaryCursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) scale(${cursorType === 'hover' ? 1.5 : cursorType === 'click' ? 0.8 : 1})`;
      }
    };
    
    // Add mouse move event listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Handle mouse down/up events for click effect
    const handleMouseDown = () => {
      if (secondaryCursorRef.current) {
        secondaryCursorRef.current.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) scale(0.8)`;
      }
    };
    
    const handleMouseUp = () => {
      if (secondaryCursorRef.current) {
        secondaryCursorRef.current.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) scale(1)`;
      }
    };
    
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorType, cursorPosition, setCursorPosition]);
  
  // Hide default cursor with CSS
  useEffect(() => {
    document.body.classList.add('custom-cursor');
    
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);
  
  return (
    <>
      {/* Small dot cursor */}
      <motion.div
        ref={mainCursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary-500 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: cursorType === 'hidden' ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Larger ring cursor */}
      <motion.div
        ref={secondaryCursorRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: cursorType === 'hidden' ? 0 : 0.6,
          scale: cursorType === 'hover' ? 1.5 : cursorType === 'click' ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Add custom cursor styles */}
      <style>
        {`
          .custom-cursor {
            cursor: none;
          }
          
          .custom-cursor a,
          .custom-cursor button,
          .custom-cursor input,
          .custom-cursor [role="button"] {
            cursor: none;
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor; 