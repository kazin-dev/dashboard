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
import { ChartContainer, ChartBox, Title } from './styles'

const data = [
  { date: '8/04', value: 10000 },
  { date: '9/04', value: 20000 },
  { date: '10/04', value: 8411 },
  { date: '11/04', value: 25000 },
  { date: '12/04', value: 38000 },
  { date: '13/04', value: 15000 },
  { date: '14/04', value: 22000 }
]

const k = (v: number) => `${Math.round(v / 1000)}k` // 38000 -> 38k

const StatisticsChart: React.FC = () => {
  return (
    <ChartContainer>
      <Title>Estatísticas</Title>
      <ChartBox>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              interval="preserveStartEnd"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickFormatter={k}
              width={30} // deixa mais compacto
              domain={[0, 'auto']}
            />
            <Tooltip
              formatter={(v: number) => `${v.toLocaleString('pt-BR')}`}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6f42c1"
              strokeWidth={2}
              dot={{ r: 4 }} // pontos menores no mobile
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartBox>
    </ChartContainer>
  )
}

export default StatisticsChart
