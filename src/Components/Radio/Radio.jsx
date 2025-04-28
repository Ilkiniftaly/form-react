import "./Radio.css";

function Radio({ onChange, value }) {
  return (
    <div className="main-radio">
      <div className="major-div">Major: </div>
      <div className="radio-div">
        <input name="major" onChange={onChange} value="Physics" type="radio" />
        <label className="radio-1">Physics</label>
        <input name="major" onChange={onChange} value="Math" type="radio" />
        <label className="radio-2">Math</label>
        <input
          name="major"
          onChange={onChange}
          value="Chemistry"
          type="radio"
        />
        <label className="radio-3">Chemistry</label>
        <input
          name="major"
          onChange={onChange}
          value="Computer Science"
          type="radio"
        />
        <label className="radio-4">Computer Science</label>
      </div>
    </div>
  );
}

export default Radio;
