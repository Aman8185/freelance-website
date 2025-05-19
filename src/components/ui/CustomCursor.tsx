import { useRef, useEffect } from 'react';
import { useCustomCursor } from '../../context/CustomCursorContext';

const CustomCursor = () => {
  const { cursorType, cursorPosition, setCursorPosition } = useCustomCursor();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) scale(${cursorType === 'hover' ? 1.2 : cursorType === 'click' ? 0.9 : 1})`;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) scale(0.9)`;
      }
    };
    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) scale(1)`;
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorType, cursorPosition, setCursorPosition]);

  useEffect(() => {
    document.body.classList.add('custom-cursor');
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-simple-cursor"
        style={{
          opacity: cursorType === 'hidden' ? 0 : 1,
          transition: 'transform 0.15s cubic-bezier(.4,0,.2,1), opacity 0.2s',
        }}
      />
      <style>{`
        .custom-cursor {
          cursor: none;
        }
        .custom-cursor a,
        .custom-cursor button,
        .custom-cursor input,
        .custom-cursor [role="button"] {
          cursor: none;
        }
        .custom-simple-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          pointer-events: none;
          z-index: 9999;
          border-radius: 50%;
          background: rgba(30, 41, 59, 0.85); /* slate-800 with opacity */
          border: 1.5px solid rgba(255,255,255,0.13);
          box-shadow: 0 2px 8px 1px rgba(0,0,0,0.10);
          transform: translate3d(0,0,0) scale(1);
        }
      `}</style>
    </>
  );
};

export default CustomCursor; 