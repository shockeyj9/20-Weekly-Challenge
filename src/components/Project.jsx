import projectData from "../utils/projectData"



export default function Projects(){

    return (
    <ul className="projects">
        {projectData.map((result)=>(
        <li key={result.id} >
            <a className="project" href={result.url} target="_blank">
                <img src={result.image} alt={result.description} />
            </a>
        </li>
        ))}
    </ul>
    )
}