import { useEffect, useState, useRef } from "react";

export function IconText({ children, delay, iconSrc }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 섹션에 스크롤이 도달했을 때
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setVisible(true);
          }, delay);
          
          return () => clearTimeout(timer);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 // 어느 정도 보이면 애니메이션을 시작할 것인지 설정
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div className="flex items-center" ref={ref}>
      <img 
        src={iconSrc} 
        alt="icon" 
        className={`w-9 h-9 mr-4 ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`} 
      />
      <div>{children}</div>
    </div>
  );
}

export default IconText;
