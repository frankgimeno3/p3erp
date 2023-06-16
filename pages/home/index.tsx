import React, { useState } from 'react';

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('notifications');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderComponent = () => {
    if (selectedTab === 'notifications') {
      return <Notificaciones />;
    } else if (selectedTab === 'fichas') {
      return <FichasClientes />;
    } else if (selectedTab === 'utilidades') {
      return <Utilidades />;
    }
    return null;
  };

  return (
    <div>
      <nav className="flex justify-between bg-black text-white p-4">
        <div>
          <button
            className={`rounded-lg px-4 py-2 ${
              selectedTab === 'notifications' ? 'bg-gray-300 text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('notifications')}
          >
            Notificaciones
          </button>
        </div>
        <div>
          <button
            className={`rounded-lg px-4 py-2 ${
              selectedTab === 'fichas' ? 'bg-gray-300 text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('fichas')}
          >
            Fichas de clientes
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${
              selectedTab === 'utilidades' ? 'bg-gray-300 text-gray-900' : ''
            }`}
            onClick={() => handleTabChange('utilidades')}
          >
            Utilidades
          </button>
          <button className="rounded-lg px-4 py-2">Cerrar Sesión</button>
        </div>
      </nav>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl text-center">Bienvenido, Usuario!</h1>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
};

const Notificaciones: React.FC = () => {
  return <div>Componente de Notificaciones</div>;
};

const FichasClientes: React.FC = () => {
  return <div>Componente de Fichas de Clientes</div>;
};

const Utilidades: React.FC = () => {
  return <div>Componente de Utilidades</div>;
};

export default Home;