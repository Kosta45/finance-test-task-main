import { createSlice } from '@reduxjs/toolkit';


// My initial data for field "Stocks".

export const stocksSlice = createSlice({
    name: 'stocks',
    initialState: {
        stocks: [
            { "ticker": "AAPL", "exchange": "NASDAQ", "price": 0, "change": 64.52, "change_percent": 0.84, "dividend": 0.56, "yield ": 1.34, "last_trade_time": "2021 - 04 - 30T11: 53: 21.000Z" },
            { "ticker": "GOOGL", "exchange": "NASDAQ", "price": 0, "change": 154.38, "change_percent": 0.10, "dividend": 0.46, "yield": 1.18, "last_trade_time": "2021-04-30T11:53:21.000Z" },
            { "ticker": "MSFT", "exchange": "NASDAQ", "price": 0, "change": 161.45, "change_percent": 0.41, "dividend": 0.18, "yield": 0.98, "last_trade_time": "2021-04-30T11:53:21.000Z" },
            { "ticker": "AMZN", "exchange": "NASDAQ", "price": 0, "change": 128.71, "change_percent": 0.60, "dividend": 0.07, "yield": 0.42, "last_trade_time": "2021-04-30T11:53:21.000Z" },
            { "ticker": "FB", "exchange": "NASDAQ", "price": 0, "change": 171.92, "change_percent": 0.75, "dividend": 0.52, "yield": 1.31, "last_trade_time": "2021-04-30T11:53:21.000Z" },
            { "ticker": "TSLA", "exchange": "NASDAQ", "price": 0, "change": 171.92, "change_percent": 0.75, "dividend": 0.52, "yield": 1.31, "last_trade_time": "2021-04-30T11:53:21.000Z" }
        ],
        reducer: {
            // Empty at the moment, maybe I'll add it later
        }
    }
});


export const selectStocks = state => state.stocks.stocks;
export default stocksSlice.reducer;