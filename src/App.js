import { useState } from "react";
import { GlobalStyles } from "./components/Global.styles";
import Login from "./pages/Login/Login";
import Game from "./pages/Game/Game";
import RequireAuth from "./components/RequireAuth";
import { Navigate, Route, Routes } from "react-router-dom";

import { MainContainer } from "./index.styles";

/* 
  Para simplificar cogemos el estado user desde este componente y le pasamos la funcion de setUser al componente Login que validara si es correcto o no
  si es correcto user tendra un valor el cual comprobará el componente RequireAuth y nos dirigirá al componente Game, si es otra ruta o el user no cumlpe los criterios
  nos dejara en el componente Login
*/

function App() {
  const [user, setUser] = useState(null);

  return (
    <MainContainer>
      <GlobalStyles />
      <Routes>
        <Route
          path="/login"
          element={<Login setUser={setUser} role="login" />}
        />

        <Route
          path="/game"
          element={
            <RequireAuth redirectTo="/login" user={user}>
              <Game user={user} />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="login" redirectTo="/login" />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
