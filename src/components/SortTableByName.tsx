import { userType } from "@/pages";
import { Dispatch, SetStateAction } from "react";

type propTypesSortTable = {
  setSortOrder: Dispatch<SetStateAction<string>>;
  setFilteredUser: Dispatch<SetStateAction<userType[] | undefined>>;
  filteredUser: userType[] | undefined;
  sortOrder: string;
};

const SortTableByName = ({
  setSortOrder,
  setFilteredUser,
  filteredUser,
  sortOrder,
}: propTypesSortTable) => {
  const sortUsers = (value: string) => {
    let sortedUsers: userType[] = [];
    if (filteredUser) {
      sortedUsers = [...filteredUser].sort((a, b) => {
        if (a.first_name < b.first_name) {
          return value === "ascending" ? -1 : 1;
        } else if (a.first_name > b.first_name) {
          return value === "ascending" ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    setFilteredUser(sortedUsers);
    setSortOrder(value === "ascending" ? "ascending" : "descending");
  };
  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        <label>Ascending</label>
        <input
          type="radio"
          value={sortOrder}
          onChange={() => sortUsers("ascending")}
          checked={sortOrder === "ascending"}
        ></input>
      </div>
      <div className="flex items-center gap-3">
        <label>Descending</label>
        <input
          type="radio"
          value={sortOrder}
          onChange={() => sortUsers("descending")}
          checked={sortOrder === "descending"}
        ></input>
      </div>
    </div>
  );
};

export default SortTableByName;
