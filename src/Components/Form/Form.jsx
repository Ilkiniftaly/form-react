import "./Form.css";

import { useState } from "react";
import { useForm } from "react-hook-form";

import InputText from "../InputText/InputText";
import Textarea from "../Textarea/Textarea";
import Selected from "../Selected/Selected";
import Gpa from "../GPA/Gpa";
import DataDate from "../DataDate/DataDate";
import Checkbox from "../Checbox/Checkbox";
import Radio from "../Radio/Radio";

function Form() {
  const [nameValue, setNameValue] = useState("");
  const [errorName, setErrorName] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const [textareaValue, setTextareaValue] = useState("");

  const [selectedValue, setSelectedValue] = useState("");
  const [errorSelectedValue, setErrorSelectedValue] = useState(false);

  const [gpaValue, setGpaValue] = useState("");
  const [errorGpaValue, setErrorGpaValue] = useState(false);

  const [dataDateValue, setDataDateValue] = useState("");
  const [errorDataDateValue, setErrorDataDateValue] = useState(false);

  const [checkboxChange, setCheckboxChange] = useState({
    Surfing: false,
    Running: false,
    Biking: false,
    Paddling: false,
  });

  const [radioValue, setRadioValue] = useState(false);
  const [errorRadioValue, setErrorRadioValue] = useState(false);

  const handleName = (e) => {
    const value = e.target.value;
    setNameValue(value);
    if (value.length < 3) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmailValue(value);
    if (!value.endsWith("@gmail.com")) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const handleSelected = (e) => {
    const value = e.target.value;
    setSelectedValue(value);

    if (value == "") {
      setErrorSelectedValue(true);
    } else {
      setErrorSelectedValue(false);
    }
  };

  const handleGpa = (e) => {
    const value = e.target.value;
    setGpaValue(value);

    if (value.length < 2) {
      setErrorGpaValue(true);
    } else {
      setErrorGpaValue(false);
    }
  };

  const handleDataDate = (e) => {
    const value = e.target.value;
    setDataDateValue(value);

    if (value == "") {
      setErrorDataDateValue(true);
    } else {
      setErrorDataDateValue(false);
    }
  };

  const hobbies = ["Surfing", "Running", "Biking", "Paddling"];

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setCheckboxChange((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleRadio = (e) => {
    const checked = e.target.value;
    setRadioValue(checked);

    if (checked == "") {
      setErrorRadioValue(true);
    } else {
      setErrorRadioValue(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const object = {
      name: nameValue,
      email: emailValue,
      textarea: textareaValue,
      selected: selectedValue,
      Gpa: gpaValue,
      DataDate: dataDateValue,
      Checkbox: checkboxChange,
      Radio: radioValue,
    };
    console.log(object);
  };

  return (
    <div>
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Name</label>
            <InputText
              className="name-input"
              type="name"
              value={nameValue}
              placeholder="Your name"
              onChange={handleName}
            />
            {errorName && <p style={{ color: "red" }}>Min 3 herf olmalidir!</p>}
          </div>
          <div className="col-6">
            <label>Email</label>
            <InputText
              className="name-email"
              type="email"
              placeholder="Your Email"
              value={emailValue}
              onChange={handleEmail}
            />
            {errorEmail && <p style={{ color: "red" }}>Duzgun Qeyd edin !</p>}
          </div>
        </div>

        <label className="text-label">Biographical Statement</label>
        <div className="row">
          <div className="col-12">
            <Textarea
              name="text"
              className="textarea"
              value={textareaValue}
              onChange={(e) => {
                setTextareaValue(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="gpa-select-date-flex">
          <div className="selected-div">
            <Selected value={selectedValue} onChange={handleSelected} />
            {errorSelectedValue && (
              <p style={{ color: "red", marginLeft: "12px" }}>
                What is your level? (required)
              </p>
            )}
          </div>
          <div className="gpa-div">
            <Gpa
              value={gpaValue}
              name="text"
              type="text"
              onChange={handleGpa}
            />
            {errorGpaValue && (
              <p style={{ color: "red" }}>Bos hisseni doldurun !</p>
            )}
          </div>
          <div className="dataDate-div">
            <DataDate value={dataDateValue} onChange={handleDataDate} />
            {errorDataDateValue && (
              <p style={{ color: "red" }}>Tarix daxil edin !</p>
            )}
          </div>
        </div>

        <div style={{ display: "flex" }} className="checkbox-hobbies-flex">
          <div
            style={{
              marginTop: "8px",
              marginLeft: "18px",
              marginRight: "10px",
            }}
            className="hobbies-div-css"
          >
            Hobbies:
          </div>
          <Checkbox
            labelName="Surfing"
            name="Surfing"
            onChange={handleCheckboxChange}
            checked={checkboxChange.Surfing}
          />
          <Checkbox
            labelName="Running"
            name="Running"
            checked={checkboxChange.Running}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            labelName="Biking"
            name="Biking"
            checked={checkboxChange.Biking}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            labelName="Paddling"
            name="Paddling"
            checked={checkboxChange.Paddling}
            onChange={handleCheckboxChange}
          />
          <p
            style={{ marginTop: "12px", marginLeft: "5px" }}
            className="checkbox-p-css"
          >
            Select hobbies (optional)
          </p>
        </div>

        <div style={{ display: "flex" }} className="radio-p-flex">
          <Radio checked={radioValue} onChange={handleRadio} />
          {errorRadioValue && (
            <p style={{ color: "red", marginTop: "10px", fontWeight: "400" }}>
              What is your major ? (required)
            </p>
          )}
        </div>

        <button style={{ marginTop: "15px" }}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
