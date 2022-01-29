import "./About.scss"
import {Element } from 'react-scroll'
import {useRef,useEffect} from "react"
import IsVisibleHook from "../Hooks/isVisible"
import FaceImg from "../../assets/Face.jpg"

export default function About (props){
    const detector = useRef()
    const isVisible = IsVisibleHook(detector)


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
        <Element name="about" className="aboutWrapper">
            <div id="detector" className="detector"/>
            <div className="aboutContainer" id="about" ref={detector}>
                <h1>About me</h1>
                <div className="aboutPhoto">
                    <img src={FaceImg} alt="AdamKaniasty"/>
                </div>
                <div className="aboutText">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pellentesque eget feugiat neque. In id imperdiet ipsum. 
                        Cras quis vulputate erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pellentesque eget feugiat neque. In id imperdiet ipsum. 
                        Cras quis vulputate erat.
                    </p>
                </div>
            
            </div>
        </Element>
    )
}