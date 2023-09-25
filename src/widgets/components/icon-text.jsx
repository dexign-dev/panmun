import { useEffect, useState, useRef } from "react";

export function IconText({ children, delay, iconSrc }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // 섹션에 스크롤이 도달했을 때
          const timer = setTimeout(() => {
            setVisible(true);
          }, delay);
          return () => clearTimeout(timer);
        } else {
          // 섹션에서 스크롤이 벗어났을 때
          setVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
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
