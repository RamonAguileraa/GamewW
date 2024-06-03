'use client';

import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from './3d-card';
import Link from 'next/link';

export function ThreeDCardDemo() {
  return (
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
  );
}
