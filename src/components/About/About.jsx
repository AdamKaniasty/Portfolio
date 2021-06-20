import "./About.scss"
import {useRef,useEffect} from "react"
import IsVisibleHook from "./Hooks/isVisible"


export default function Main (){
    const aboutRef = useRef()
    const isVisible = IsVisibleHook(aboutRef)


    useEffect(()=>{
        let el = document.getElementById("about")
        if(isVisible === true){
            el.classList.add("aboutContainerAnim")
        }
        else if (isVisible === false && el.classList.contains("aboutContainerAnim")){
            el.classList.remove("aboutContainerAnim")
        }
    },[isVisible])
    return(
        <div className="aboutWrapper">
            <div className="aboutContainer" id="about" ref={aboutRef}>
            
            </div>
        </div>
    )
}