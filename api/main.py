from typing import List
import json

import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from pydantic import BaseModel

from src.history import History


app = FastAPI()
default_ticker = 'JNJ'

@app.get("/healthz")
def healthz():
    return "ok"


class DiviedendHistory(BaseModel):
    date: str
    dividend: float

@app.get("/dividend_history", response_model=List[DiviedendHistory])
def dividend_history(ticker: str = None):
    if ticker is None:
        return RedirectResponse("/dividend_history?ticker={}".format(default_ticker))
    
    df = History(ticker).df()

    res = []
    for index, row in df.iterrows():
        res.append({
            'date': index.strftime('%Y-%m-%d'),
            'dividend': row.Dividends
        })
    
    return res


if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8080, reload=True)
