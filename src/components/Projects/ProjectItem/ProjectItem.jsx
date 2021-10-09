import "./ProjectItem.scss";

export default function ProjectItem (props){







    const image = <img className="image" src={props.project.image} alt="Adam Kaniasty"/>

    const text = <div className="text">
        <h1>{props.project.title}</h1>
        <p>{props.project.short}</p>
    </div>

    return(
        <div>
            {props.type ? 
                <div className="projectItem">
                    {image}
                    {text}
                </div>
                :
                <div className="projectItem"> 
                    {text}
                </div>
            }
        </div>
    )
}