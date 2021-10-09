import "./Projects.scss"
import IsVisibleHook from "../Hooks/isVisible"
import { Element } from 'react-scroll'
import {useRef,useEffect} from "react"
import projectList from "./ProjectList"
import ProjectItem from "./ProjectItem/ProjectItem"

export default function Projects(){
    const detector = useRef()


    return(
        <Element name="projects" className="wrapper" id="wrapper">
            <div className="projectsContainer">
                <h1>Projects</h1>
                <div className="content">
                    <ProjectItem project={projectList[0]} type={true}/>
                    <ProjectItem project={projectList[1]} type={true}/>
                    <ProjectItem project={projectList[1]} type={true}/>

                </div>
                <div>
                    <h2>View more</h2>
                </div>
            </div>
        </Element>
    )
}