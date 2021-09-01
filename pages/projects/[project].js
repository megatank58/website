import LinkLogo from "../../components/LinkLogo";
import ProjectStyles from "../../styles/Project.module.css"

export default function ProjectDetails({ projects }) {
    return (
        <div className={ProjectStyles.details}>
            {projects && (
                <div className={ProjectStyles.list}>
                    <article className={ProjectStyles.preview}>
                        <h2 className={`${ProjectStyles.white} ${ProjectStyles.bold}`}>{projects.name}</h2>
                        <div className={`${ProjectStyles.white}`}>{projects.description}</div>
                        <div className="bold" style={{ color: "#444", marginTop: "10px" }}>
                            Created: {new Date(projects.created_at).getDate() + '/' + (new Date(projects.created_at).getMonth() + 1) + '/' + new Date(projects.created_at).getFullYear()}
                            <a href={'https://github.com/Megatank58/' + projects.name} className={`${ProjectStyles.white}`} style={{ float: "right" }}>View<LinkLogo /></a>
                        </div>
                    </article>
                </div>
            )}
        </div>
    );
}

export async function getStaticProps(context) {
    const { project } = context.params;

    const res = await fetch('https://api.github.com/repos/Megatank58/' + project);
    const projects = await res.json();
    return {
        props: {
            projects
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking"
    }
}