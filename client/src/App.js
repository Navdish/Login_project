import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './Componenets/Signup/signup.jsx'
import Login from './Componenets/Login/Login.jsx'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
