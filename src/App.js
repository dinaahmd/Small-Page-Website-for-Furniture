import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import Slider from "./components/Slider";
import Products from "./components/Products";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <MyNav />
      <Slider />
      <Products />
      <Counter />
    </div>
  );
}

export default App;
