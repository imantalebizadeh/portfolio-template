import { TESTIMONIALS } from "@/constants";

import { Fragment } from "react";
import SectionHeader from "../section-header";
import TestimonialCard from "../testimonial-card";

export default function TestimonialsSection() {
  return (
    <section className="py-16 xl:py-24" id="testimonials">
      <div className="container">
        <SectionHeader
          eyebrow="happy clients"
          title="what clients say about me"
          description="don't take my word for it. hear what our happy clients have to say about my work"
        />

        <div className="mask-image mt-12 flex overflow-x-clip py-4 xl:mt-20">
          <div className="flex shrink-0 animate-move-left gap-x-8 pr-8 [animation-duration:90s] hover:[animation-play-state:paused]">
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {TESTIMONIALS.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.name}
                    testimonial={testimonial}
                  />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
