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
      <div
        className={`p-2 fixed left-5 bottom-110 rounded-2xl text-2xl  ${styles.header}`}
      >
        <div className="grid grid-cols-2 z-2000 items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex mb-5">
              <FaBox />
            </div>
            <div className="flex flex-col gap-3">
              <FaAddressBook />
              <FaCodeMerge />
              <FaFileLines />
              <FaWandMagicSparkles />
            </div>
            <div className="flex flex-col gap-3">
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
