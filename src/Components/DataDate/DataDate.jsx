import "./DataDate.css";

function DataDate({ value, onChange }) {
  return (
    <div>
      <label style={{ display: "flex" }}>Date</label>
      <input
        type="date"
        value={value}
        onChange={onChange}
        className="dataDate-css"
      />
    </div>
  );
}

export default DataDate;
