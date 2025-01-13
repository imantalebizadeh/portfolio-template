import Image, { type StaticImageData } from "next/image";
import Card from "./ui/card";

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
    <Card className="max-w-xs p-6 transition-transform duration-300 hover:scale-105 md:max-w-md md:p-8">
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
    </Card>
  );
}
