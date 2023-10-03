import { useEffect, useState, useRef } from "react";

export function IconText({ children, delay, iconSrc }) {
  const [visible, setVisible] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 화면에 보이면
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setVisible(true);
          }, delay);
          return () => {
            clearTimeout(timer);
          };
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, [delay]);

  return (
    <div className="flex items-center" ref={iconRef}>
      <img 
        src={iconSrc} 
        alt="icon" 
        className={`w-11 h-11 mr-4 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`} 
      />
      <div>{children}</div>
    </div>
  );
}

export default IconText;
