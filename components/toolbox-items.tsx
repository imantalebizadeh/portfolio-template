import { Fragment } from "react";

import { TOOLBOX_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

import ToolboxItem from "./toolbox-item";

export default function ToolBoxItems({
  itemsWrapperClassName,
}: {
  itemsWrapperClassName?: string;
}) {
  return (
    <div className="mask-image flex items-center gap-x-6">
      <div
        className={cn(
          "flex flex-none items-center gap-x-6",
          itemsWrapperClassName,
        )}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Fragment key={index}>
            {TOOLBOX_ITEMS.map((item) => (
              <ToolboxItem key={item.title} item={item} />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
