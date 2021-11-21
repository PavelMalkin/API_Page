import { useState } from "react";

import SearchBar from "../searchBar/SearchBar";
import DataTable from "../dataTable/DataTable";

const ContentContainer = ({
  updateData,
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
      <DataTable data={data} updateData={updateData}/>
    </>
  );
};

export default ContentContainer;
