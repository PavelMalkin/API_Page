import { useState } from "react";

import SearchBar from "../searchBar/SearchBar";
import DataTable from "../dataTable/DataTable";

const ContentContainer = ({
  setData,
  data
}) => {
  const [filter, setFilter] = useState({
    name: "",
    pii: false
  });
  console.log('data in ContentContainer', data);
  return (
    <>
      <SearchBar setFilter={setFilter} filter={filter}/>
      <DataTable data={data} setData={setData}/>
    </>
  );
};

export default ContentContainer;
