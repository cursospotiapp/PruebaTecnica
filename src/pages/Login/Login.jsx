import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../utils/managePlayer";
import { ContainerPages } from "../../index.styles";
import { StyledInput, StyledButton, ErrorMsg, Logo } from "./Login.styles";

/*
  Se nos pide un jugador que al menos debe tener tres caracteres para ser valido, si no es válido mostraremos un mensaje de usuario invalido,
  Si es válido llamaremos a la funcion saveUser que comprueba si existe el usuario en la BD local IndexedDB lo devuleve con su puntuación y su mejor puntuación
  Si no existe el usuario se crea uno nuevo con puntuacion y mejor puntuacion a 0
*/

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleClick = async () => {
    if (name.length < 3) {
      setUser(null);
      setError(true);
    } else {
      setError(false);
      setUser(await saveUser(name));
      navigate("/game");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <ContainerPages>
      <Logo>
        <span>Red </span>Light - <span>Green </span> Light
      </Logo>

      {error && (
        <ErrorMsg role="presentation">
          Debe introducir un nombre valido
        </ErrorMsg>
      )}

      <StyledInput
        aria-label="player-input"
        type="text"
        placeholder="Introduce tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <StyledButton onClick={handleClick}>Jugar !</StyledButton>
    </ContainerPages>
  );
};

export default Login;
