import { useState } from "react";

function InputText({
  onChange,
  className,
  type,
  placeholder,
  value,
  labelName,
}) {
  return (
    <div>
      <label htmlFor="name">{labelName}</label>
      <input
        className={className}
        type={type}
        name="name"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputText;
