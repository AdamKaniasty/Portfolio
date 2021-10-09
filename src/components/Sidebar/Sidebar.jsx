import "./Sidebar.scss"
import { Link } from 'react-scroll'
import {useEffect} from "react"
export default function Sidebar (props){
    
    const scroll = props.scroll
    const height = window.innerHeight;

    
    return(
        <div className="sidebar">
            <Link to="home" smooth={true} id="link" className="l1">Home</Link>
            <Link to="about" smooth={true} id="link" className="l2">About me</Link>
            <Link to="projects" smooth={true} id="link" className="l3">Projects</Link>
            <Link to="contact" smooth={true} id="link" className="l4">Contact</Link>

        </div>
    )


}