import useVentas from "../hooks/useVentas";
import { ErrorMessage } from "./ErrorMessage";
import { VentasList } from "./VentasList";

export const UserVentas = ({ id }) => {
  const { ventas, loading, error, ventaRemove } = useVentas(id);

  if (loading) return <p>Loading tweets...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <VentasList ventas={ventas} ventaRemove={ventaRemove} />;
};
