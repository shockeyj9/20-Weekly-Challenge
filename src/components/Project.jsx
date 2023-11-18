import projectData from "../utils/projectData"



export default function Projects(){

    return (
    <ul>
        {projectData.map((result)=>(
        <li key={result.id}>
            <a href={result.url} target="_blank">
                <img src={result.image} alt={result.description} />
            </a>
        </li>
        ))}
    </ul>
    )
}