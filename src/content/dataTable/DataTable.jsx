import "./dataTable.scss"
import List from "../list/List";

const DataTable = ({data}) => {
  console.log('data in DataTable', data);

   const lists = Object.keys(data).map((key, index) => (
     <List name={key} rowsArray={data[key]} key={`List${index}`}/>
   ) )

  return (
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
  );
}

export default DataTable;
