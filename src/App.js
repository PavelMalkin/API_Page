import { useState } from "react";

import "./App.scss"
import ContentContainer from "./content/contentContainer/ContentContainer";

function App() {
  const [data, setData] = useState(require('./fe_data.json'));
  const [direction, setDirection] = useState('request');

  const updateData = (value) => {
    const tempData = {...data};
    tempData[direction] = {...tempData[direction], ...value}
    setData(tempData)
  }

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
      <ContentContainer data={data[direction]} updateData={updateData}/>
    </div>
  );
}

export default App;
