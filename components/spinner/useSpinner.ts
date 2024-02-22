'use client';

import { useState } from 'react';

export const useSpinner = () => {
  const [isVisible, setIsVisible] = useState(false);

  return {
    isVisible,
    showSpinner: () => setIsVisible(true),
    hideSpinner: () => setIsVisible(false),
  };
};
