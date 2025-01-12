import Image from "next/image";

import mapImage from "@/public/images/map.png";
import smileMemoji from "@/public/images/memoji-smile.png";

import HobbiesList from "../hobbies-list";
import { StarIcon } from "../icons";
import SectionHeader from "../section-header";
import ToolBoxItems from "../toolbox-items";
import Card from "../ui/card";

export default function AboutSection() {
  return (
    <section className="py-16 xl:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="about me"
          title="a glimpse about my life"
          description="Learn more about who I am, and what I do, what inspires me"
        />
        <div className="mt-16 flex flex-col gap-8 md:grid md:grid-cols-5 xl:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 xl:col-span-1">
            <Card.Header>
              <Card.Title>
                <StarIcon className="size-9 text-emerald-300" /> My Reads
              </Card.Title>
              <Card.Description>
                Explore the books shaping my perspective
              </Card.Description>
            </Card.Header>

            <div className="mx-auto mt-2 w-40 md:mt-0">
              <Image
                src="/images/book-cover.png"
                alt="Book Cover"
                width={200}
                height={300}
              />
            </div>
          </Card>

          <Card className="card md:col-span-3 xl:col-span-2">
            <Card.Header>
              <Card.Title>
                <StarIcon className="size-9 text-emerald-300" /> My Toolbox
              </Card.Title>
              <Card.Description>
                Explore the technologies and tools I use to craft execeptional
                digital experiences
              </Card.Description>
            </Card.Header>

            <div className="space-y-6">
              <ToolBoxItems />
              <ToolBoxItems />
            </div>
          </Card>

          <Card className="flex h-[320px] flex-col p-0 md:col-span-3 md:h-auto xl:col-span-2">
            <Card.Header>
              <Card.Title>
                <StarIcon className="size-9 text-emerald-300" /> Beyond Code
              </Card.Title>
              <Card.Description>
                Explore my interests and hobbies beyond the digital realm
              </Card.Description>
            </Card.Header>

            <HobbiesList />
          </Card>

          <Card className="p-0 md:col-span-2 xl:col-span-1">
            <Image
              src={mapImage}
              alt="map"
              placeholder="blur"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:outline-offset-2 after:outline-gray-950/30 after:content-['']">
              <Image src={smileMemoji} alt="smile" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
