import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

interface ChartData {
  month: string;
  users: number;
}

interface LineChartProps {
  data: ChartData[];
}

export const LineChartComponent = ({ data }: LineChartProps) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart 
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          ></LineChart>
        
  </ResponsiveContainer>
)