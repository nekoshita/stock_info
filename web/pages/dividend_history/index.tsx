import * as React from "react";
import useSWR from "swr";

import { Dividend } from "src/components/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function DividendHistory() {
  const { data, error } = useSWR<Dividend[], Error>(
    "http://localhost:8080/api/dividend_history?ticker=MCD",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Hoge dividendHistory={data} />
    </>
  );
}

interface IProps {
  dividendHistory: Dividend[];
}

const Hoge = ({ dividendHistory }: IProps) => {
  return (
    <>
      {dividendHistory.map((v, i) => (
        <div key={i}>
          {v.date}: {v.dividend}
        </div>
      ))}
    </>
  );
};
