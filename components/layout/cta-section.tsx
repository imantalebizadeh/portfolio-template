import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "../icons";
import { buttonVariants } from "../ui/button";

export default function CTASection() {
  return (
    <section className="py-16 xl:py-24">
      <div className="container">
        <div className="z-0 rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:text-left">
          <div className="absolute inset-0 -z-10 bg-[url('/images/grain.jpg')] opacity-5" />
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div>
              <h2 className="font-serif text-2xl font-medium md:text-4xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you to achieve your goals.
              </p>
            </div>
            <a
              href="#"
              className={cn(
                buttonVariants(),
                "bg-gray-900 font-semibold text-white",
              )}
            >
              Contact Me <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
