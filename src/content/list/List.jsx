import { useState } from "react";

import { ReactComponent as Icon } from "../../asset/caret-right-solid.svg";

import "./list.scss"
import ListRow from "../listRow/ListRow";

const nameObject = {
  body: "Body",
  headers: "Headers",
  queryParams: "Query Parameters",
  urlParams: "URL Parameters",
}

const List = ({name, rowsArray}) => {
  const [open, setOpen] = useState(false);

  const rows = rowsArray.map( (row, index) => (
    <ListRow key={`Row${name}${index}`} data={row} />
  ))

  return (
    <div className="List">
      <div className="ListHeader">
        <Icon className={`ListIcon ${open? "Open" : ""}`} onClick={() => setOpen(!open)}/>
        <h3>{nameObject[name]}</h3>
      </div>
      {open && rows}
    </div>
  )
}

export default List;
