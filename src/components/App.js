import '../App.css';
import SlideRoutes from 'react-slide-routes';
import {Route, useLocation} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Stack from './Stack';
import Contact from './Contact';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header/>
      <SlideRoutes location={location} duration={400}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/stack' element={<Stack/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </SlideRoutes>
    </div>
  );
}

export default App;
