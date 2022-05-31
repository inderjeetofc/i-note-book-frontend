import './App.css';
import {
    Routes,
    Route
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotesState from './context/notes/NotesState';
function App() {
    return (
        <>
            <NotesState>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                </Routes>
            </NotesState>
        </>
    );
}

export default App;
