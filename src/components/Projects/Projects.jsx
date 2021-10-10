import "./Projects.scss"
import IsVisibleHook from "../Hooks/isVisible"
import { Element } from 'react-scroll'
import refresh from "../../assets/refresh.png"
import {ReactComponent as Run} from "../../assets/run.svg"
import {useRef,useEffect,useState} from "react"
import projectList from "./ProjectList"
import ProjectItem from "./ProjectItem/ProjectItem"

export default function Projects(){
    const detector = useRef()
    const [visible,setVisible] = useState(false)

    const handleChange = ()=>{
        if(!visible){
            const refresh = document.getElementById("refreshImg")
            refresh.classList.toggle("refresh-animation")
            const status = document.getElementById("status")
            status.innerHTML = "Executing..."
            setTimeout(()=>{
                setVisible(!visible)
                refresh.classList.toggle("refresh-animation")
                status.innerHTML = "Done!"
            },[1000])
        }
        else
            setVisible(!visible)
    }

    if(!visible){
        const status = document.getElementById("status")
        if (status)
            status.innerHTML = "Execute the cell!"
    }

    return(
        <Element name="projects" className="wrapper" id="wrapper">
            <div className="projectsContainer">
                <h1>Projects</h1>
                <div className="snippet">
                    <div onClick={()=>handleChange()}>
                        <Run/>
                    </div>
                    <h3 style={{alignSelf:"center"}}>[1] :</h3>
                    <div className="input">
                        <h1>print(projectList[0:2])</h1>
                    </div>
                </div>
                <div id="refresh">
                    <img id="refreshImg" src={refresh} alt="Adam Kaniasty"/>
                    <span id="status">Execute the cell!</span>
                </div>
                <div className="snippet2">
                    <div>
                        <Run style={{width: '2vw', height: '2vw',marginRight: '1vh',opacity: '0'}}/>
                    </div>
                    <h3 style={visible?{opacity:1,color:"red"}:{opacity:0}}>[1] :</h3>
                    <div className="output" style={visible?{opacity:1}:{opacity:0}}>
                        <ProjectItem project={projectList[0]} type={true}/>
                        <ProjectItem project={projectList[1]} type={true}/>
                        <ProjectItem project={projectList[1]} type={true}/>
                    </div>
                </div>
                <div>
                    <h2>View more</h2>
                </div>
            </div>
        </Element>
    )
}