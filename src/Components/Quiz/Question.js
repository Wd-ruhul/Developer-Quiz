import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ ques }) => {
  const { question, options, correctAnswer } = ques;
  const [radioValue, setRadioValue] = useState([])
  console.log(radioValue)

  const notify = () => {
    if (radioValue === 'true') {
      toast("Wow  Right!");
    } else {
      toast("Wrong Answer");
    }
  }

  return (
    <div className="  bg-indigo-300  mb-5 p-5 border-2 border-indigo-900 rounded">
      <p className="text-center">{question}</p>
      <div className="grid grid-cols-2 ">
        <label className="border-2 border-indigo-900 rounded p-3 text-center mr-3 mb-3">
          <input
            onClick={notify}
            onChange={(e) => setRadioValue(e.target.value)}
            value="false"
            type="radio"
            id="op1"
            name="radio"
          />

          <span>{options[0]}</span>
        </label>

        <label className="border-2 border-amber-900 rounded p-3 text-center mb-3 ">
          <input
            onClick={notify}
            onChange={(e) => setRadioValue(e.target.value)}
            value="false"
            type="radio"
            id="op2"
            name="radio"
          />
          <span>{options[1]}</span>
        </label>
        <label className="border-2 border-indigo-900 rounded p-3 text-center mr-3 ">
          <input
            onClick={notify}
            onChange={(e) => setRadioValue(e.target.value)}
            value="false"
            type="radio"
            id="op3"
            name="radio"
          />
          <span>{options[2]}</span>
        </label>

        <label className="border-2 border-indigo-900 rounded p-3">
          <input
            onClick={notify}
            onChange={(e) => setRadioValue(e.target.value)}
            type="radio"
            id="op4"
            name="radio"
            value="true"
          />
          <span>{correctAnswer}</span>
        </label>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;
