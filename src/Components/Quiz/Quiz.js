import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiz = () => {
  const quizzData = useLoaderData()
  const quizz = quizzData.data;
  const manyQues = quizz.questions;
  console.log(`Q`, manyQues);
  // console.log(`quiz:`,quizz)
  
  return (
    <div>
      <h2> Quiz Topic {quizz.name}</h2>
      <div className="grid grid-cols-1 justify-center items-center ">
        {manyQues.map((ques) => (
          <Question key={ques.id} ques={ques}></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;