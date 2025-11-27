"use client";

import {
  CaretDownIcon,
  CaretRightIcon,
  CubeIcon,
  CurrencyDollarSimpleIcon,
  HeartIcon,
  HorseIcon,
} from "@phosphor-icons/react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Button>Placeholder</Button>
        <Button variant="secondary">Placeholder</Button>
        <Button variant="destroy">Placeholder</Button>
        <Button variant="tertiary">
          Placeholder <CaretRightIcon size={16} weight="fill" />
        </Button>
        <Button variant="outline" size="md">
          <CurrencyDollarSimpleIcon size={16} /> Placeholder{" "}
          <CaretDownIcon size={16} weight="fill" />
        </Button>

        <HorseIcon />
        <HeartIcon color="#AE2983" weight="fill" size={32} />
        <CubeIcon color="teal" weight="duotone" />

        <div className="text-preset-1 text-cool-steel">
          Phasellus ultrices nulla quis nibh
        </div>

        <div className="text-preset-2">Phasellus ultrices nulla quis nibh</div>

        <div className="text-preset-3">Phasellus ultrices nulla quis nibh</div>

        <div className="text-preset-4">
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
          consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
          gravida non, commodo a, sodales sit amet, nisi.
        </div>

        <div className="text-preset-4-bold">
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
          consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
          gravida non, commodo a, sodales sit amet, nisi.
        </div>

        <div className="text-preset-5">
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
          consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
          gravida non, commodo a, sodales sit amet, nisi.
        </div>

        <div className="text-preset-4-bold">
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
          consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
          gravida non, commodo a, sodales sit amet, nisi.
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
