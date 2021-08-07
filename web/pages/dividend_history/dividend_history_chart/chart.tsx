import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Dividend } from "src/components/types";

interface IProps {
  dividendHistory: Dividend[];
}

export const Chart = ({ dividendHistory }: IProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dividendHistory}>
        <Line type="monotone" dataKey="dividend" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
