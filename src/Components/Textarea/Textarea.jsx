function Textarea({ value, onChange, className, name, labelName }) {
  return (
    <>
      <label htmlFor="">{labelName}</label>
      <textarea
        name={name}
        placeholder="add someting"
        className={className}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
}

export default Textarea;
