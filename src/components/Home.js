import { Link } from 'react-router-dom';

function Home() {
    return (<div className="project-preview">
        <Link to={`/projects`} className="white bold link">
            <h2>My Projects →</h2>
            <p>Projects on which im currently working on and contributing with GitHub</p>
        </Link>
    </div>)
}

export default Home;