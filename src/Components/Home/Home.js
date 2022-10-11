
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner'
import Topics from './Topics';



const Home = () => {

  const topicsData = useLoaderData();
  const topics = topicsData.data;
 
  console.log("tp", topics);


  return (
    <div>
      <Banner></Banner>
      <div className="grid justify-center md:grid-cols-4">
        {topics.map((topic) => (
          <Topics key={topic.id} topic={topic}></Topics>
        ))}
      </div>
    </div>
  );
};

export default Home;
