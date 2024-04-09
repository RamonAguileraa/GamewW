'use client'
import React from "react";
import { motion } from "framer-motion";

export default function LampDemo() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <div className="text-white mt-36 text-center"></div>
      <img src="/logoblanco.png" alt="Logo" className="-mt-20 mb-8" />
      <h1 className="text-4xl mt-16 text-white font-bold">Sobre Nosotros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-black bg-opacity-90 ml-10 mb-10 text-white rounded-lg shadow-lg p-6 border border-white border-solid animate-pulse">
          <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
          <p className="text-lg mb-4">
            En <span className="font-bold">Tu Empresa</span>, nos comprometemos a
            ofrecer soluciones tecnológicas innovadoras y de calidad que impulsen
            el éxito de nuestros clientes.
          </p>
          <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-lg mb-4">
            Contamos con un equipo de profesionales altamente capacitados y
            apasionados que trabajan para cumplir con nuestra misión y brindar
            un servicio excepcional a nuestros clientes.
          </p>
          <div className="flex items-center justify-center">
            <div className="bg-white bg-opacity-90 rounded-full h-16 w-16 flex items-center justify-center shadow-lg hover:animate-spin">
              <span className="text-2xl text-black">1</span>
            </div>
            <p className="ml-4 text-lg text-white">Año de Experiencia</p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl mt-16 text-white font-bold">Nuestro equipo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative h-64 md:h-80">
            <img src="/john-doe.jpg" alt="John Doe" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative h-64 md:h-80">
            <img src="/jane-smith.jpg" alt="Jane Smith" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-500">CTO</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative h-64 md:h-80">
            <img src="/bob-johnson.jpg" alt="Bob Johnson" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">Bob Johnson</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative h-64 md:h-80">
            <img src="/sarah-lee.jpg" alt="Sarah Lee" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">Sarah Lee</h3>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}