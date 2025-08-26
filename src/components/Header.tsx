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

function Header() {
  return (
    <>
      <div className={`p-2 ${styles.header}`}>
        <div className="fixed left-5 bottom-110 grid grid-cols-2 z-2000">
          <div className="flex flex-col">
            <div className="flex">
              <FaBox />
            </div>
            <div className="flex flex-col">
              <FaAddressBook />
              <FaCodeMerge />
              <FaFileLines />
              <FaWandMagicSparkles />
            </div>
            <div className="flex">
              <FaBorderNone />
              <FaGear />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
