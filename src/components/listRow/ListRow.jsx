import "./listRow.scss";

const ListRow = ({
  data,
  handleUpdate
}) => {

  return (
    <div className="ListRow">
      <h4 className="RowName">{data.name}</h4>
      <button
        className={`BlueButton ${data.pii ? "BlueSelected" : ""}`}
        onClick={() => handleUpdate({ pii: !data.pii })}
      >PII
      </button>
      <button
        className={`PurpleButton ${data.masked ? "PurpleSelected" : ""}`}
        onClick={() => handleUpdate({ masked: !data.masked })}
      >MASKED
      </button>
      <div className="RowType">
        <div className="RowTypeValue">{data.type.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default ListRow;
