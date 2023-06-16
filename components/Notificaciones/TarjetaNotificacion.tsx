export default function TarjetaNotificacion() {
    return (
      <div className="mb-5 pl-10">
        <div
          style={{
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '15px',
          }} 
        >
          <h1 className="text-xl mb-1 pl-5 pt-5">
            El usuario <span style={{ fontWeight: 'bold' }}>Ricardo</span> ha hecho cambios en la ficha de{' '}
            <span style={{ fontWeight: 'bold' }}>Lisec</span>, con código{' '}
            <span style={{ fontWeight: 'bold' }}>234234</span>
          </h1>
          <div className="pl-5 pb-5">
            <p style={{ color: 'darkgray'}}>Fecha y hora: 16 de junio de 2023, 10:00 AM</p>
          <div style={{ display: 'flex', justifyContent: 'start' }}>
            <button className="rounded-lg px-4 py-1 bg-black text-white mt-5">Ver más información</button>
          </div>
          </div>
        </div>
      </div>
    );
  }