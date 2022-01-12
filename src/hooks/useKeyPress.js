import { useEffect, useState } from 'react';

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === targetKey || (key === 'ArrowLeft' && targetKey === 'ArrowUp')) {
        setKeyPressed(false);
      }
    };

    const upHandler = ({ key }) => {
      if (key === targetKey || (key === 'ArrowRight' && targetKey === 'ArrowDown')) {
        setKeyPressed(true);
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

export default useKeyPress;
