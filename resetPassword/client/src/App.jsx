import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/register';
import Login from './pages/login';
import Enteremail from './pages/enteremail';
import Resetpass from './pages/resetpass';
import Entertoken from './pages/entertoken';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element ={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="enteremail" element={<Enteremail />} />
          <Route path="resetpass" element={<Resetpass />} />
          <Route path="entertoken" element={<Entertoken />} />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
