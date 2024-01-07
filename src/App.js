import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Views/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
    const title = "Dojo Blog"
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <div className="flex justify-evenly mt-2">
                        <h1 className="text-red-500 font-black text-3xl w-[100%]">{title}</h1>
                        <NavBar/>
                    </div>
                    <br/>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="/about" element={<div>About</div>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
