import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
const SearchBar = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const onhandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <form onSubmit={onhandleSubmit}>
      <RiSearchLine
        className="block lg:hidden text-white text-[20px]"
        onClick={() => setDropDown((prev) => !prev)}
      />
      <input
        type="text"
        placeholder="Search"
        className="hidden lg:block px-4 py-1 rounded-lg font-[Inter]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {dropDown && (
        <input
          type="text"
          placeholder="Search"
          className="block lg:hidden fixed right-6 top-12  px-4 py-1 rounded-lg font-[Inter]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}
    </form>
  );
};

export default SearchBar;
