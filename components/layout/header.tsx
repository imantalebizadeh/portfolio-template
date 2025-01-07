"use client";

import { useState } from "react";

import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [activeNavItem, setActiveNavItem] = useState(1);

  return (
    <header className="fixed left-1/2 right-1/2 top-3 z-10 flex items-center justify-center">
      <nav className="flex gap-x-1.5 rounded-full border border-white/10 bg-white/10 p-1 backdrop-blur">
        {NAV_ITEMS.map((navItem) => {
          const isActive = navItem.id === activeNavItem;

          return (
            <a
              key={navItem.title}
              href={navItem.url}
              data-active={isActive}
              className={cn("nav-item", isActive && "bg-white text-gray-900")}
              onClick={() => setActiveNavItem(navItem.id)}
            >
              {navItem.title}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
