import { TESTIMONIALS } from "@/constants";

import TestimonialCard from "../testimonial-card";
import SectionHeader from "../section-header";

export default function TestimonialsSection() {
  return (
    <section className="py-16 xl:py-24" id="testimonials">
      <div className="container">
        <SectionHeader
          eyebrow="happy clients"
          title="what clients say about me"
          description="don't take my word for it. hear what our happy clients have to say about my work"
        />

        <div className="mask-image mt-16 flex gap-x-8 overflow-x-clip xl:mt-24">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
