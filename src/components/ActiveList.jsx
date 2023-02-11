import React, { useState } from "react";
import Cross from "./Cross";
import Check from "./Check";
import Add from "./Add";
import ProgressBar from "./ProgressBar";
let tmpID = 2;
const ActiveList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Task 1", checked: false },
  ]);

  const addCheckbox = () => {
    if (checkboxes.length >= 12) return;

    setCheckboxes([
      ...checkboxes,
      {
        id: tmpID,
        label: `Task ${tmpID}`,
        checked: false,
      },
    ]);
    tmpID++;
  };

  const handleCheck = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
    // getPercentageChecked();
    // const checkedCount = checkbox.filter((item) => item === true).length;
    // const percentage = (checkedCount / checkedList.length) * 100;
    // console.log(percentage);
  };

  const removeCheckbox = (id) => {
    setCheckboxes(checkboxes.filter((checkbox) => checkbox.id !== id));
  };
  const getPercentageChecked = () => {
    const checkedCount = checkboxes.filter(
      (checkbox) => checkbox.checked
    ).length;
    return (checkedCount / checkboxes.length) * 100;
  };
  return (
    <div className="main-list">
      <div className="list-container">
        {/* <p>
        {checkboxes.length > 0
          ? `Percentage of checkboxes checked: ${getPercentageChecked().toFixed(2)}%`
          : 'No checkboxes to display'}
      </p> */}
        {checkboxes.map((checkbox, index) => (
          <div
            key={checkbox.id}
            style={{ padding: "10px", position: "sticky", top: 0 }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={checkbox.checked}
                onChange={() => handleCheck(checkbox.id)}
              />
              {/* <div
                className="rectangle"
                display={checkbox.checked ? "none" : "none"}
              >
                <Check />
              </div> */}
              {/*  CONFLICTING IDS CAUSING ISSUES */}
              <input
                type="text"
                className="strike"
                value={checkbox.label}
                onChange={(e) =>
                  setCheckboxes(
                    checkboxes.map((c) =>
                      c.id === checkbox.id ? { ...c, label: e.target.value } : c
                    )
                  )
                }
              />
              <button onClick={() => removeCheckbox(checkbox.id)}>
                <Cross />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-button" onClick={addCheckbox}>
        <Add />
      </button>
      <ProgressBar value={getPercentageChecked()} />
    </div>
  );
};

export default ActiveList;
