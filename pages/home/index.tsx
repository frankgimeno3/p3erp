import React, { useState } from 'react';
import Link from "next/link";
import Fichas from "../../components/Fichas/Fichas";
import Notificaciones from "../../components/Notificaciones/Notificaciones";
import Utilidades from "../../components/Utilidades/Utilidades";
import Produccion from "../../components/Produccion/Produccion";

const Home: React.FC = () => {
  // Set the initial state to 'notifications' to mark the 'Notificaciones' button by default.
  const [selectedTab, setSelectedTab] = useState('notificaciones');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderComponent = () => {
    if (selectedTab === 'notificaciones') { // Corrected the value here
      return <Notificaciones />;
    } else if (selectedTab === 'fichas') {
      return <FichasClientes />;
    } else if (selectedTab === 'utilidades') { // Corrected the value here
      return <Utilidades />;
    } else if (selectedTab === 'produccion') { // Corrected the value here
      return <Produccion />;
    }
    return null;
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 flex justify-between bg-black text-white p-4 text-sm">
        <div>
          <button
            className={`rounded-lg px-4 py-1 ${
              selectedTab === 'notifications' ? 'bg-white text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('notificaciones')}
          >
            Notificaciones
          </button>
        </div>
        <div>
          <button
            className={`rounded-lg px-4 py-1 ${
              selectedTab === 'fichas' ? 'bg-white text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('fichas')}
          >
            Fichas de clientes
          </button>
          <button
            className={`rounded-lg px-4 py-1 ${
              selectedTab === 'utilidades' ? 'bg-white text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('utilidades')}
          >
            Utilidades
          </button>
          <button
            className={`rounded-lg px-4 py-1 ${
              selectedTab === 'produccion' ? 'bg-white text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('produccion')}
          >
            Producción
          </button>
          <Link href={"/"}>
            <button className="rounded-lg px-4 py-1">Cerrar Sesión</button>
          </Link>
        </div>
      </nav>

      <div>{renderComponent()}</div>
    </div>
  );
};

const FichasClientes: React.FC = () => {
  return <Fichas />;
};

const UtilidadesComponent: React.FC = () => {
  return <Utilidades />;
};

const ProduccionComponent: React.FC = () => {
  return <Produccion />;
};

export default Home;