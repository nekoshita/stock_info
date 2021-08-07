import useSWR from "swr";

import { Dividend } from "src/components/types";

const baseURL = (() => {
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  }
  return "http://localhost:8080";
})();

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useDividendHistory = (ticker: string) => {
  const { data, error } = useSWR<Dividend[], Error>(
    `${baseURL}/api/dividend_history?ticker=${ticker}`,
    fetcher
  );
  return { data, error };
};
