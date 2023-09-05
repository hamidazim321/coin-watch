import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DetailsPage from './components/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
