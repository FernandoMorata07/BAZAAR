import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Venta } from "../components/Venta";
import useVenta from "../hooks/useVenta";

export const VentaPage = () => {
  const { id } = useParams();

  const { venta, loading, error } = useVenta(id);

  if (loading) return <p>cargando Ventas</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Venta con id:{venta.id}</h1>

      <Venta venta={venta} />
    </section>
  );
};

// 1:53:31
