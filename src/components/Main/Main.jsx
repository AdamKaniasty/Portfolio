import "./Main.scss"
import {Element,scroller } from 'react-scroll'

import Logo from "../../assets/Auratus.png"
import Arrow from "../../assets/arrow.png"
import {useEffect} from "react"

export default function Main (props){

    useEffect(()=>{
        let logoBox = document.getElementById("logoBox")
        if(props.scroll !== 0 ){   
            logoBox.classList.add("logoBoxAnim")
        }
        else{
            try{
                logoBox.classList.remove("logoBoxAnim")
            }
            catch(e){
                throw e
            }
        }
    },[props.scroll])


    return(
        <Element name="home" className="mainContainer">
            <div className="realMain">
                <div className="box">
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pellentesque eget feugiat neque. In id imperdiet ipsum. 
                        Cras quis vulputate erat.
                    </h1>
                </div>
                <div className="logoBox" id="logoBox">
                    <img src={Logo} alt="A.Kaniasty" className="logo"/>
                    <h1>Adam Kaniasty</h1>
                </div> 
                <img src={Arrow} alt="Adam Kaniasty" className="downArrow"
                    onClick={()=>{
                        scroller.scrollTo('about',{
                            smooth: true,
                        })
                    }}
                ></img>
            </div>
        </Element>
    )
}