import { useState } from "react";

import { ReactComponent as Icon} from "../../asset/search-solid.svg"

import "./SearchBar.scss";

const SearchBar = ({
  setFilter,
}) => {
  const [name, setName] = useState("");
  const [pii, setPii] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter({ name, pii });
  }

  const handleReset = () => {
    setPii(false);
    setName('');
    setFilter({ name: '', pii: false });
  }

  return (
    <div className="SearchBar_Wrapper">
      <div className="SearchBar">
        <form onSubmit={handleSubmit}>
          <Icon className="SearchIcon"/>
          <input
            className="TextInput"
            type="text"
            placeholder="Search"
            onChange={e => setName(e.target.value)}
            value={name}/>
          <div className="Divider"/>
          <div className="CheckBox">
            <input type="checkbox" id="pii" onChange={e => setPii(e.target.checked)} checked={pii}/>
            <label htmlFor="pii">Show PII only</label>
          </div>
          <div className="SearchButton" onClick={handleSubmit}>Apply</div>
        </form>
        <div className="ResetButton" onClick={handleReset}>Reset Filter</div>
      </div>
    </div>
  )
}

export default SearchBar;
