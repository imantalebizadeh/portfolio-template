import { HOBBIES } from "@/constants";

export default function HobbiesList() {
  return (
    <div className="relative flex-1">
      {HOBBIES.map((item) => (
        <div
          key={item.title}
          className="absolute inline-flex select-none gap-x-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5 hover:cursor-grab active:cursor-grabbing"
          style={{
            left: item.position.left,
            top: item.position.top,
          }}
        >
          <span>{item.emoji}</span>
          <span className="font-medium text-gray-950">{item.title}</span>
        </div>
      ))}
    </div>
  );
}
