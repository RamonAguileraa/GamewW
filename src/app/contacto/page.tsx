'use client'
import React, { useState } from 'react';
import RequestPage from '../request/page';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
    // Limpia el formulario después de enviar
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Formulario de contacto */}
        <div className="col-span-1 flex justify-start">
          <div className="bg-gray-900 rounded-xl shadow-xl p-8 w-full md:w-full">
            <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-medium text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-2 border-gray-700 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-white">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-2 border-gray-700 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-white">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border-2 border-gray-700 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Sección de redes sociales */}
        <div className="col-span-1 flex flex-col justify-center items-center space-y-6">
          <h2 className="text-3xl font-bold">Síguenos en nuestras redes sociales</h2>
          <div className="flex space-x-6 mt-6">
            <a href="#" className="text-white hover:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
                <path d="M14.023 15.989c-.231-.029-.414-.87-.748-2.411-.334-1.542-.457-2.053-.781-2.089-.324-.036-.666.984-.983 1.55a.24.24 0 0 1-.368.071 7.429 7.429 0 0 1-2.254-2.933c-.166-.347-.263-.517-.341-.517-.077 0-.177.17-.302.51-.124.34-.99 2.717-1.176 3.179a.443.443 0 0 1-.685.186 9.93 9.93 0 0 1-2.45-2.971c-.31-.468-.487-.745-.56-.851-.073-.106-.014-.172.113-.205 1.755-.455 3.849-.561 5.451-.305a9.529 9.529 0 0 1 2.326 1.098c1.614 1.04 2.444 1.88 2.486 2.53.046.696-.52 1.032-1.77 1.057zm-5.648-7.059c1.009 0 1.824-1.011 1.824-2.253s-.815-2.253-1.824-2.253c-1.01 0-1.825 1.011-1.825 2.253s.814 2.253 1.825 2.253zm6.592 0c1.009 0 1.824-1.011 1.824-2.253s-.815-2.253-1.824-2.253c-1.01 0-1.825 1.011-1.825 2.253s.814 2.253 1.825 2.253zm-4.16-1.914c.09.146.166.189.241.189.075 0 .133-.043.223-.189.09-.146.157-.339.157-.532 0-.193-.066-.386-.157-.532-.09-.146-.148-.189-.223-.189-.075 0-.15.043-.24.189-.09.146-.149.339-.149.532 0 .193.059.386.149.532z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.9-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
                <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.216-.419c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.136.419 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.216c-.043.962-.055 1.267-.055 3.71s0 2.747.055 3.71c.015.748.156 1.486.419 2.216.305.945.767 1.78 1.316 2.478.628.643 1.372 1.094 2.178 1.336.752.208 1.486.365 2.216.419.962.043 1.267.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.216-.419 4.61 4.61 0 0 0 2.633-2.633c.263-.731.404-1.468.419-2.216.043-.962.055-1.267.055-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contenedor del mapa */}
        <div className="col-span-1 flex justify-end">
          <div className="bg-gray-900 rounded-xl shadow-xl p-8 w-full md:w-4/5">
            <h2 className="text-3xl font-bold mb-6">Ubicación</h2>
            <RequestPage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;