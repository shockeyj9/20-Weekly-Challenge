import projectData from "../utils/projectData"
import github from '../assets/github-pages-logo.png'
import linkedIn from '../assets/linkedIn-logo.png'


export default function Projects(){

    return (
    <ul className="projects">
        {projectData.map((result)=>(
        <li key={result.id} className="project">
            <a  href={result.url} target="_blank">
                <img src={result.image} alt={result.description} />
            </a>
            <p>{result.description} 
                <a href={result.repo} target="_blank">
                <img className="repo-icon"src={github} alt="octo-cat Logo" />
                </a>
            </p>
        </li>
        ))}
    </ul>
    )
}