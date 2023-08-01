import '../App.css';
import Home from './Home';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Stack from './Stack';
import Contact from './Contact';
import Menu from './Menu';
function App() {
  const items = [{name: "React", logo: "./React.png", color: "white"},
                 {name:"JavaScript", logo: "./JavaScript.png", color: "rgb(79, 91, 102)"},
                 {name: "Material UI", logo: "./MUI.png", color: "rgb(79, 91, 102)"},
                 {name: "Ruby", logo: "./ruby.png", color: "rgb(79, 91, 102)"},
                 {name: "Ruby on Rails", logo: "./Rails.png", color: "rgb(79, 91, 102)"},
                 {name: "Python", logo: "./Python.png", color: "rgb(79, 91, 102)"},
                 {name: "AWS S3", logo: "./AWS.png", color: "rgb(79, 91, 102)"},
                 {name: "HTML5", logo: "./HTML5.png", color: "rgb(79, 91, 102)"},
                 {name: "CSS3", logo: "./CSS.png", color: "rgb(79, 91, 102)"},
                 {name: "Node.js", logo: "./Node.png", color: "rgb(79, 91, 102)"},
                 {name: "RSpec", logo: "./RSpec.png", color: "rgb(79, 91, 102)"},
                 {name: "SQL", logo: "./SQL.png", color: "rgb(79, 91, 102)"},
                 {name: "Git", logo: "./Git.png", color: "rgb(79, 91, 102)"},
                 {name: "VS Code", logo: "./VSCode.png", color: "rgb(79, 91, 102)"},
                 {name: "Postman", logo: "./Postman.png", color: "rgb(79, 91, 102)"},
                 {name: "NPM", logo: "./NPM.png", color: "rgb(79, 91, 102)"},
                 {name: "Bootstrap", logo: "./Bootstrap.png", color: "rgb(79, 91, 102)"},
                 {name: "Figma", logo: "./Figma.png", color: "rgb(79, 91, 102)"},
                 {name: "BCrypt", logo: "./BCrypt.png", color: "rgb(79, 91, 102)"},
                 {name: "PostgreSQL", logo: "./PostgreSQL.png", color: "rgb(79, 91, 102)"}]

  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Home/>
      <About/>
      <Stack items={items}/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
