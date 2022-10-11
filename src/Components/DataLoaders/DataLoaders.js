import { useEffect, useState } from "react";

export const DataLoaders = async () => {
 
  const [topics, setTopics] = useState([])

  useEffect(() => {
 fetch("https://openapi.programming-hero.com/api/quiz")
   .then((res) => res.json())
   .then((data) => setTopics
     (data));

},[])
  
  console.log('qq',topics)
  return  {topics};
}