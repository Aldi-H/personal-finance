"use client";

import {
  ArrowsDownUpIcon,
  CaretDownIcon,
  CaretRightIcon,
  ChartDonutIcon,
  CubeIcon,
  CurrencyDollarSimpleIcon,
  HeartIcon,
  HorseIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  ReceiptIcon,
  TipJarIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

import PfCombobox from "@/components/pf-components/pf-combobox/pf-combobox";
import PfDropdown from "@/components/pf-components/pf-dropdown/pf-dropdown";
import PfInput from "@/components/pf-components/pf-input/pf-input";
import PfBottomNav from "@/components/pf-components/pf-navigation-menu/pf-navigation-menu";
import PfPagination from "@/components/pf-components/pf-pagination/pf-pagination";

const items = [
  {
    label: "Settings",
    value: "settings",
  },
  {
    label: "Logout",
    value: "logout",
  },
];

const navItems = [
  {
    label: "Overview",
    href: "/overview",
    icon: <HouseIcon size={24} weight="fill" />,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: <ArrowsDownUpIcon size={24} weight="fill" />,
  },
  {
    label: "Budgets",
    href: "/budgets",
    icon: <ChartDonutIcon size={24} weight="fill" />,
  },
  {
    label: "Pots",
    href: "/pots",
    icon: <TipJarIcon size={24} weight="fill" />,
  },
  {
    label: "Recurring bills",
    href: "/recurring-bills",
    icon: <ReceiptIcon size={24} weight="fill" />,
  },
];

export default function Home() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="flex min-h-screen flex-col items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div>
          <PfBottomNav navItems={navItems} activePath="/budgets" />
        </div>

        <div className="w-full">
          <PfPagination
            page={page}
            totalPages={5}
            onPageChange={(p) => setPage(p)}
          />
        </div>

        <PfInput
          label="Placeholder Label"
          htmlFor="input-1"
          helperText="Helper text"
        >
          <>
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
              <MagnifyingGlassIcon size={16} />
            </InputGroupAddon>
          </>
        </PfInput>

        <div className="w-80">
          <PfCombobox
            comboboxItems={items}
            value={value}
            onValueChange={setValue}
            placeholder="Lorem ipsum dolor sit."
          />
        </div>

        <PfDropdown
          triggerLabel="Lorem ipsum dolor sit."
          triggerIconStart={<MagnifyingGlassIcon size={16} />}
          triggerIconEnd={<CaretDownIcon size={16} weight="fill" />}
          items={items}
        />

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
