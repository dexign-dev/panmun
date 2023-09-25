import { useEffect, useState } from "react";

export function IconText({ children, delay, iconSrc }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div className="flex items-center">
      <img 
        src={iconSrc} 
        alt="icon" 
        className={`w-9 h-9 mr-4 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`} 
      />
      <div>{children}</div>
    </div>
  );
}

export default IconText;
