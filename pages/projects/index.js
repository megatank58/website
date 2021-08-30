import Link from 'next/link';

function Project({ projects }) {
    return (
        <div className="project-list">
            {projects.map(project => (
                <div className="project-preview" key={project.name} >
                    <Link href={`/projects/${project.name}`}  className="white bold" passHref>
                        <a>
                        <h2>{project.name}</h2>
                        <p> {project.description}</p>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/megatank58/repos');
    const projects = await res.json();

    return {
        props: {
            projects
        }
    }
}

export default Project;