import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import ContextFile from './ContextFile';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <ContextFile>
            <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </ContextFile>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;


//Validation :-

//field sould be feild.
//format 
//length 
