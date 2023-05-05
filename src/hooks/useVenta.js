import { useEffect, useState } from "react";
import { getSingleVentaService } from "../services";

const useVenta = (id) => {
  const [venta, setVenta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadVenta = async () => {
      try {
        setLoading(true);

        const data = await getSingleVentaService(id);

        setVenta(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadVenta();
  }, [id]);

  return { venta, loading, error };
};

export default useVenta;
