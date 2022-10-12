import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bars3Icon, EyeIcon } from "@heroicons/react/24/solid";

const Question = ({ ques }) => {
  const { question, options, correctAnswer } = ques;
  const [radioValue, setRadioValue] = useState([])
  console.log(radioValue)

  const notify = (e) => {
    if (e === correctAnswer) {
      toast.success("Wow  Right Answer!");
    } else {
      toast.warn("Ops! Wrong Answer");
    }
  }

  const tostify = () => {
    toast(`Right Answer : ${ correctAnswer }`)

  }

  return (
    <div className="  bg-indigo-300  mb-5 p-5 border-2 border-indigo-900 rounded">
      <p className="text-center">{question}</p>
      <EyeIcon onClick={tostify} className="h-6 w-6"></EyeIcon>
      <div className="grid grid-cols-2 ">
        <label className="border-2 border-indigo-900 rounded p-3 text-center mr-3 mb-3">
          <input
            onClick={(e) => notify(e.target.value)}
            value={options[0]}
            type="radio"
            id="op1"
            name="radio"
          />

          <span>{options[0]}</span>
        </label>

        <label className="border-2 border-amber-900 rounded p-3 text-center mb-3 ">
          <input
            onClick={(e) => notify(e.target.value)}
            value={options[1]}
            type="radio"
            id="op2"
            name="radio"
          />
          <span>{options[1]}</span>
        </label>
        <label className="border-2 border-indigo-900 rounded p-3 text-center mr-3 ">
          <input
            onClick={(e) => notify(e.target.value)}
            value={options[2]}
            type="radio"
            id="op3"
            name="radio"
          />
          <span>{options[2]}</span>
        </label>

        <label className="border-2 border-indigo-900 rounded p-3">
          <input
            onClick={(e) => notify(e.target.value)}
            type="radio"
            id="op4"
            name="radio"
            value={options[3]}
          />
          <span>{options[3]}</span>
        </label>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Question;
