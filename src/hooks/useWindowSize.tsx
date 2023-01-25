import { useState, useEffect } from 'react';
import { BreakPoints } from './breakpoints';

export const useWindowSize = (): { width: number; height: number, device: string } => {
  const [size, setSize] = useState({ width: 0, height: 0, device: ''});
  const {mobileSize, tabletSize, laptopSize } = BreakPoints()

  function getDevice(windowSize:number){
    if (windowSize < mobileSize){ 
      return 'mobile'
    }
    if (windowSize < tabletSize){
      return 'tablet'
    }
    if (windowSize < laptopSize){
      return 'laptop'   
    }

    return 'desktop'
  }

  useEffect(() => {
    const updateSize = (): void => {
      setSize({ width: window.innerWidth, height: window.innerHeight, device: getDevice(window.innerWidth)  });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return (): void => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return size;
};
