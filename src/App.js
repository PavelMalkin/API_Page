import { useEffect, useState } from "react";

import SearchBar from "./components/searchBar/SearchBar";
import DataTable from "./components/dataTable/DataTable";
import Header from "./components/header/Header";

function App() {
  const [data, setData] = useState(require('./fe_data.json'));
  const [direction, setDirection] = useState('request');
  const [filter, setFilter] = useState({
    name: "",
    pii: false
  });
  const [filteredData, setFilteredData] = useState(data)

  const updateData = (value) => {
    const tempData = {...data};
    tempData[direction] = {...tempData[direction], ...value}
    setData(tempData)
  }

  useEffect(() => {
    if (filter.name || filter.pii) {

      const filteredObject = (object, filterName, pii) => {
        const result = {};
        Object.keys(object)
          .forEach(name => {
            if (filterName && name.toLowerCase().includes(filterName) && !pii) {
              result[name] = object[name];
            } else {
              object[name].forEach(paramType => {
                if (
                  (paramType.name.toLowerCase().includes(filterName)
                    || name.toLowerCase().includes(filterName)
                  )
                  && (!pii || paramType.pii)
                ) {
                  if (!result[name]) result[name] = [];
                  result[name].push(paramType);
                }
              });
            }
          });
        return result;
      };

      const searchingName = filter.name.toLowerCase();

      setFilteredData({
        ...data,
        request: filteredObject(data.request, searchingName, filter.pii ),
        response: filteredObject(data.response, searchingName, filter.pii )
      });

    } else {
      setFilteredData(data);
    }
  }, [data, filter])

  return (
    <>
      <Header data={data} direction={direction} setDirection={setDirection}/>
      <SearchBar setFilter={setFilter} filter={filter}/>
      <DataTable data={filteredData[direction]} direction={direction} updateData={updateData}/>
    </>
  );
}

export default App;
