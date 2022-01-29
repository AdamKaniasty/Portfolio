import "./Projects.scss"
import { Element } from 'react-scroll'
import {useRef,useEffect,useState} from "react"
import projectList from "./ProjectList"
import ProjectItem from "./ProjectItem/ProjectItem"

export default function Projects(){


    return(
        <Element name="projects" className="wrapper" id="wrapper">
            <div className="projectsContainer" id="projects">
                <h1>Projects</h1>
            </div>
        </Element>
    )
}