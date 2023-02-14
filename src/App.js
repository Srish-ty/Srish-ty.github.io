//import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Headi,Hdng,S } from './components/styling/header.style';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import AboutUs from "./pages/aboutus";
import Contact from "./pages/contact";

function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;




/*
<Header><Hdng>STETH<S>AIM</S></Hdng></Header>
    <Nav></Nav>
*/