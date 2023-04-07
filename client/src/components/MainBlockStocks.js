
// Block blank. Made for stock cards.
// Block blank. Made for stock cards.

const MainBlockStocks = (props) => {


    return (
        <main className='main-field'>
            <span className='ticker info-field'>{props.ticker}</span>
            <span className='price info-field'>{props.price + ' $'}</span>
            <span className='change info-field'>{props.change}</span>
            <span className='change_percent info-field'>{props.change_percent + ' %'}</span>
        </main>
    );
}


export default MainBlockStocks;