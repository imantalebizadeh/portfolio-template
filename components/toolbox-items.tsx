import { TOOLBOX_ITEMS } from "@/constants";
import ToolboxItem from "./toolbox-item";

export default function ToolBoxItems() {
  return (
    <div className="mask-image flex items-center justify-center gap-x-6">
      {TOOLBOX_ITEMS.map((item) => (
        <ToolboxItem key={item.title} item={item} />
      ))}
    </div>
  );
}
