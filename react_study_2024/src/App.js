import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Header from './App_Components/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Category from './Pages/Category/Category';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Header />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Category" element={<Category/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
