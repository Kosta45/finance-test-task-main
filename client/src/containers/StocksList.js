import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectStocks } from '../store/stocksSlice';


// Сonnect Socket.io
import io from 'socket.io-client';
import MainBlockStocks from '../components/MainBlockStocks';
import AdditionalInformation from '../components/AdditInform';

const socket = io('http://localhost:4000');
socket.emit('start');



// I get the initial state from the store
// I get the initial state from the store
const StocksList = () => {
    const stocks = useSelector(selectStocks);
    const [stateStock, setStateStock] = useState([stocks])


    useEffect(() => {
        socket.on('ticker', function (quotes) {
            setStateStock(quotes)
        });
    }, [])

    // Output of the main content. Wrapped in <a> tag for possible routing (TRY TO MAKE ROUTING!!!)
    // Output of the main content. Wrapped in <a> tag for possible routing 
    return (
        <>
            <h1 className='main-title'>
                Imaginary finance
            </h1>
            <div className="stocks-field">
                <FieldName />
                <div className='stock-card'>
                    {stateStock.map(item =>
                        <a
                            href={item.ticker}
                            key={item.ticker + 'link'}
                            className="cards-block">
                            <MainBlockStocks
                                key={item.ticker + 'id'}
                                ticker={item.ticker}
                                price={item.price}
                                change={item.change}
                                change_percent={item.change_percent}
                            />
                            <AdditionalInformation
                                key={item.ticker + 'ai'}
                                exchange={item.exchange}
                                last_trade_time={item.last_trade_time}
                            />
                        </a>)}
                </div>
            </div>
        </>
    )
}

// Small headers, titles for stock table
// Small headers, titles for stock table
const FieldName = () => {
    return (
        <div className='info-title'>
            <span className='title'>Ticker</span>
            <span className='title'>Price</span>
            <span className='title'>Change</span>
            <span className='title'>Percent</span>
        </div>
    )
}


export default StocksList;





// {
//     stateStock.map(item =>
//         <a href={item.ticker} key={item.ticker + 'a'}>
//             <MainBlockStocks
//                 key={item.ticker + 'id'}
//                 ticker={item.ticker}
//                 price={item.price}
//                 change={item.change}
//                 change_percent={item.change_percent}>
//                 <div>
//                 </div>
//             </MainBlockStocks>
//             <AdditionalInformation
//                 key={item.ticker + 'ai'}
//                 exchange={item.exchange}
//                 dividend={item.dividend}
//                 yield={item.yield}
//                 last_trade_time={item.last_trade_time}
//             >

//             </AdditionalInformation>
//         </a>)
// }