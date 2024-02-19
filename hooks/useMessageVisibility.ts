'use client';
import { useState, useEffect } from 'react';

const useMessageVisibility = (duration: number = 2000): [boolean, () => void] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
    }

    return () => clearTimeout(timer);
  }, [isVisible, duration]);

  const showMessage = () => setIsVisible(true);

  return [isVisible, showMessage];
};

export default useMessageVisibility;
