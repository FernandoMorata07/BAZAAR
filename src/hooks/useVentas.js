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

  return { ventas, loading, error };
};

export default useVentas;
