import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">¡Contáctanos!</h1>
      <p className="text-lg mb-8">Ponte en contacto con nosotros a través de las siguientes vías:</p>
      
      <div className="flex space-x-4 mb-8">
        {/* Agrega tus iconos de redes sociales aquí */}
        <a href="#" className="text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Aquí puedes agregar el SVG de tu icono de red social */}
          </svg>
        </a>
        {/* Puedes agregar más iconos para otras redes sociales */}
      </div>
      
      <form className="flex flex-col items-center">
        <input type="text" placeholder="Nombre" className="bg-gray-900 text-white rounded-md px-4 py-2 mb-4" />
        <input type="email" placeholder="Correo electrónico" className="bg-gray-900 text-white rounded-md px-4 py-2 mb-4" />
        <textarea placeholder="Mensaje" className="bg-gray-900 text-white rounded-md px-4 py-2 mb-4 resize-none"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md">Enviar</button>
      </form>
    </div>
  );
}

export default ContactPage;
