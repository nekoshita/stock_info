import * as React from "react";

import { useDividendHistory } from "src/logic/api";

import { Chart } from "./chart";

export default function DividendHistory() {
  const { data, error } = useDividendHistory("MCD");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Chart dividendHistory={data} />
    </>
  );
}
