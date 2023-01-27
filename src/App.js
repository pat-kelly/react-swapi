import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Index } from './pages/Index/Index';
import { ShipList } from './pages/ShipList/ShipList';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/starships' element={<ShipList />} />
      </Routes>
    </>
  );
}

export default App;
