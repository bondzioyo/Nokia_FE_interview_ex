import React from "react";

function Step2() {
  document.addEventListener("DOMContentLoaded", () => {
    const operation = document.querySelector("#aviableOperation");
    const buttonCancel = document.querySelector("#buttonCancel");
    const buttonContinue = document.querySelector("#buttonContinue");
    const buttonBack = document.querySelector("#buttonBack");

    buttonContinue.addEventListener("click", () => {
      if (
        operation.style.backgroundColor === "" ||
        operation.style.backgroundColor === "white"
      ) {
        buttonContinue.style.backgroundColor = "lightgray";
        buttonContinue.style.cursor = "default";
      } else {
        buttonContinue.style.backgroundColor = "rgb(28, 66, 140)";
        buttonContinue.style.cursor = "pointer";
      }
    });
    buttonBack.addEventListener("click", () => {
      if (
        operation.style.backgroundColor !== "" ||
        operation.style.backgroundColor !== "white"
      ) {
        buttonContinue.style.backgroundColor = "rgb(28, 66, 140)";
        buttonContinue.style.cursor = "pointer";
      }
    });

    operation.addEventListener("click", () => {
      operation.style.backgroundColor = "rgb(28, 66, 140, 0.1)";
      buttonContinue.style.backgroundColor = "rgb(28, 66, 140)";
      buttonContinue.style.cursor = "pointer";
    });

    buttonCancel.addEventListener("click", () => {
      operation.style.backgroundColor = "white";
    });
  });

  return (
    <div className="step2">
      <div className="operation" id="aviableOperation">
        <h5>Update Software</h5>
        <p>SW upgrade on NE to the latest version</p>
      </div>
      <div className="operation">
        <h5>Downgrade Software</h5>
        <p>SW downgrade to the previous one</p>
      </div>
    </div>
  );
}

export default Step2;
