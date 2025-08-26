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
      <aside className="fixed left-0 bottom-0 h-screen w-20 bg-gray-900 text-white flex flex-col items-center py-6 shadow-2xl rounded-r-2xl">
        <div>gg</div>
      </aside>
    </>
  );
}

export default Sidebar;
