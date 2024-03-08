import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import Calendar from "../assets/images/Calendar.png";
import Chart_fill from "../assets/images/Chart_fill.png";
import Chart from "../assets/images/Chart.png";
import Chat from "../assets/images/Chat.png";
import control from "../assets/images/control.png";
import Folder from "../assets/images/Folder.png";
import logo from "../assets/images/logo.png";
import Search from "../assets/images/Search.png";
import Setting from "../assets/images/Setting.png";
import User from "../assets/images/User.png";
import Image from "next/image";

const AnimatedSideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];

  const [active, setActive] = useState(false);

  return (
    <div className="flex">
      {/* left side panel */}
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-black h-screen p-5  pt-8 relative duration-300`}
      >
        <Image
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          src={control}
        />

        <div className="flex gap-x-4 items-center">
          <Image
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            src={logo}
          />

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Image
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
                src={Menu.src}
              />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>

      {/* right side panel */}
      <div
        className={` ${
          active ? "w-72" : "w-20 "
        }  absolute cursor-pointer right-0 top-9 h-screen p-5  pt-8 duration-300 bg-gradient-to-br from-violet-500 to-indigo-500 justify-end items-end`}

        // className={`absolute cursor-pointer right-3 top-9 w-7 border-dark-purple
        //   border-2 rounded-full  ${active ? "w-72" : "w-20 "}`}
      >
        {/* <AnimatedHamburgerButton /> */}

        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.button
            initial={false}
            animate={active ? "open" : "closed"}
            onClick={() => setActive((pv) => !pv)}
            className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
          >
            <motion.span
              variants={VARIANTS.top}
              className="absolute h-1 w-10 bg-white"
              style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
            />
            <motion.span
              variants={VARIANTS.middle}
              className="absolute h-1 w-10 bg-white"
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            <motion.span
              variants={VARIANTS.bottom}
              className="absolute h-1 w-5 bg-white"
              style={{
                x: "-50%",
                y: "50%",
                bottom: "35%",
                left: "calc(50% + 10px)",
              }}
            />
          </motion.button>
        </MotionConfig>
      </div>
    </div>
  );
};

// const AnimatedHamburgerButton = () => {
//   const [active, setActive] = useState(false);
//   return (
//     <MotionConfig
//       transition={{
//         duration: 0.5,
//         ease: "easeInOut",
//       }}
//     >
//       <motion.button
//         initial={false}
//         animate={active ? "open" : "closed"}
//         onClick={() => setActive((pv) => !pv)}
//         className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
//       >
//         <motion.span
//           variants={VARIANTS.top}
//           className="absolute h-1 w-10 bg-white"
//           style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
//         />
//         <motion.span
//           variants={VARIANTS.middle}
//           className="absolute h-1 w-10 bg-white"
//           style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
//         />
//         <motion.span
//           variants={VARIANTS.bottom}
//           className="absolute h-1 w-5 bg-white"
//           style={{
//             x: "-50%",
//             y: "50%",
//             bottom: "35%",
//             left: "calc(50% + 10px)",
//           }}
//         />
//       </motion.button>
//     </MotionConfig>
//   );
// };

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
export default AnimatedSideBar;
