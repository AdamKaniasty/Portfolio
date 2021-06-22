import "./Projects.scss"
import IsVisibleHook from "../Hooks/isVisible"

import {useRef,useEffect} from "react"

export default function Projects(){
    const detector = useRef()
    const isVisible = IsVisibleHook(detector)

    useEffect(()=>{
        const el = document.getElementById("wrapper")
        if(isVisible){
            el.classList.add("curtain")
            el.classList.remove("wrapper")
        }
        else{
            el.classList.add("wrapper")
            try{
                el.classList.remove("curtain")
            }
            catch(e){
                throw e
            }
        }
        
    },[isVisible])

    return(
        <div className="wrapper" id="wrapper">
            <div className="projectsContainer">

            </div>
            <div className="line"/>
            <div className="detector" ref={detector}></div>
        </div>
    )
}