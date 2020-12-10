import fruits from './lists/fruits';
import FruitContainer from './Components/FruitContainer';
import './App.css';

function App() {
    return (
        <div className="App">
            <FruitContainer fruits={fruits} />
        </div>
    );
}

export default App;
