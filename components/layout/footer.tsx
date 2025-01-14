import { FOOTER_LINKS } from "@/constants";
import { ArrowUpRightIcon } from "../icons";

export default function Footer() {
  return (
    <footer className="relative overflow-x-clip">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />

      <div className="container">
        <div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
          <p className="text-white/50">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center gap-2 font-semibold"
              >
                {link.name} <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
