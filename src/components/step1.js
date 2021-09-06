import React from "react";

function Step1({ setNetElement, netElement }) {
  var n = 1;
  var x, y, z;
  document.addEventListener("DOMContentLoaded", () => {
    var buttonContinue = document.querySelector("#buttonContinue");
    var buttonCancel = document.querySelector("#buttonCancel");
    var buttonBack = document.querySelector("#buttonBack");

    buttonCancel.addEventListener("click", () => {
      for (let i = 1; i < document.querySelectorAll(".listItem").length; i++) {
        document.querySelector(
          `.listItem:nth-child(${i})`
        ).style.backgroundColor = "white";
      }
      for (
        let j = 1;
        j <= document.querySelectorAll(".step3ListItem").length;
        j++
      ) {
        document.querySelector(`.step3ListItem:nth-child(${j}`).remove();
      }
      n = 1;
      x = undefined;
      y = x;
      z = x;
    });

    document.querySelectorAll(".listItem").forEach(function (item) {
      item.onclick = function () {
        buttonContinue.style.backgroundColor = "rgb(28, 66, 140)";
        buttonContinue.style.cursor = "pointer";
        this.style.backgroundColor = "rgb(28, 66, 140, 0.1)";
        x = this.querySelector("p:nth-child(1)").innerText;
        y = this.querySelector("p:nth-child(2)").innerText;
        z = this.querySelector("p:nth-child(3)").innerText;
        setNetElement([`${x}`, `${y}`, `${z}`, `${n}`]);
        n += 1;
      };
    });

    buttonBack.addEventListener("click", () => {
      if (x !== undefined) {
        buttonContinue.style.backgroundColor = "rgb(28, 66, 140)";
      }
    });
  });

  return (
    <div className="step1">
      <div className="contentHeader">
        <div className="search">
          <button type="submit" title="Go" id="go" value="Go">
            <div className="decorLoupe"></div>
            <span className="decorLoupeElement"></span>
          </button>
          <label htmlFor="search"></label>
          <input type="text" title="Search" id="search" placeholder="Search" />
        </div>
        <div className="listHeader">
          <h3>IP Adress</h3>
          <h3>Type</h3>
          <h3 title="DN">DN</h3>
        </div>
      </div>
      <div className="listField">
        <div className="listItem">
          <p>10.10.10.10</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-4321/LNBTS-01</p>
        </div>
        <div className="listItem">
          <p>10.128.32.14</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-1/LNBTS-04</p>
        </div>
        <div className="listItem">
          <p>10.11.12.13</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-21/LNBTS-21</p>
        </div>
        <div className="listItem">
          <p>10.154.23.21</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-43/LNBTS-61</p>
        </div>
        <div className="listItem">
          <p>10.65.56.41</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-7/LNBTS-40</p>
        </div>
        <div className="listItem">
          <p>10.115.111.111</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-49/LNBTS-22</p>
        </div>
        <div className="listItem">
          <p>10.14.41.15</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-74/LNBTS-5</p>
        </div>
        <div className="listItem">
          <p>10.10.10.10</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-4321/LNBTS-01</p>
        </div>
        <div className="listItem">
          <p>10.98.45.65</p>
          <p>eNodeB</p>
          <p>N/A</p>
        </div>
        <div className="listItem">
          <p>10.10.54.56</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-432/LNBTS-303</p>
        </div>
        <div className="listItem">
          <p>10.75.65.24</p>
          <p>eNodeB</p>
          <p>N/A</p>
        </div>
        <div className="listItem">
          <p>10.10.10.10</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-4321/LNBTS-01</p>
        </div>
        <div className="listItem">
          <p>10.198.165.23</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-92/LNBTS-11</p>
        </div>
        <div className="listItem">
          <p>10.23.41.11</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-27/LNBTS-36</p>
        </div>
        <div className="listItem">
          <p>10.46.74.23</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-9/LNBTS-8795</p>
        </div>
        <div className="listItem">
          <p>10.10.10.10</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-4321/LNBTS-01</p>
        </div>
        <div className="listItem">
          <p>10.98.74.23</p>
          <p>eNodeB</p>
          <p>PLMN-PLMN/MRBTS-101/LNBTS-100</p>
        </div>
      </div>
    </div>
  );
}

export default Step1;
