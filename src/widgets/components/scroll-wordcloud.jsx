import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactWordcloud from 'react-wordcloud';

function ScrollWordCloud({ wordsData }) {
  const [isVisible, setIsVisible] = useState(false);
  const wordCloudRef = useRef(null);

  const checkVisibility = useCallback(() => {
    if (wordCloudRef.current) {
      const rect = wordCloudRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        if (!isVisible) {
          setIsVisible(true);
        }
      } else {
        if (isVisible) {
          setIsVisible(false);
        }
      }
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // 컴포넌트가 마운트될 때 바로 실행

    return () => window.removeEventListener('scroll', checkVisibility);
  }, [checkVisibility]);

  return (
    <div ref={wordCloudRef}>
      {isVisible ? (
        <ReactWordcloud 
          words={wordsData}
          options={{
            enableTooltip: true,
            deterministic: false,
            fontSizes: [5, 60],
            fontStyle: 'normal',
            fontWeight: 'normal',
            padding: 1,
            rotations: 2,
            rotationAngles: [0, 90],
            scale: 'sqrt',
            spiral: 'archimedean',
            transitionDuration: 1000,
          }}
        />
      ) : null}
    </div>
  );
}

export default ScrollWordCloud;
