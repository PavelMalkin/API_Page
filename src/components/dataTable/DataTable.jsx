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
          <h4 className="Name">NAME</h4>
          <h4 className="Button">PII</h4>
          <h4 className="Button">MASKING</h4>
          <h4 className="Type">TYPE</h4>
        </div>
        <div className="Content">
          {lists}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
