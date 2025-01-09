import React, { useEffect, useState } from "react";

function useCounterUp({ targetCount, counterRef,delay=1 }) {
  const [count, setCount] = useState(0);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = counterRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && count < targetCount) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10*delay);

      return () => clearInterval(intervalId);
    }
  }, [isInView, count]);

  return count;
}

export default useCounterUp;
