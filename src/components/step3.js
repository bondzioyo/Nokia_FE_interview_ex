import React, { useEffect } from "react";

function Step3({ netElement }) {
  useEffect(() => {
    var step3ListField = document.querySelector(".step3ListField");

    if (netElement[0] !== undefined) {
      var listItem = document.createElement("div");
      listItem.classList.add("step3ListItem");
      step3ListField.appendChild(listItem);

      var listContent = document.querySelector(
        `.step3ListItem:nth-child(${netElement[3]})`
      );
      var item1 = document.createElement("p");
      var item2 = document.createElement("p");
      var item3 = document.createElement("p");
      var item4 = document.createElement("p");
      item1.innerText = netElement[0];
      item2.innerText = "NE Name";
      item3.innerText = netElement[1];
      item4.innerText = netElement[2];

      listContent.appendChild(item1);
      listContent.appendChild(item2);
      listContent.appendChild(item3);
      listContent.appendChild(item4);
    }
  }, [netElement]);

  return (
    <div className="step3">
      <h3>Network Elements</h3>
      <div className="step3ListHeader">
        <h3>IP Adress</h3>
        <h3>NE Name</h3>
        <h3>Technology</h3>
        <h3>SW Version</h3>
      </div>
      <div className="step3ListField"></div>
      <h3>Operation Type</h3>
      <div className="step3ListHeader">
        <h3>Update Software</h3>
      </div>
    </div>
  );
}

export default Step3;
