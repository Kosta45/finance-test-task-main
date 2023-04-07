import './App.css';
import './BackgroundApp.css'
import StocksList from '../containers/StocksList';
import BackgroundBlock from '../containers/BackgroundBlock';


function App() {
  return (
    <div className="App">

      {/* Adding data from my repository */}

      <StocksList />
      <BackgroundBlock />
    </div>
  );
}


export default App;