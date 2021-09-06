import Steps from "./components/steps.js";
import BottomNav from "./components/bottomNav.js";
import Step1 from "./components/step1.js";
import Step2 from "./components/step2.js";
import Step3 from "./components/step3.js";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [netElement, setNetElement] = useState([]);

  document.addEventListener("DOMContentLoaded", () => {
    var step1 = document.querySelector(".step1");
    var step2 = document.querySelector(".step2");
    var step3 = document.querySelector(".step3");
    var buttonContinue = document.querySelector("#buttonContinue");
    var buttonBack = document.querySelector("#buttonBack");
    var buttonCancel = document.querySelector("#buttonCancel");
    var buttonSchedule = document.querySelector("#buttonSchedule");
    var searchButton = document.querySelector("#go");
    var search = document.querySelector("#search");

    var step = 1;

    function step1Active() {
      step1.style.display = "initial";
      step2.style.display = "none";
      step3.style.display = "none";
      buttonCancel.style.display = "none";
      buttonSchedule.style.display = "none";
      buttonBack.style.color = "lightgray";
      buttonBack.style.cursor = "default";
      buttonContinue.style.display = "initial";
      buttonContinue.style.cursor = "default";
      buttonContinue.style.backgroundColor = "lightgray";
      buttonContinue.style.color = "white";
      document.querySelector("#one").style.backgroundColor = "rgb(28, 66, 140)";
      document.querySelector("#two").style.backgroundColor = "darkgray";
      document.querySelector("#three").style.backgroundColor = "darkgray";
    }

    function step2Active() {
      step1.style.display = "none";
      step2.style.display = "initial";
      step3.style.display = "none";
      buttonBack.style.color = "rgb(28, 66, 140)";
      buttonBack.style.cursor = "pointer";
      buttonCancel.style.display = "unset";
      buttonContinue.style.display = "initial";
      buttonContinue.style.cursor = "default";
      buttonSchedule.style.display = "none";
      document.querySelector("#one").style.backgroundColor = "rgb(28, 66, 140)";
      document.querySelector("#two").style.backgroundColor = "rgb(28, 66, 140)";
      document.querySelector("#three").style.backgroundColor = "darkgray";
    }

    function step3Active() {
      step1.style.display = "none";
      step2.style.display = "none";
      step3.style.display = "initial";
      buttonContinue.style.display = "none";
      buttonSchedule.style.display = "initial";
      buttonSchedule.style.color = "white";
      buttonSchedule.style.backgroundColor = "rgb(28, 66, 140)";
      document.querySelector("#one").style.backgroundColor = "rgb(28, 66, 140)";
      document.querySelector("#two").style.backgroundColor = "rgb(28, 66, 140)";
      document.querySelector("#three").style.backgroundColor =
        "rgb(28, 66, 140)";
    }

    step1Active();

    buttonContinue.addEventListener("click", () => {
      if (step === 3) {
        return;
      }
      if (buttonContinue.style.backgroundColor === "rgb(28, 66, 140)") {
        step += 1;
      }
      if (step === 1) {
        step1Active();
      } else if (step === 2) {
        step2Active();
      } else if (step === 3) {
        step3Active();
      }
    });

    buttonBack.addEventListener("click", () => {
      if (step === 1) {
        return;
      } else {
        step -= 1;
      }
      if (step === 1) {
        step1Active();
      } else if (step === 2) {
        step2Active();
      } else if (step === 3) {
        step3Active();
      }
    });

    buttonCancel.addEventListener("click", () => {
      step = 1;
      step1Active();
    });

    function findText() {
      for (let j = 1; j <= document.querySelectorAll(".listItem").length; j++) {
        var token = 3;
        for (let i = 0; i < 3; i++) {
          if (search.value === "") {
            break;
          }
          if (
            !document
              .querySelectorAll(`.listItem:nth-child(${j}) p`)
              [i].innerText.toLowerCase()
              .includes(search.value.toLowerCase())
          ) {
            token -= 1;
          }
        }
        if (token >= 1) {
          document.querySelector(`.listItem:nth-child(${j})`).style.display =
            "flex";
        } else if (token === 0) {
          document.querySelector(`.listItem:nth-child(${j})`).style.display =
            "none";
        }
      }
    }

    searchButton.addEventListener("click", () => {
      findText();
    });
  });

  return (
    <div>
      <header className="header">Network Element Operation Scheduler</header>
      <div className="components">
        <Steps />
        <div className="content">
          <Step1 netElement={netElement} setNetElement={setNetElement} />
          <Step2 />
          <Step3 netElement={netElement} />
          <BottomNav />
        </div>
      </div>
    </div>
  );
}

export default App;
