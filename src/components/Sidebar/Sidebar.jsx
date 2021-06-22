import "./Sidebar.scss"
import { useEffect,useState } from "react"
import { FaArrowUp,FaArrowDown } from "react-icons/fa";
export default function Sidebar (props){

    const [page,setPage] = useState("Home")

    useEffect(()=>{
        if(props.scroll <=  0.7 * window.innerHeight){
            setPage("Home")
        }
        else if (props.scroll > 0.7 * window.innerHeight 
            && props.scroll < 1.8 * window.innerHeight)
        {
            setPage("About")
        }
        else if (props.scroll > 1.8 * window.innerHeight){
            setPage("Projects")
        }
    },[props.scroll])
    
    
    useEffect(()=>{
        const home = document.getElementById("Home")
        const about = document.getElementById("About")
        const projects = document.getElementById("Projects")
        console.log(page)
        if(page === "Home"){
            
        }
    },[page])

    return(
        <div className="sidebarWrapper">
            {/* <FaArrowUp className="arrow" style={{top:"2vh"}}/> */}
            {/* <div className="item" id="About">About</div>
            <div className="item" id="Projects">Projects</div> */}
            {/* <FaArrowDown className="arrow" style={{bottom:"2vh"}}/> */}
        </div>
    )

}