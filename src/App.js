import './App.css';
import { Header } from './components/Header';
import { Directions } from './components/Directions';
import { LowerImpactPurchases } from './components/LowerImpactPurchases';

function App() {
  return (
    <div className="App">
     <Header />
     <Directions />
     <LowerImpactPurchases />
    </div>
  );
}

export default App;
