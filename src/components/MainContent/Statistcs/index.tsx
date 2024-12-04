import React from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'
import { ChartContainer, Title } from './styles'

// Styled Components

// Dados de exemplo
const data = [
  { date: '8/04', value: 10000 },
  { date: '9/04', value: 20000 },
  { date: '10/04', value: 8411 },
  { date: '11/04', value: 25000 },
  { date: '12/04', value: 38000 },
  { date: '13/04', value: 15000 },
  { date: '14/04', value: 22000 }
]

// Componente principal
const StatisticsChart: React.FC = () => {
  return (
    <ChartContainer>
      <Title>Statistics</Title>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6f42c1"
            strokeWidth={2}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default StatisticsChart
