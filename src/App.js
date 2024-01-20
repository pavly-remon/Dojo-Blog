import './App.css';
import ViewRoutes from "./Router";
import NavBar from "./Components/NavBar";

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";


const App = () => {
    const title = "Dojo Blog";
    return (
        <Router>
            <div className="App">
                <div className="header">
                    <div className="flex justify-evenly mt-2 mb-20">
                        <h1 className="text-red-500 font-black text-3xl w-[100%]">{title}</h1>
                        <NavBar/>
                    </div>
                </div>
                <div className="content flex flex-col items-center">
                    <Routes>
                        <Route index element={ViewRoutes.home.view}/>
                        <Route path={ViewRoutes.about.path} element={ViewRoutes.about.view}/>
                        <Route path={ViewRoutes.create.path} element={ViewRoutes.create.view}/>
                        <Route path={ViewRoutes.blogDetails.path} element={ViewRoutes.blogDetails.view}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
