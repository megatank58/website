import Link from 'next/link';
import ProjectStyles from '../../styles/Project.module.css'

function Project({ projects }) {
    return (
        <div className={ProjectStyles.list}>
            {projects.map(project => (
                <Link href={`/projects/${project.name}`} key={project.name} passHref>
                    <a className={`${ProjectStyles.white} ${ProjectStyles.bold}`}>
                        <div className={ProjectStyles.preview}  >
                            <h2>{project.name}</h2>
                            <p> {project.description}</p>
                        </div>
                    </a>
                </Link>
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