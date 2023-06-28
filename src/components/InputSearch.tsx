import { userType } from "@/pages";
import { Dispatch, SetStateAction } from "react";
type propType = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setCurrentPage:any
};

const InputSearch = ({ searchValue, setSearchValue,setCurrentPage }: propType) => {
  const handleInput = (e: any) => {
    setSearchValue(e.target.value);
    setCurrentPage(1)
  };

  return (
    <>
      <label>Search by first name:</label>
      <input
        className="border-[1px] bg-white border-solid border-blue_5 rounded-md w-full px-3 py-2 mt-2"
        type="text"
        placeholder={`Search name`}
        value={searchValue}
        onChange={handleInput}
      />
    </>
  );
};

export default InputSearch;
