import { useLoaderData } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const Statistic = () => {

  const topicsData = useLoaderData()
  const topics = topicsData.data
  

  return (
    <div>
      <h2 className="text-center text-2xl text-3xl text-indigo-900 mt-5 mb-5">Graph Based on Topics</h2>
      <div className='flex justify-center items-center'>
        <LineChart width={600} height={300} data={topics}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </LineChart>
      </div>
    </div>
  );
};

export default Statistic;