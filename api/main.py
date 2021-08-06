from typing import List
import json

import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from src.history import History


app = FastAPI()
default_ticker = 'JNJ'

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/healthz")
def healthz():
    return "ok"


class DiviedendHistory(BaseModel):
    date: str
    dividend: float

@app.get("/api/dividend_history", response_model=List[DiviedendHistory])
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
