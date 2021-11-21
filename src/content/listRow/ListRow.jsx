import "./listRow.scss";

const ListRow = ({data}) => {

  return (
    <div className="ListRow">
      <h4 className="RowName">{data.name}</h4>
      <button className={`BlueButton ${data.pii? "BlueSelected" : ""}`}>PII</button>
      <button className={`PurpleButton ${data.pii? "PurpleSelected" : ""}`}>MASKED</button>
      <div className="RowType">
        <div className="RowTypeValue">{data.type.toUpperCase()}</div>
      </div>
    </div>
  )
}

export default ListRow;
