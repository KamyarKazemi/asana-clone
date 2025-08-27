import styles from "../css/HeaderStyles.module.css";
import {
  FaBox,
  FaAddressBook,
  FaCodeMerge,
  FaFileLines,
  FaWandMagicSparkles,
  FaBorderNone,
  FaGear,
} from "react-icons/fa6";
import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("box");

  const navItems = [
    { id: "box", icon: <FaBox />, label: "Dashboard" },
    { id: "address", icon: <FaAddressBook />, label: "Contacts" },
    { id: "merge", icon: <FaCodeMerge />, label: "Merge Code" },
    { id: "files", icon: <FaFileLines />, label: "Files" },
    { id: "magic", icon: <FaWandMagicSparkles />, label: "Magic Tools" },
    { id: "border", icon: <FaBorderNone />, label: "Borders" },
    { id: "settings", icon: <FaGear />, label: "Settings" },
  ];

  return (
    <>
      <aside
        className={`fixed left-0 bottom-0 h-screen w-20 bg-gray-900 text-white flex flex-col items-center py-6 shadow-2xl rounded-r-2xl ${styles.header}`}
      >
        <div className="flex flex-col gap-8 mt-6  w-full items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`relative group p-3 rounded-xl transition-all duration-300 ${
                active === item.id
                  ? "bg-gray-700 text-cyan-700"
                  : "hover:bg-gray-800"
              }`}
            >
              {item.icon}
              <span className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition bg-gray-800 text-white text-sm px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </aside>
      <div className={`fixed ${styles.mobileHeader}`}>
        <div>mobile header</div>
      </div>
    </>
  );
}

export default Sidebar;
