import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUserService } from "../services";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await loginUserService({ email, password });
      logIn(data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
        </fieldset>

        <button>Login</button>

        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
