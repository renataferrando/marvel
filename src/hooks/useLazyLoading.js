import { useState, useRef, useEffect } from "react";

export const useLazyLoading = (options) => {
  const ref = useRef(null);
  const [inViewPort, setInViewPort] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setInViewPort(true);
    }
  };

  useEffect(() => {
    let refValue = null;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (refValue) observer.unobserve(refValue);
    };
  }, [ref, options]);

  return [ref, inViewPort];
};
