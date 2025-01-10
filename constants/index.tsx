import { JSX } from "react";

import aiStartupLandingPage from "@/public/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/public/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/public/images/light-saas-landing-page.png";
import memojiAvatar1 from "@/public/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/public/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/public/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/public/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/public/images/memoji-avatar-5.png";

import { SparkleIcon, StarIcon } from "@/components/icons";
import type { Testimonial } from "@/components/testimonial-card";

const NAV_ITEMS: { id: number; title: string; url: string }[] = [
  { id: 1, title: "Home", url: "#" },
  { id: 2, title: "Projects", url: "#" },
  { id: 3, title: "About", url: "#" },
  { id: 4, title: "Contact", url: "#" },
];

const STARS_ICONS: {
  size: number;
  rotation: number;
  component: JSX.Element;
}[] = [
  {
    size: 800,
    rotation: -72,
    component: <StarIcon className="size-28 text-emerald-300" />,
  },
  {
    size: 550,
    rotation: 20,
    component: <StarIcon className="size-12 text-emerald-300" />,
  },
  {
    size: 590,
    rotation: 98,
    component: <StarIcon className="size-8 text-emerald-300" />,
  },
  {
    size: 430,
    rotation: -15,
    component: <SparkleIcon className="size-8 text-emerald-300/20" />,
  },
  {
    size: 440,
    rotation: 79,
    component: <SparkleIcon className="size-5 text-emerald-300/20" />,
  },
  {
    size: 530,
    rotation: 178,
    component: <SparkleIcon className="size-10 text-emerald-300/20" />,
  },
  {
    size: 710,
    rotation: 144,
    component: <SparkleIcon className="size-14 text-emerald-300/20" />,
  },
  {
    size: 720,
    rotation: 85,
    component: <div className="size-3 rounded-full bg-emerald-300/20" />,
  },
  {
    size: 520,
    rotation: -41,
    component: <div className="size-2 rounded-full bg-emerald-300/20" />,
  },
  {
    size: 650,
    rotation: -5,
    component: <div className="size-2 rounded-full bg-emerald-300/20" />,
  },
];

const PROJECTS = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

const PROJECTS_FEATURES: string[] = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Customizable",
  "Usable",
  "Reliable",
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export { NAV_ITEMS, PROJECTS, PROJECTS_FEATURES, STARS_ICONS, TESTIMONIALS };
