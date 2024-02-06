import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
