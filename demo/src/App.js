// import logo from './logo.svg';
import './App.css';
// import Users  from './USers';
import { BrowserRouter, Routes ,Route  } from 'react-router-dom';
import Users from './USers';
import About from './About';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage';
import Filter from './Filter';
import Add from './Add';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element={<Users />} />
        <Route  path = "/about/:name" element={<About />} />
        <Route path = "/filter" element={<Filter />} />
        <Route path = "/add" element={<Add />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
