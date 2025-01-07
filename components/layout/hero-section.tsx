import Image from "next/image";

import { ArrowDownIcon } from "@/components/icons";
import memojiComputerImage from "@/public/images/memoji-computer.png";

import RingsEffect from "../rings-effect";
import StarsEffect from "../stars-effect";
import { buttonVariants } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-x-clip py-32 md:py-48 xl:py-60">
      <div className="absolute inset-0 -z-40 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black,transparent)]">
        {/* Grain */}
        <div className="absolute inset-0 -z-30 bg-[url('/images/grain.jpg')] opacity-5" />

        {/* Rings */}
        <RingsEffect />

        {/* Stars */}
        <StarsEffect />
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiComputerImage}
            alt="Memoji Computer"
            width={100}
            height={100}
          />

          <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium">
              Available for new projects
            </span>
          </div>
        </div>
        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
            Bulling Exceptional User Experience
          </h1>
          <p className="mt-4 text-center text-white/60">
            I am a web developer with a passion for creating innovative
            solutions.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <a href="#" className={buttonVariants({ variant: "outline" })}>
            Explore my projects
            <ArrowDownIcon />
          </a>
          <a href="#" className={buttonVariants()}>
            <span>👋</span>
            Let&apos;s connect
          </a>
        </div>
      </div>
    </section>
  );
}
