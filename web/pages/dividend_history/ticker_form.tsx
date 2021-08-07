import * as React from "react";
import { useRouter } from "next/router";

interface IProps {
  ticker: string | undefined;
}
export const TickerForm = ({ ticker }: IProps) => {
  const router = useRouter();
  const [inputText, setInputText] = React.useState<string>(
    typeof ticker === "undefined" ? "" : ticker
  );

  React.useEffect(() => {
    setInputText(typeof ticker === "undefined" ? "" : ticker);
  }, [ticker]);

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/dividend_history",
      query: { ticker: inputText },
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form onSubmit={submit}>
      Ticker: <input type="text" value={inputText} onChange={onChange} />
    </form>
  );
};
