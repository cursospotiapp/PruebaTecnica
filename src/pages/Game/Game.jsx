import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDelay } from "../../hooks/useDelay";
import { useCalculatePlayerScore } from "../../hooks/useCalculatePlayerScore";
import { updateUser } from "../../utils/managePlayer";
import { GiFootprint } from "react-icons/gi";
import { BsStoplights } from "react-icons/bs";
import { AiOutlineStop } from "react-icons/ai";
import { ContainerPages } from "../../index.styles";
import {
  TrafficLight,
  GroupButtons,
  ButtonWalk,
  ButtonExit,
  Logo,
  Player,
} from "./Game.styles";

/* 
  Al pulsar los botones de L y R se aplicara la logica del juego, mediante la funcion calculatePoints calcularemos si sumamos o restamos en funcion de si hemos
  pulsado el otro boton diferente, o hemos pulsado el mismo
  Si pulsamos cuando el icono esta en stop, nos dejara la puntuación a  0
  Para lograr esto hacemos uso de dos hooks personalizados.
  El hook useDelay ira alternando si estmos en stop o no mediante un intervalo marcado por las condiciones que nos propocionan.
*/

const Game = ({ user }) => {
  const navigate = useNavigate();
  const { playerScore, setPlayerScore, calculatePoints } =
    useCalculatePlayerScore(user?.points ?? 0);
  const [isStop] = useDelay(playerScore);
  const [bestScore, setBestScore] = useState(user.bestScore);

  useEffect(() => {
    if (playerScore > bestScore) {
      setBestScore(playerScore);
    }
  }, [playerScore, bestScore]);

  const handleWalk = (foot) => {
    isStop ? setPlayerScore(0) : calculatePoints(foot);
  };

  const handleExit = () => {
    updateUser(user.name, playerScore, bestScore);
    navigate("/login");
  };

  return (
    <ContainerPages>
      <ButtonExit onClick={handleExit}>SALIR</ButtonExit>
      <Logo>Best score: {bestScore} </Logo>
      <Player>
        Player: <span>{user?.name}</span>, score:{" "}
        <span role="presentation">{playerScore}</span>
      </Player>
      <TrafficLight>
        {isStop ? (
          <AiOutlineStop fill="#ce2c5f" />
        ) : (
          <BsStoplights fill="green" />
        )}
      </TrafficLight>
      <GroupButtons>
        <ButtonWalk
          onClick={() => handleWalk("left")}
          style={{ marginRight: "0.5rem" }}
        >
          <GiFootprint />L
        </ButtonWalk>
        <ButtonWalk onClick={() => handleWalk("right")} role="button">
          {" "}
          <GiFootprint />R
        </ButtonWalk>
      </GroupButtons>
    </ContainerPages>
  );
};

export default Game;
