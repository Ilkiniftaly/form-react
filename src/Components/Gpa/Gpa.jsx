import "./Gpa.css";

function Gpa({ type, value, name, onChange }) {
  return (
    <div>
      <label style={{ display: "flex" }}>GPA</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        className="gpa-css"
      />
    </div>
  );
}

export default Gpa;
