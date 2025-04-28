import "./Checkbox.css";
import { useState } from "react";

function Checkbox({ onChange, checked, labelName, name }) {
  return (
    <div className="main">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="label-checkbox-css">{labelName}</label>
    </div>
  );
}

export default Checkbox;
