import * as React from "react";
import { useRouter } from "next/router";

import { DividendHistoryChart } from "./dividend_history_chart";
import { TickerForm } from "./ticker_form";

const DividendHistory = () => {
  const router = useRouter();
  const q = router.query;
  const [ticker, setTicker] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (typeof q.ticker === "undefined") {
      setTicker(undefined);
      return;
    }
    setTicker(Array.isArray(q.ticker) ? q.ticker[0] : q.ticker);
  }, [q.ticker]);

  return (
    <>
      <TickerForm ticker={ticker} />
      {typeof ticker !== "undefined" && (
        <DividendHistoryChart ticker={ticker} />
      )}
    </>
  );
};

export default DividendHistory;
