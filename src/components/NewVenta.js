import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendVentaService } from "../services";

export const NewVenta = ({ addVenta }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const data = new FormData(e.target);
      const venta = await sendVentaService({ data, token });
      addVenta(venta);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <h1>Add new Venta</h1>
      <fieldset>
        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" required />
      </fieldset>

      <fieldset>
        <label htmlFor="image">Imagen</label>
        <input type="file" id="image" name="image" accept="image/*" />
      </fieldset>

      <button>Enviar</button>
      {sending ? <p>Subiendo venta</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};

// 3:39:48
