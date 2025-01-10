import Image, { type StaticImageData } from "next/image";

export type Testimonial = {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData;
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="relative z-0 max-w-xs shrink-0 overflow-hidden rounded-3xl bg-gray-800 p-6 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:border-2 after:border-white/20 after:content-[''] md:max-w-md md:p-8">
      <div className="absolute inset-0 -z-10 bg-[url('/images/grain.jpg')] opacity-5" />
      <div className="flex items-center gap-x-4">
        <div className="grid size-14 place-items-center overflow-hidden rounded-full bg-gray-700 p-0.5">
          <Image src={testimonial.avatar} alt={testimonial.name} />
        </div>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-white/60">{testimonial.position}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-white/60 md:mt-6 md:text-base">
        {testimonial.text}
      </p>
    </div>
  );
}
