import InputSearch from "@/components/InputSearch";
import { getUserRequest } from "@/services/requestList";
import { useEffect, useState } from "react";

export interface userType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  birthdate: string;
  company_name: string;
  department: string;
  job_title: string;
  address: {
    street: string;
    street_name: string;
    city: string;
    state: string;
    country: string;
    country_code: string;
    postal_code: string;
  }[];
  phone: string;
  avatar: string;
  email_verified: boolean;
  password: string;
  last_login: string;
  last_login_ip: string;
  subscribed: boolean;
}

export default function Home() {
  const [resultData, setResultData] = useState<userType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredUser, setFilteredUser] = useState<userType[]>();
  const [sortOrder, setSortOrder] = useState<string>("");
  useEffect(() => {
    getUserRequest()
      .then((response) => {
        setResultData(response.data.Users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setFilteredUser(
      resultData?.filter((userItem: any) =>
        userItem.first_name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, resultData]);
  const sortUsers = (value: any) => {
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
  console.log(filteredUser);

  return (
    <main
      className={` max-w-[800px] mx-auto py-20`}
    >
      <div className="flex items-center justify-center gap-5 w-full">
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
        <div className="w-full">
          <InputSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>

      {resultData?.length > 0 && (
        <table className=" border-[1px] border-gray-400 text-center  mx-auto w-full mt-7">
          <tbody>
            <tr>
              <th className="bg-gray-200 py-5 border-[1px] border-gray-400 px-8">
                Company
              </th>
              <th className="bg-gray-200 py-5 border-[1px] border-gray-400 px-8">
                Contact
              </th>
              <th className="bg-gray-200 py-5 border-[1px] border-gray-400 px-8">
                Country
              </th>
            </tr>
            {filteredUser?.map((items: userType) => (
              <tr className="border-[1px] py-2" key={items.id}>
                <td className="border px-8 py-4">{items.first_name}</td>
                <td className="border px-8 py-4">{items.last_name}</td>
                <td className="border px-8 py-4">{items.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
