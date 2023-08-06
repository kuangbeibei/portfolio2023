import { useIsSsr } from "@/hooks/useIsSsr";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Nav } from "./Nav";

type DrawerProps = {
  open: boolean;
};

export const Drawer = ({ open }: DrawerProps) => {
  const isSSR = useIsSsr();

  if (!isSSR) {
    return createPortal(
      <section className="block md:hidden">
        <div
          className={`absolute top-0 left-0 z-5 w-full h-full ${
            open ? "backdrop-blur-[1px] bg-bgOpacityColor" : ""
          }`}
        ></div>
        <aside
          className={`absolute top-0 right-0 w-3/4 backdrop-blur-sm bg-lightBg flex items-center justify-center h-screen transition duration-400 linear ${
            open ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <Nav />
        </aside>
      </section>,
      document.body
    );
  }
  return null;
};
