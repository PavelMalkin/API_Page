import List from "../list/List";

import "./dataTable.scss";

const DataTable = ({
  data,
  updateData,
  direction
}) => {

  const lists = Object.keys(data).map((key, index) => (
      <List name={key}
            rowsArray={data[key]}
            key={`List${direction}${index}`}
            updateData={updateData}/>
    ));

  return (
    <div className="Table_Wrapper">
      <div className="Table">
        <div className="Header">
          <h3 className="Name">NAME</h3>
          <h3 className="Button">PII</h3>
          <h3 className="Button">MASKING</h3>
          <h3 className="Type">TYPE</h3>
        </div>
        <div className="Content">
          {lists}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
