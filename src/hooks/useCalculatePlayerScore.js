import { useState, useRef } from "react";

export const useCalculatePlayerScore = (points = 0) => {
  const [playerScore, setPlayerScore] = useState(points);
  const clickAnterior = useRef(null);

  const calculatePoints = (foot) => {
    if (clickAnterior.current) {
      clickAnterior.current !== foot
        ? setPlayerScore(playerScore + 1)
        : setPlayerScore(Math.max(playerScore - 1, 0));
    } else {
      setPlayerScore(playerScore + 1);
    }
    clickAnterior.current = foot;
  };

  return { playerScore, setPlayerScore, calculatePoints };
};
