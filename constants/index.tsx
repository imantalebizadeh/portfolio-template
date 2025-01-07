import { JSX } from "react";
import { SparkleIcon, StarIcon } from "@/components/icons";

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

export { NAV_ITEMS, STARS_ICONS };
