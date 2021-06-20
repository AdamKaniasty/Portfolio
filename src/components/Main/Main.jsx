import "./Main.scss"
import About from "../About/About"
export default function Main (){
    return(
        <div className="mainContainer">
            <div className="realMain">
                <div className="box">
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pellentesque eget feugiat neque. In id imperdiet ipsum. 
                        Cras quis vulputate erat.
                    </h1>
                </div>

            </div>
            <About/>
        </div>
    )
}