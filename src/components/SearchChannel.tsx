import styles from "../css/headerStyles.module.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, resetValue } from "../redux/slices/searchChannelSlice";
import { fetchChannelData } from "../redux/asyncThunks/fetchChannelData";

function SearchChannel() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchChannel.value);
  const { data, loading, error } = useSelector((state) => state.users);

  const handleForm = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      dispatch(fetchChannelData(searchValue));
    }
    dispatch(resetValue());
  };

  return (
    <>
      <div className="bg-[#FBFBFB] p-3 rounded absolute left-160 top-70 z-50">
        <form
          onSubmit={handleForm}
          className={`flex items-center ${styles.searchContainer}`}
        >
          <input
            type="text"
            placeholder="Search For A Channel..."
            className="p-3 text-black bg-[#e3e3e3] rounded transition-all ease-in-out focus:bg-[#FBFBFB]"
            value={loading ? "Loading!" : searchValue}
            onChange={(e) => dispatch(handleChange(e.target.value))}
          />
          <FaSearch
            className={`text-black absolute right-5 ${styles.search}`}
          />
          {/* {error ? <p className="text-red-700">error</p> : null} */}
        </form>
      </div>
    </>
  );
}

export default SearchChannel;
