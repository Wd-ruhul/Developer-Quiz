import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';
import './Quiz.css'

const Quiz = () => {
  const quizzData = useLoaderData()
  const quizz = quizzData.data;
  const manyQues = quizz.questions;
  console.log(`Q`, manyQues);
  // console.log(`quiz:`,quizz)
  
  return (
    <div>
      <h2 className="text-center text-3xl text-indigo-900"> Quiz Topic :  {quizz.name}</h2>
      <div className=" Quiz-container w-3/4 p-4 ">
        {manyQues.map((ques) => (
          <Question key={ques.id} ques={ques}></Question>
        ))}
      </div>
  
    </div>
  );
};

export default Quiz;