'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SparklesCore } from './components/ui/sparkless';
import { CardBody, CardContainer, CardItem } from './components/ui/3d-card';
import Link from 'next/link';

export default function Home() {
  const [showTerms, setShowTerms] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const acceptTerms = () => {
    setAcceptedTerms(true);
    setShowTerms(false);
  };

  const rejectTerms = () => {
    setAcceptedTerms(false);
    setShowTerms(false);
  };

  return (
    <section>
      {showTerms && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg z-50">
            <h2 className="text-2xl font-bold mb-4">Términos y Condiciones</h2>
            <p className="mb-4">
              Bienvenido a WonderWagons. Al utilizar nuestros servicios, usted acepta las siguientes condiciones. Lea detenidamente.
            </p>
            <p className="mb-4">
              Los usuarios son responsables de cualquier actividad que ocurra en su cuenta y deben mantener la confidencialidad de su contraseña.
            </p>
            <div className="flex justify-between">
              <button onClick={acceptTerms} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Aceptar
              </button>
              <button onClick={rejectTerms} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Rechazar
              </button>
            </div>
          </div>
        </div>
      )}
      {acceptedTerms && (
        <>
          <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="flex-grow flex flex-col items-center justify-center">
              <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
                WonderWagons
              </h1>
              <div className="w-[40rem] h-40 relative">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                <SparklesCore
                  background="transparent"
                  minSize={1}
                  maxSize={1}
                  particleDensity={3200}
                  className="w-full h-full"
                  particleColor="#ffffff"
                />
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 delay-150 hover:-translate-y-1 hover:scale-110 ... px-[46px] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-initdata-te-ripple-color="light"
              >
                Juega gratis
              </button>
            </div>
          </div>
          <ThreeDCardDemo />
        </>
      )}
    </section>
  );
}

export function ThreeDCardDemo() {
  return (
    <>
      <div className="flex justify-between bg-black">
        <CardContainer className="inter-var ml-40">
          <CardBody className="bg-black-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-50 dark:bg-white dark:border-zinc-50 border-white w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-black">
              Explora diferentes biomas!
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-black"
            >
              Experimenta el estar en diferentes lugares mientras te diviertes
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/paisaje.jpg"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                See more →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-black dark:text-white text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-black-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-50 dark:bg-white dark:border-zinc-50 border-white w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-black">
              Pon a prueba tu estrategia
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-black"
            >
              Realiza puzzles para seguir avanzando
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/gameh.webp"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                See more →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-black dark:text-white text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var mr-40">
          <CardBody className="bg-black-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-50 dark:bg-white dark:border-zinc-50 border-white w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-black">
              Descubre nuevas historias
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-black"
            >
              Explora la misteriosa historia que rodea al mundo de WonderWagons
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/landscape2.jpg"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                See more →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-black dark:text-white text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      <div className="relative">
        <div id="infoww" className="border-gray-950 bg-black bg-cover bg-[url('/decor.png')] relative z-10">
          <main className="flex min-h-screen p-24">
            <div className="flex flex-col items-center justify-center w-1/2 space-y-8">
              <div className="ml-10 font-Anta text-center text-white">
                <h1 className="text-6xl font-bold mb-4">¡Otra aventura te espera!</h1>
                <h3 className="text-3xl mb-8">Explora nuevos horizontes</h3>
                <div className="bg-white p-8 rounded-md shadow-md text-gray-800">
                  <p className="text-lg leading-relaxed">
                    Sumérgete en una experiencia de realidad virtual inmersiva donde explorarás diversos biomas mientras
                    resuelves acertijos y descubres una cautivadora narrativa. Embárcate en una aventura única que te
                    llevará a través de paisajes asombrosos, desde densos bosques hasta vastos desiertos, mientras te
                    sumerges en una intrigante historia. Prepárate para desafiar tu ingenio y habilidades mientras te
                    enfrentas a los misterios que cada bioma tiene para ofrecer. Sumérgete en este mundo virtual y
                    descubre los secretos que esperan ser revelados en cada esquina.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end w-1/2">
              <div className="shadow-2xl mr-10 rounded-lg overflow-hidden">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/IqkzJ3MrPj0"
                  title="Last Train Home | Gameplay Trailer"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
