import Link from 'next/link';
import CircleLogo from '../../images/CircleLogo';
import ForkLogo from '../../images//ForkLogo';
import ProjectStyles from '../../styles/Project.module.css'

function Project({ projectJson, colorJson }) {
    return (
        <div className={ProjectStyles.list}>
            {projectJson.map(project => (
				<div className={ProjectStyles.preview} key={project.name}>
						<Link href={`/projects/${project.name}`} passHref>
							<a className={`${ProjectStyles.white} ${ProjectStyles.bold}`}>
								<h2>{`${project.full_name} `}{project.fork ? <ForkLogo />: ""}</h2>
							</a>
						</Link>
					<p className={`${ProjectStyles.white}`} style={{ margin: "0px" }}>{project.description}</p>
                    <p className={`${ProjectStyles.white}`} style={{ marginTop: "5px" }}> 
                    {colorJson[project.language]?.color ? <CircleLogo color={colorJson[project.language].color} text={project.language}/>  : ""}
                    {project.license ? project.license.key.toUpperCase() : ""}</p>
				</div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const [projectRes, colorRes] = await Promise.all([
        await fetch('https://api.github.com/users/megatank58/repos'),
        await fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'),
    ])

    const [projectJson, colorJson] = await Promise.all([
        await projectRes.json(),
        await colorRes.json()
    ])
    
    return {
        props: {
            projectJson,
            colorJson
        }
    }
}

export default Project;
