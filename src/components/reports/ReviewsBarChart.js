import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";

const data = [
  {
    name: 'Jan 2020', Reviews: 2400,
  },
  {
    name: 'Feb 2020', Reviews: 1398,
  },
  {
    name: 'Mar 2020', Reviews: 2800,
  },
  {
    name: 'Apr 2020', Reviews: 3908,
  },
  {
    name: 'May 2020', Reviews: 4800,
  },
  {
    name: 'Jun 2020', Reviews: 3800,
  },
  {
    name: 'Jul 2020', Reviews: 4300,
  },
];

export default function ReviewsBarChart(props) {

  return (
    <ResponsiveContainer width={"100%"} height={300} debounce={1}>
      <BarChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Review Count', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Reviews" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
