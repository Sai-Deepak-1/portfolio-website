import React, { useState, useEffect, useCallback, useRef } from 'react';

const TextScramble: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLSpanElement>(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.width = `${containerRef.current.offsetWidth}px`;
    }
  }, [text]);

  const scrambleText = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.split("").map((letter, index) => {
          if (index < Math.floor(iteration)) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }).join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span
      ref={containerRef}
      className="inline-block whitespace-pre duration-300"
      onMouseEnter={scrambleText}
    >
      {displayText}
    </span>
  );
};

export default TextScramble;