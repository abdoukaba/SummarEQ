import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

interface ChartData {
  category: string;
  count: number;
}

interface BarChartProps {
  data: ChartData[];
}

export const BarChartComponent = ({ data }: BarChartProps) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        ></BarChart>
  </ResponsiveContainer>
);