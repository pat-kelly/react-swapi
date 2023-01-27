import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Index } from './pages/Index/Index';
import { ShipList } from './pages/ShipList/ShipList';
import { StarShipPage } from './pages/StarShipPage/StarShipPage';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/starships' element={<ShipList />} />
        <Route path='/ship' element={<StarShipPage />} />
      </Routes>
    </>
  );
}

export default App;
