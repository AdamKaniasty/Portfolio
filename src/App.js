import './App.css';
import Main from "./components/Main/Main"
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import {useState, useEffect} from "react"

function App() {

  const [scroll,setScroll] = useState(0)

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])

  const handleScroll = ()=>{
    setScroll(window.scrollY)
  }
  return (
    <div className="App">
      <Main scroll={scroll}/>
      <About scroll={scroll}/>
      <Projects scroll={scroll}/>
      <Contact scroll={scroll}/>
      <Sidebar scroll={scroll}/>
    </div>
  );
}

export default App;
