import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Login from './pages/login'; 
import Register from './pages/Register';
import Accommodations from './pages/Accommodations';



const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/register" element={<Register />} />
                <Route path="/accommodations" element={<Accommodations />} />
            </Routes>
        </Router>
    );
};

export default App;
