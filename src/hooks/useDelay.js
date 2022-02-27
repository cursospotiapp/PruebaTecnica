import { useState, useEffect, useRef } from "react";

export const useDelay = (playerScore = 0) => {
  const [isStop, setIsStop] = useState(false);
  const intervalRef = useRef(null);

  const delayPlayer = () => {
    return (
      Math.max(5000 - playerScore * 100, 2000) +
      Math.round(Math.random() * 1500) * (Math.round(Math.random()) ? 1 : -1)
    );
  };

  useEffect(() => {
    const delay = isStop ? 2000 : delayPlayer();
    intervalRef.current = setInterval(() => {
      setIsStop((p) => !p);
    }, delay);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStop]);

  return [isStop];
};
