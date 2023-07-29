"use client"

import { useEffect, useState } from 'react';

export default function GlowingCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="glowing-cursor bg-gradient-to-br from-sky-600 to-blue-600 opacity-10 dark:opacity-20 blur-3xl"
      style={{ top: `${cursorPosition.y - 200}px`, left: `${cursorPosition.x - 200}px` }}
    ></div>
  );
};