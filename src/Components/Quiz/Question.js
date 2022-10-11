import React from 'react';

const Question = ({ ques }) => {
  const { question, options, correctAnswer } = ques;
  return (
    <div className="w-3/4  bg-indigo-600  mb-5">
      <p>{question}</p>
      <div className="grid grid-cols-2 ">
        <label>
          <input type="radio" id="op1" name="radio" />
          <span>{options[0]}</span>
        </label>
        <label>
          <input type="radio" id="op2" name="radio" />
          <span>{options[1]}</span>
        </label>
        <label>
          <input type="radio" id="op3" name="radio" />
          <span>{options[2]}</span>
        </label>

        <label>
          <input type="radio" id="op4" name="radio" />
          <span>{correctAnswer}</span>
        </label>
      </div>
    </div>
  );
};

export default Question;