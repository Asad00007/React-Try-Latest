//f2 to select name from left side bar
import React from "react";
import "./App.css";
import Navbar from "./comp/Navbar";
import Textform from "./comp/Textform";
import Alert from "./comp/Alert";
import About from "./comp/About";
// import ReactDOM from "react-dom/client";

// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setOtherModes("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      setOtherModes("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const [otherModes, setOtherModes] = useState("light");

  const changeModeGreen = () => {
    setOtherModes("success");
    console.log(otherModes);
    document.body.style.backgroundColor = "#38c182";
    showAlert("Green dark mode has been enabled", "success");
  };
  const changeModeRed = () => {
    setOtherModes("danger");
    console.log(otherModes);
    document.body.style.backgroundColor = "#ff5a6a";
    showAlert("Red dark mode has been enabled", "danger");
  };
  const changeModeYellow = () => {
    setOtherModes("warning");
    document.body.style.backgroundColor = "#fbc627";
    showAlert("Yellow dark mode has been enabled", "warning");
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        changeMode={{ changeModeGreen, changeModeYellow, changeModeRed }}
      />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* <Route
        path="/" element=
        {
          <Textform
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
          otherModes={otherModes}
        />
        } */}
        {/* /> */}
        <Textform
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
          otherModes={otherModes}
        />
        {/* <Route path="/about" exact element={<About />} /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={< />}></Route>
//     </Routes>
//   </BrowserRouter>
// );
export default App;
