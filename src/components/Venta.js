import { Link } from "react-router-dom";

export const Venta = ({ venta }) => {
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
        By {venta.email} on{" "}
        <Link to={`/venta/${venta.id}`}>
          {" "}
          {new Date(venta.created_at).toLocaleString()}
        </Link>
      </p>
    </article>
  );
};
