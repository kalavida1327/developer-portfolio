import React, { useEffect, useState } from 'react';
import { HeroProfession } from './styled';

const TextAnimation = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (words && words.length > 0) {
      const word = words[currentWordIndex];

      let index = 0;
      let intervalId;

      const animateText = () => {
        setDisplayedText((prevText) => prevText + word[index]);
        index++;

        if (index >= word.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setDisplayedText('');
          }, 1000); // Delay before moving to the next word
        }
      };

      intervalId = setInterval(animateText, 150);

      // Clear the interval when the component unmounts or when the word changes
      return () => {
        clearInterval(intervalId);
        console.log('Interval cleared');
      };
    }
  }, [currentWordIndex, words]);
  return <HeroProfession variant='h4'>{displayedText}</HeroProfession>;
};

export default TextAnimation;
