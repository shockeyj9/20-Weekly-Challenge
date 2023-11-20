import github from '../assets/github-pages-logo.png'
import linkedIn from '../assets/linkedIn-logo.png'

export default function Footer(){

    return (
        <footer>
            <a href="https://github.com/shockeyj9">
                <img src={github} alt="octo-cat Logo" />
            </a>
            <a href="https://www.linkedin.com/in/jessie-shockey-077676140/">
                <img src={linkedIn} alt="linkedIn Logo" />
            </a>
        </footer>
    )


}
