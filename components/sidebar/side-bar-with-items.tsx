"use client";

import { ScrollShadow } from "@nextui-org/react";

import { AcmeIcon } from "./acme";
import { items } from "./sidebar-items";

import Sidebar from "./sidebar";

export default function SidebarWithItems() {
  return (
    <div className="h-dvh">
      <div className="h-full w-72 border-r-small border-divider p-6">
        <div className="flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            <AcmeIcon className="text-background" />
          </div>
          <span className="text-small font-bold uppercase">Acme</span>
        </div>
        <ScrollShadow className="h-full max-h-full py-[10vh]">
          <Sidebar defaultSelectedKey="home" items={items} />
        </ScrollShadow>
      </div>
    </div>
  );
}
