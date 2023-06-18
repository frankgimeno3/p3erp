import React, { useState } from 'react';
import Link from "next/link";
import Fichas from "../../components/Fichas/Fichas"
import Notificaciones from "../../components/Notificaciones/Notificaciones"
import Utilidades from "../../components/Utilidades/Utilidades"

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('notifications');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderComponent = () => {
    if (selectedTab === 'NotificacionesComoponent') {
      return <Notificaciones />;
    } else if (selectedTab === 'fichas') {
      return <FichasClientes />;
    } else if (selectedTab === 'UtilidadesComponent') {
      return <Utilidades />;
    }
    return null;
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 flex justify-between bg-black text-white p-4">
        <div>
          <button
            className={`rounded-lg px-4 py-2 ${
              selectedTab === 'NotificacionesComoponent' ? 'bg-white text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('NotificacionesComoponent')}
          >
            Notificaciones
          </button>
        </div>
        <div>
          <button
            className={`rounded-lg px-4 py-2 ${
              selectedTab === 'fichas' ? 'bg-white text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('fichas')}
          >
            Fichas de clientes
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${
              selectedTab === 'UtilidadesComponent' ? 'bg-white text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('UtilidadesComponent')}
          >
            Utilidades
          </button>
          <Link href={"/"}>
            <button className="rounded-lg px-4 py-2">Cerrar Sesión</button>
          </Link>
        </div>
      </nav>

      <div>{renderComponent()}</div>
    </div>
  );
};

const NotificacionesComoponent: React.FC = () => {
  return <Notificaciones/>;
};

const FichasClientes: React.FC = () => {
  return <Fichas/>;
};

const UtilidadesComponent: React.FC = () => {
  return <Utilidades/>;
};

export default Home;