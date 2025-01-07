// import { STARS_ICONS } from "@/constants";

import { JSX } from "react";
import { SparkleIcon, StarIcon } from "./icons";

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

export default function StarsEffect() {
  return (
    <>
      {STARS_ICONS.map((icon, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="flex animate-spin items-start justify-start [animation-duration:30s]"
            style={{
              width: icon.size,
              height: icon.size,
              rotate: `${icon.rotation}deg`,
            }}
          >
            <div
              className="inline-block animate-spin [animation-duration:5s]"
              style={{ rotate: `${icon.rotation * -1}deg` }}
            >
              {icon.component}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
