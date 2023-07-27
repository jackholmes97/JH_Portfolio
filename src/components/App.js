import '../App.css';
import SlideRoutes from 'react-slide-routes';
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Stack from './Stack';
import Contact from './Contact';
function App() {
  const items = [{name: "React", logo: "./logos/React.png", color: "rgb(79, 91, 102)"},
                 {name:"JavaScript", logo: "./logos/JavaScript.png", color: "rgb(79, 91, 102)"},
                 {name: "Material UI", logo: "./logos/MUI.png", color: "rgb(79, 91, 102)"},
                 {name: "Ruby", logo: "./logos/ruby.png", color: "rgb(79, 91, 102)"},
                 {name: "Ruby on Rails", logo: "./logos/Rails.png", color: "rgb(79, 91, 102)"},
                 {name: "Python", logo: "./logos/Python.png", color: "rgb(79, 91, 102)"},
                 {name: "AWS S3", logo: "./logos/AWS.png", color: "rgb(79, 91, 102)"},
                 {name: "HTML5", logo: "./logos/HTML5.png", color: "rgb(79, 91, 102)"},
                 {name: "CSS3", logo: "./logos/CSS.png", color: "rgb(79, 91, 102)"},
                 {name: "Node.js", logo: "./logos/Node.png", color: "rgb(79, 91, 102)"},
                 {name: "RSpec", logo: "./logos/RSpec.png", color: "rgb(79, 91, 102)"},
                 {name: "SQL", logo: "./logos/SQL.png", color: "rgb(79, 91, 102)"},
                 {name: "Git", logo: "./logos/Git.png", color: "rgb(79, 91, 102)"},
                 {name: "VS Code", logo: "./logos/VSCode.png", color: "rgb(79, 91, 102)"},
                 {name: "Postman", logo: "./logos/Postman.png", color: "rgb(79, 91, 102)"},
                 {name: "NPM", logo: "./logos/NPM.png", color: "rgb(79, 91, 102)"},
                 {name: "Bootstrap", logo: "./logos/Bootstrap.png", color: "rgb(79, 91, 102)"},
                 {name: "Figma", logo: "./logos/Figma.png", color: "rgb(79, 91, 102)"},
                 {name: "BCrypt", logo: "./logos/BCrypt.png", color: "rgb(79, 91, 102)"},
                 {name: "PostgreSQL", logo: "./logos/PostgreSQL.png", color: "rgb(79, 91, 102)"}]

  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Stack items={items}/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
