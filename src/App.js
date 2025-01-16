import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<Book/>} />
          <Route path="/Login" element={<Login />} />
          <Route path= "/register" element ={<Register/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
