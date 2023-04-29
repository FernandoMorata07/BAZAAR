import { VentasList } from "../components/VentasList";
import useVentas from "../hooks/useVentas";

export const HomePage = () => {
  const { ventas, loading, error } = useVentas();

  if (loading) return <p>cargando Ventas</p>;
  if (error) return <p>{error}</p>;
  console.log(ventas);
  return (
    <section>
      <h1>Lista de Artículos en Venta</h1>
      <VentasList ventas={ventas} />
    </section>
  );
};
