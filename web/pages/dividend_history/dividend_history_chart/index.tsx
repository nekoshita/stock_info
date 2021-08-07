import { useDividendHistory } from "src/logic/api";

import { Chart } from "./chart";

interface IProps {
  ticker: string;
}
export const DividendHistoryChart = ({ ticker }: IProps) => {
  const { data, error } = useDividendHistory(ticker);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Chart dividendHistory={data} />
    </>
  );
};
