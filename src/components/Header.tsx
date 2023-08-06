import { useState } from "react";
import { Drawer } from "./Drawer";
import { Nav } from "./Nav";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuBurger = () => setOpen((open) => !open);
  return (
    <>
      <header className="sticky top-0 z-10 h-[60px] ld:h-[80px] w-full flex justify-between items-center box-border px-[20px] cursor-pointer">
        <div className="h-[30px] w-[30px] text-primaryColor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            height={"100%"}
            width={"100%"}
            viewBox="0 0 935.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <title>logo</title>
            <g
              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill="currentcolor"
              stroke="none"
            >
              <path d="M1393 12611 l-1393 -186 0 -6212 0 -6213 98 0 c68 1 514 56 1502 188 l1405 188 5 1823 5 1823 270 -354 c149 -194 841 -1099 1539 -2010 l1269 -1658 54 0 c37 0 221 42 566 130 282 71 690 175 907 230 217 56 536 137 708 180 171 44 455 116 630 161 174 44 334 85 355 90 l38 10 -3 104 -3 103 -1065 1288 c-586 708 -1354 1636 -1706 2062 l-642 776 277 330 c152 182 817 977 1476 1766 660 789 1241 1484 1292 1545 51 60 89 112 85 116 -4 3 -113 38 -242 77 -129 39 -404 123 -610 186 -206 63 -486 148 -621 190 -135 41 -563 172 -951 290 -388 119 -709 216 -714 216 -5 -1 -661 -837 -1459 -1859 l-1450 -1858 -3 3333 -2 3334 -113 -1 c-84 -1 -462 -48 -1504 -188z"></path>
            </g>
          </svg>
        </div>

        <div
          className="block md:hidden relative w-[40px] h-[40px]"
          onClick={handleMenuBurger}
        >
          <span
            className={`absolute left-[9px] top-[14px] w-[20px] h-[2px] bg-primaryColor transition ease-linear duration-400 ${
              open ? "translate-y-[6px] -rotate-45" : ""
            }`}
          ></span>
          <span
            className={`absolute left-[9px] top-[20px] w-[20px] h-[2px] bg-primaryColor transition ease-in-out duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute left-[9px] top-[26px] w-[20px] h-[2px] bg-primaryColor transition ease-linear duration-400 ${
              open ? "-translate-y-[6px] rotate-45" : ""
            }`}
          ></span>
        </div>
        <div className="hidden md:block ">
          <Nav />
        </div>
      </header>
      <Drawer open={open} />
    </>
  );
};
