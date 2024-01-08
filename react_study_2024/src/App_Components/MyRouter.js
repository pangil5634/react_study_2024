import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Header from './Header';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Category from '../Pages/Category/Category';

// Router를 관리하는 컴포넌트
function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Header을 Outlet으로 사용한다. */}
                <Route element={<Header />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Category" element={<Category/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MyRouter;
