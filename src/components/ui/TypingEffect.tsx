import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  titles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  titles,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000
}) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullTitle = titles[currentTitleIndex] || '';

    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === fullTitle) {
      // Pause at the end of word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText === '') {
      // Move to next word
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      // Typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullTitle.substring(0, prev.length - 1)
            : fullTitle.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center text-indigo-600 dark:text-cyan-400 font-semibold tracking-wide">
      <span>{currentText}</span>
      <span className="w-[2px] h-6 ml-1 bg-indigo-500 dark:bg-cyan-400 animate-pulse inline-block" />
    </span>
  );
};
