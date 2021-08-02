import { Link } from 'react-router-dom';

function Project({ projects }) {
    console.log(projects)
    return (
        <div className="project-list">
            {projects.map(project => (
                <div className="project-preview" key={project.name} >
                    <Link to={`/projects/${project.name}`}  className="link bold">
                        <h2>{project.name}</h2>
                        <p> {project.description}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Project;