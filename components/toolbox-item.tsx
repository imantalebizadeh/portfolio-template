export type ToolboxItem = {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

export default function ToolboxItem({ item }: { item: ToolboxItem }) {
  return (
    <div className="flex items-center gap-x-4 rounded-lg border-2 border-white/10 px-3 py-2">
      <>
        <item.icon className="size-10 fill-[url(#icon)] text-sky-400" />
        <svg className="absolute size-0">
          <linearGradient id="icon">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </svg>
      </>
      <span>{item.title}</span>
    </div>
  );
}
