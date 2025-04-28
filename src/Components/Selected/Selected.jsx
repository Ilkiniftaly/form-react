import "./Selected.css";

function Selected({ value, onChange }) {
  return (
    <div>
      <label className="selected-label">Level</label>
      <select onChange={onChange} value={value} className="selected-css">
        <option></option>
        <option>Freshman</option>
        <option>Junior</option>
        <option>Middle</option>
        <option>Senior</option>
      </select>
    </div>
  );
}

export default Selected;
