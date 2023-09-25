import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactWordcloud from 'react-wordcloud';

function ScrollWordCloud({ wordsData }) {
  const [isVisible, setIsVisible] = useState(false);
  const wordCloudRef = useRef(null);

  const checkVisibility = useCallback(() => {
    if (!isVisible && wordCloudRef.current) {  // isVisible이 false일 때만 체크
      const rect = wordCloudRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', checkVisibility);  // isVisible이 true가 되면 이벤트 리스너 제거
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
