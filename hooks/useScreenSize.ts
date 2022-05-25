import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const isClient = typeof window === 'object';

  function getScreenSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [screenSize, setScreenSize] = useState(getScreenSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  return { screenSize };
};
