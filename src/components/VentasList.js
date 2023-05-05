import { Venta } from "./Venta";

export const VentasList = ({ ventas }) => {
  return ventas.length ? (
    <ul>
      {ventas.map((venta) => (
        <li key={venta.id}>
          <Venta venta={venta} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay ventas subidas aún..</p>
  );
};

//1:26:33
