import React from "react";
import TopicsCart from "./TopicsCart";
import { useLoaderData } from "react-router-dom";

const Topics = () => {
  const topicsData = useLoaderData();
  const topics = topicsData.data;

  console.log("tp", topics);

  return (
    <div>
      <div className="grid justify-center md:grid-cols-4 gap-8 p-5">
        {topics.map((topic) => (
          <TopicsCart
            key={topic.id}
            topic={topic}
          
          ></TopicsCart>
        ))}
      </div>
    </div>
  );
};

export default Topics;
