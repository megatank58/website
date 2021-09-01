import Link from 'next/link';
import ProjectStyles from '../../styles/Project.module.css'

function Project({ projects }) {
    return (
        <div className={ProjectStyles.list}>
            {projects.map(project => (
                <div className={ProjectStyles.preview} key={project.name} >
                    <Link href={`/projects/${project.name}`} passHref>
                        <a className={`${ProjectStyles.white} ${ProjectStyles.bold}`}>
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