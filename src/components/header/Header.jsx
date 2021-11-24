import "./header.scss"

const Header = ({data, direction, setDirection}) => {
  return (
    <header>
      <div className="Title">
        <div className="Method">
          <h2>{data.method}</h2>
          <h1>{data.path}</h1>
        </div>
        <h3>All APIs > {data.api} > {data.path}</h3>
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
  )
}
export default Header;
