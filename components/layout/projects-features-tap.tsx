import { Fragment } from "react";

import { PROJECTS_FEATURES } from "@/constants";
import { StarIcon } from "../icons";

export default function ProjectsFeaturesTap() {
  return (
    <div className="overflow-x-clip py-16 xl:py-24">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
        <div className="mask-image flex">
          <div className="flex flex-none animate-move-left gap-x-4 py-3 pr-4 [animation-duration:30s]">
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {PROJECTS_FEATURES.map((feature) => (
                  <div
                    key={feature}
                    className="inline-flex items-center gap-x-4"
                  >
                    <span className="text-sm font-extrabold uppercase text-gray-900">
                      {feature}
                    </span>
                    <StarIcon className="size-6 -rotate-12 text-gray-900" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
