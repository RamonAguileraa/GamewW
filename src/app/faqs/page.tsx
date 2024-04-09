'use client';

import React, { useState, useEffect } from 'react';

const FAQSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const faqData = [
    {
      question: '¿Cómo puedo hacer un pedido?',
      answer: 'Puedes hacer tu pedido a través de nuestro sitio web o llamando a nuestro número de atención al cliente.'
    },
    {
      question: '¿Cuál es la política de devoluciones?',
      answer: 'Aceptamos devoluciones dentro de los 30 días posteriores a la compra. Consulta nuestra política de devoluciones para más detalles.'
    },
    {
      question: '¿Cómo puedo comunicarme con el servicio al cliente?',
      answer: 'Puedes contactarnos por teléfono, correo electrónico o a través de nuestras redes sociales.'
    },
    {
      question: '¿Cuáles son los métodos de pago?',
      answer: 'Aceptamos tarjetas de crédito, débito, PayPal y transferencias bancarias.'
    },
    {
      question: '¿Cuál es el tiempo de entrega?',
      answer: 'El tiempo de entrega puede variar según la ubicación y el método de envío seleccionado. Consulta nuestra información de envío para más detalles.'
    },
    {
      question: '¿Ofrecen garantía?',
      answer: 'Sí, ofrecemos una garantía de 1 año en todos nuestros productos. Si tienes algún problema, no dudes en comunicarte con nosotros.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === faqData.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [faqData.length]);

  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Preguntas Frecuentes</h2>
        <div className="relative flex justify-center items-center overflow-hidden">
          {faqData.slice(currentSlide, currentSlide + 3).map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg p-6 mx-2 transition-transform duration-500 shadow-lg ${
                index === 1 ? 'scale-100 w-full lg:w-3/4' : 'scale-90 opacity-50 w-1/3 lg:w-1/2'
              }`}
            >
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{faq.question}</h3>
                <p className="mb-4 text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-800 rounded-lg p-8">
  <h3 className="text-2xl font-bold mb-4 text-white">Sobre Nuestra Empresa</h3>
  <p className="text-gray-300 mb-4">
    Somos una empresa líder en el mercado, comprometida con brindar productos y servicios de calidad a nuestros clientes.
  </p>
  <div className="flex justify-between">
    <div className="text-center">
      <h4 className="text-4xl font-bold text-blue-400">10+</h4>
      <p className="text-gray-300">Años de Experiencia</p>
    </div>
    <div className="text-center">
      <h4 className="text-4xl font-bold text-blue-400">5,000+</h4>
      <p className="text-gray-300">Clientes Satisfechos</p>
    </div>
    <div className="text-center">
      <h4 className="text-4xl font-bold text-blue-400">99%</h4>
      <p className="text-gray-300">Tasa de Satisfacción</p>
    </div>
  </div>
</div>
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-white">¿Necesitas más ayuda? ¡Contáctanos!</p>
          <p className="text-lg text-white">Teléfono: 123-456-789</p>
          <p className="text-lg text-white">Correo electrónico: info@tudominio.com</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;