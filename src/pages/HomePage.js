import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewVenta } from "../components/NewVenta";
import { VentasList } from "../components/VentasList";
import { AuthContext } from "../context/AuthContext";
import useVentas from "../hooks/useVentas";

export const HomePage = () => {
  const { ventas, loading, error, addVenta } = useVentas();
  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando Ventas</p>;
  if (error) return <ErrorMessage message={error} />;
  console.log(ventas);
  return (
    <section>
      <h1>Lista de Artículos en Venta</h1>
      {user ? <NewVenta addVenta={addVenta} /> : null}

      <VentasList ventas={ventas} />
    </section>
  );
};
