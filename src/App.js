import "./App.css";
import Navbars from "./Component/Navbars";
import Home from "./Pages/Home";
import Portal from "./Pages/Portal";
import Footer from "./Component/Footer";
import Patient from "./Pages/Patient";
import Login from './Pages/Login page/Login';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from './Pages/Sign up page/Signup';
import DoctorMain from './Pages/Dr main Page/DoctorMain';

function App() {
    return (
        // <div className="App">
        //     <Navbars />
        //     <Home/>
        //     <Patient />
        //     <Footer />
        // </div>
        <BrowserRouter>
        <Navbars/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/doctor" element={<DoctorMain/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
