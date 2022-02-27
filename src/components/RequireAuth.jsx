import { Navigate } from "react-router-dom";

/*
  En funcion de si el usuario en null o tiene daros nos redirigira al componente Game (que es el children de RequireAuth) o a Login
*/

const RequireAuth = ({ children, redirectTo, user }) => {
  return user ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
