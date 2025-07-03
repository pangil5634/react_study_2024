import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Header from './Header';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Category from '../Pages/Category/Category';
import Week1ExerciseForm from '../Seminar/first/Week1ExerciseForm'
import Week1ExampleProps from '../Seminar/first/Week1ExampleProps'
import Week1ExamplePropTypes from '../Seminar/first/Week1ExamplePropTypes'
import Notification from "../Pages/Notification/Notification";
import ChatBox from '../Pages/UseRef/UseRef';
import Parent from '../Pages/Memorization/Parent';
import Calculator from '../Pages/Memorization/Calculator';
import CallbackParent from '../Pages/Memorization/CallbackParent';
import TodoApp from '../Pages/UseReducer/TodoApp';
// Router를 관리하는 컴포넌트
function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Header을 Outlet으로 사용한다. */}
                <Route element={<Header />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Category" element={<Category />} />
                    <Route path="/Week1ExerciseForm" element={<Week1ExerciseForm />} />
                    <Route path="/Week1ExampleProps" element={<Week1ExampleProps />} />
                    <Route path="/Week1ExamplePropTypes" element={<Week1ExamplePropTypes />} />
                    <Route path="/Notification" element={<Notification />} />
                    <Route path="/useRef" element={<ChatBox/> }/>
                    <Route path="/memo" element={<Parent />} />
                    <Route path="/useMemo" element={<Calculator />} />
                    <Route path="/useCallback" element={<CallbackParent />} />
                    <Route path="/useReducer" element={<TodoApp/>} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MyRouter;
