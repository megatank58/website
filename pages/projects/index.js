import Link from 'next/link';
import ForkLogo from '../../components/ForkLogo';
import ProjectStyles from '../../styles/Project.module.css'

function Project({ projects }) {
    return (
        <div className={ProjectStyles.list}>
            {projects.map(project => (
				<div className={ProjectStyles.preview} key={project.name}>
						<Link href={`/projects/${project.name}`} passHref>
							<a className={`${ProjectStyles.white} ${ProjectStyles.bold}`}>
								<h2>{`${project.full_name} `}{project.fork ? <ForkLogo />: ""}</h2>
							</a>
						</Link>
					<p className={`${ProjectStyles.white}`}>{project.description}</p>
                    <p className={`${ProjectStyles.white}`}> 
                    {project.language ? ` ${project.language} ` : ""}
                    {project.license ? project.license.key.toUpperCase() : ""}</p>
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
