import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from './stocksSlice';



export default configureStore({
    reducer: {
        stocks: stocksReducer
    }
})