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
      <aside
        className={`fixed top-0 left-0 right-0 w-screen h-screen ${
          open ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="absolute top-0 left-0 z-5 w-full h-full backdrop-blur-[1px] bg-bgOpacityColor"></div>
        <div
          className={`absolute top-0 right-0 w-3/4 flex items-center justify-center bg-drawerBg h-screen transition delay-200 duration-400 linear ${
            open ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <div className="">
            <Nav />
          </div>
        </div>
      </aside>,
      document.body
    );
  }
  return null;
};
