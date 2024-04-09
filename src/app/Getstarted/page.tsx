import Link from 'next/link';
import React from "react";
import { Meteors } from '../components/ui/meteors';

export default function LoginSignupPage() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      {/* Mostrar los meteoros en el fondo */}
      <Meteors number={70} className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-4xl font-extrabold text-white drop-shadow-md">
            Bienvenido a nuestra plataforma
          </h2>
          <p className="mt-2 text-gray-300 font-medium drop-shadow-sm">
            Inicia sesión o regístrate para acceder a todas nuestras funcionalidades
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md drop-shadow-2xl">
          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-8 px-4 shadow-lg rounded-lg sm:px-10 relative">
            <div className="space-y-8">
              <Link href="https://live-gorilla-45.accounts.dev/sign-in" passHref>
                <button
                  type="button"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out transform hover:scale-105"
                >
                  Iniciar sesión
                </button>
              </Link>
              <Link href="https://live-gorilla-45.accounts.dev/sign-up" passHref>
                <button
                  type="button"
                  className="w-full mt-10 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 ease-in-out transform hover:scale-105"
                >
                  Registrarse
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
