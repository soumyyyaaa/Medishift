import "./App.css";
import Navbars from "./Component/Navbars";
import Home from "./Pages/Home";
import Portal from "./Pages/Portal";
import Footer from "./Component/Footer";
import Patient from "./Pages/Patient";

function App() {
    return (
        <div className="App">
            <Navbars />
            <Patient />
            <Footer />
        </div>
    );
}

export default App;
