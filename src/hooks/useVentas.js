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

  return { ventas, loading, error, addVenta };
};

export default useVentas;
