import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";

import { VentasUser } from "../components/VentasUser";

import useUser from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  console.log(user);

  if (loading) return <p>Cargando datos de usario...</p>;
  if (error) return <ErrorMessage message={error} />;
  return (
    <>
      {" "}
      <h1>User {user.email}</h1>
      <section>
        <p>User id: {user.id}</p>
        <p>Registered on {new Date(user.created_at).toLocaleString()}</p>
      </section>
      <section>
        <VentasUser id={user.id} />
      </section>
    </>
  );
};
