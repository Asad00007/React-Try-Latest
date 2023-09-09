import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    setLastText(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  };
  const handleDownClick = () => {
    setLastText(text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setLastText(text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleInverseClick = () => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase()) {
        result += text[i].toLowerCase();
      } else {
        result += text[i].toUpperCase();
      }
    }
    setText(result);
    props.showAlert("Text Inverted!", "success");
  };

  const handleSentenceClick = () => {
    setLastText(text);
    //convert string to array
    let arr = text.split("");
    arr = arr.reverse();
    let newText = arr.join("");
    setText(newText);
    props.showAlert("Text Inverted!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const checkOccuranc = () => {
    let reg = new RegExp(findText, "i");
    let result = reg.exec(text);
    // let result = text.search(reg);   returns index or -1
    // let result = text.match(reg);   returns array or null
    // console.log(result);
    if (result) {
      alert(`Found "${findText}" in text on ${result.index + 1} column`);
    } else {
      alert(`Did not find "${findText}" in text`);
    }
  };

  const handleOccurance = (event) => {
    setFindText(event.target.value);
  };

  const handleSpaces = () => {
    setLastText(text);
    let newText = text.split(/[ ]+/);
    //.split([""])  splits into individual letters "a","p","p";
    //.split([" "])  splits into words seperated by spaces "app","is";

    setText(newText.join(" "));
  };
  const handleReplace = () => {
    setLastText(text);
    let reg = new RegExp(findText, "i"); //John
    let result = text.replace(reg, "Jake");
    setText(result);
    // console.log(result);
  };

  const handleLastText = () => {
    setText(lastText);
  };

  const [findText, setFindText] = useState("");
  const [text, setText] = useState("");
  const [lastText, setLastText] = useState("");

  const words = text.split(/\s+/).filter((words) => words !== ""); // s+ is short hand for whitespaces, tabs, spaces
  let count = words.length;

  let textColor = "black";

  if (props.mode === "light") {
    textColor = "black";
  } else if (props.mode === "dark") {
    textColor = "white";
  }
  if (props.otherModes === "success") {
    textColor = "green";
  } else if (props.otherModes === "danger") {
    textColor = "red";
  } else if (props.otherModes === "warning") {
    textColor = "#eb7d07";
  }
  return (
    <>
      <div
        className="container my-4"
        style={{
          color: textColor,
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: textColor,
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear All
        </button>
        <button className="btn btn-primary mx-1" onClick={handleInverseClick}>
          Inverse Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>
          Reverse Sentence
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Sentence
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLastText}>
          Bring Back last text
        </button>
        <br />
        <div className="my-3">
          <input
            type="text"
            name="find"
            id="thisBox"
            value={findText}
            onChange={handleOccurance}
          />
          <button className="btn btn-primary mx-1" onClick={checkOccuranc}>
            Find words
          </button>
          <button className="btn btn-primary mx-1" onClick={handleReplace}>
            Replace text with Jake
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          /*color: props.mode === "dark" ? "white" : "black"*/ color: textColor,
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {/*text.split(" ").length - 1*/ count} words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above box to preview it"}
        </p>
      </div>
    </>
  );
}

Textform.defaultProps = {
  heading: "Use this instead",
};
