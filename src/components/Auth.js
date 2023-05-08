import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logOut } = useContext(AuthContext);
  return user ? (
    <p>
      El usuario {user.email} está conectado{" "}
      <button onClick={() => logOut()}>Salir❌</button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
