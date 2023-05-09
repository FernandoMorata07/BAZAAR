import { useEffect, useState } from "react";
import { getAllVentasService } from "../services";

const useVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadVentas = async () => {
      try {
        setLoading(true);

        const data = await getAllVentasService();

        setVentas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadVentas();
  }, []);

  const addVenta = (venta) => {
    setVentas([venta, ...ventas]);
  };

  const ventaRemove = (id) => {
    setVentas(ventas.filter((venta) => venta.id !== id));
  };

  return { ventas, loading, error, addVenta, ventaRemove };
};

export default useVentas;
