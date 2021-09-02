import Link from 'next/link';
import ProjectStyles from '../../styles/Project.module.css'

function Project({ projects }) {
    return (
        <div className={ProjectStyles.list}>
            {projects.map(project => (
				<div className={ProjectStyles.preview} key={project.name}>
					<h2>
						<Link href={`/projects/${project.name}`} passHref>
							<a className={`${ProjectStyles.white} ${ProjectStyles.bold}`}>
								{project.name}
							</a>
						</Link>
					</h2>
					<p>{project.description}</p>
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
