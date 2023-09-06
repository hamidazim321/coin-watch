import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DetailsPage from './components/Details';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
