import Link from "next/link";
import TarjetaNotificacion from "./TarjetaNotificacion";
import Navnotificaciones from "../navherramientas/navnotificaciones";

export default function Notificaciones() {
  return (
    <div className="flex flex-row mt-14 pt-1">
      <Navnotificaciones />
      <div className="flex flex-col ml-24 pl-20 w-full">
        <div className="bg-white px-20 py-4 w-full">
          <h1 className="text-3xl px-10 pt-3">
            Bienvenido, <span className="font-bold">usuario</span>
          </h1>
          <p className="text-xl px-10 pb-3">
            Últimas notificaciones en relación a sus suscripciones
          </p>
        </div>


        <div className="flex flex-col justify-left text-left align left mt-5">
          <TarjetaNotificacion />
          <TarjetaNotificacion />
          <TarjetaNotificacion />
          <TarjetaNotificacion />
          <TarjetaNotificacion />
          <TarjetaNotificacion />
          <TarjetaNotificacion />
        </div>
      </div>
    </div>
  );
}
