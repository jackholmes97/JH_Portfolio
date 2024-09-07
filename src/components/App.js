import '../App.css';
import Home from './Home';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Stack from './Stack';
import Contact from './Contact';
import Menu from './Menu';
function App() {
  const items = [
    {name: "Java", logo: "./logos/Java.png", color: "rgb(79, 91, 102)"},
    {name: "Spring Boot", logo: "./logos/springboot.png", color: "rgb(79, 91, 102)"},
    {name: "JavaScript", logo: "./logos/JavaScript.png", color: "rgb(79, 91, 102)"},
    {name: "React", logo: "./logos/React.png", color: "white"},
    {name: "HTML5", logo: "./logos/HTML5.png", color: "rgb(79, 91, 102)"},
    {name: "CSS3", logo: "./logos/CSS.png", color: "rgb(79, 91, 102)"},
    {name: "Bootstrap", logo: "./logos/Bootstrap.png", color: "rgb(79, 91, 102)"},
    {name: "Material UI", logo: "./logos/MUI.png", color: "rgb(79, 91, 102)"},
    {name: "Ruby", logo: "./logos/ruby.png", color: "rgb(79, 91, 102)"},
    {name: "Ruby on Rails", logo: "./logos/Rails.png", color: "rgb(79, 91, 102)"},
    {name: "SQL", logo: "./logos/SQL.png", color: "rgb(79, 91, 102)"},
    {name: "PostgreSQL", logo: "./logos/pgrsql.png", color: "rgb(79, 91, 102)"},
    {name: "TinkerGraph", logo: "./logos/tinkerpop.png", color: "rgb(79, 91, 102)"},
    {name: "Gremlin", logo: "./logos/gremlin.png", color: "rgb(79, 91, 102)"},             
    {name: "AWS", logo: "./logos/awsV6.png", color: "rgb(79, 91, 102)"},
    {name: "Git", logo: "./logos/git.png", color: "rgb(79, 91, 102)"},
    {name: "GitHub", logo: "./logos/GitHub.png", color: "rgb(79, 91, 102)"},
    {name: "NPM", logo: "./logos/NPM.png", color: "rgb(79, 91, 102)"},
    {name: "BCrypt", logo: "./logos/BCrypt.png", color: "rgb(79, 91, 102)"},
    {name: "VS Code", logo: "./logos/VSCode.png", color: "rgb(79, 91, 102)"},
    {name: "IntelliJ", logo: "./logos/IntelliJ.png", color: "rgb(79, 91, 102)"},
    {name: "Postman", logo: "./logos/Postman.png", color: "rgb(79, 91, 102)"}]
    
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
