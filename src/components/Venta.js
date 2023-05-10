import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteVentaService } from "../services";

export const Venta = ({ venta, ventaRemove }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteVenta = async (id) => {
    try {
      await deleteVentaService({ id, token });
      if (ventaRemove) {
        ventaRemove(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article>
      <p>{venta.text}</p>

      {venta.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${venta.image}`}
          alt={venta.text}
        />
      ) : null}
      <p>
        By <Link to={`/user/${venta.user_id}`}>{venta.email}</Link> on{" "}
        <Link to={`/venta/${venta.id}`}>
          {" "}
          {new Date(venta.created_at).toLocaleString()}
        </Link>
      </p>
      {user && user.id === venta.user_id ? (
        <section>
          <button
            onClick={() => {
              if (
                window.confirm("¿Estás seguro que quieres eliminar esta venta?")
              )
                deleteVenta(venta.id);
            }}
          >
            Borrar
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};

// 4:14:34
