import InputSearch from "@/components/InputSearch";
import PageInation from "@/components/PageInation";
import SortTableByName from "@/components/SortTableByName";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
    setFilteredUser(resultData);
    const filteredData = resultData?.filter((userItem: userType) =>
      userItem.first_name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const resultDataLength = Math.ceil((filteredData?.length || 0) / 10);
    setTotalPages(resultDataLength);
    setFilteredUser(filteredData?.slice(startIndex, endIndex));
    setSortOrder("");
  }, [searchValue, resultData, currentPage]);

  return (
    <main className={` max-w-[800px] mx-auto py-20`}>
      <div className="flex items-center justify-center gap-5 w-full">
        <SortTableByName
          setSortOrder={setSortOrder}
          setFilteredUser={setFilteredUser}
          filteredUser={filteredUser}
          sortOrder={sortOrder}
        />

        <div className="w-full">
          <InputSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

      <table className=" border-[1px] border-gray-400 text-center  mx-auto w-full mt-7">
        <tbody>
          <tr>
            <th className="bg-gray-200 py-5 border-[1px] border-gray-400 px-8">
              First name
            </th>
            <th className="bg-gray-200 py-5 border-[1px] border-gray-400 px-8">
              Last name
            </th>
            <th className="bg-gray-200 py-5 border-[1px] border-gray-400 px-8">
              Email
            </th>
          </tr>
          {resultData?.length > 0 &&
            filteredUser?.map((items: userType) => (
              <tr className="border-[1px] py-2" key={items.id}>
                <td className="border px-8 py-4">{items.first_name}</td>
                <td className="border px-8 py-4">{items.last_name}</td>
                <td className="border px-8 py-4">{items.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <PageInation
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
}
