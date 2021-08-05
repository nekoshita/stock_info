import pandas as pd
import yfinance as yf

class History:
    def __init__(self, ticker):
        self._ticker = ticker
        try:
            self._df = yf.Ticker(ticker).dividends.to_frame().sort_index()
        except:
            self._df = None

    def df(self) -> pd.DataFrame:
        return self._df
