import { useEffect, useState } from "react";

import SearchBar from "./content/searchBar/SearchBar";
import DataTable from "./content/dataTable/DataTable";

import "./App.scss"

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
    <div className="App">
      <header>
        <div className="Title">
          <div className="Method">
            <h2>{data.method}</h2>
            <h1>{data.path}</h1>
          </div>
          <h3>ALL APIS > mobile-api.dnssf.com > {data.path}</h3>
        </div>
        <div className="Divider"/>
        <div className="TabContainer">
          <div
            className={`TabButton ${direction === "request"? "Active" : ""}`}
            onClick={() => setDirection("request")}
          >Request</div>
          <div
            className={`TabButton ${direction === "response"? "Active" : ""}`}
               onClick={() => setDirection("response")}
          >Response</div>
        </div>
      </header>
      <div className="divider"/>
      <SearchBar setFilter={setFilter} filter={filter}/>
      <DataTable data={filteredData[direction]} direction={direction} updateData={updateData}/>
    </div>
  );
}

export default App;
