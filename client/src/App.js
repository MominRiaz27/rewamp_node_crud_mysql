import './App.css';
import SignUp from "./components/signup.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/signin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
