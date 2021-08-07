import * as React from "react";
import { useRouter } from "next/router";

import { DividendHistoryChart } from "./dividend_history_chart";
import { TickerForm } from "./ticker_form";

const DividendHistory = () => {
  const router = useRouter();
  const { ticker } = router.query;

  if (typeof ticker === "undefined") {
    return <div>no ticker</div>;
  }

  return (
    <>
      <TickerForm />
      <DividendHistoryChart
        ticker={Array.isArray(ticker) ? ticker[0] : ticker}
      />
    </>
  );
};

export default DividendHistory;
