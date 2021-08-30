import LinkLogo from "../../components/LinkLogo";

export default function ProjectDetails({ projects }) {
    return (
        <div className="project-details">
            {projects && (
                <div className="project-list">
                    <article className="project-preview">
                        <h2 className="white bold">{projects.name}</h2>
                        <div className="white bold">{projects.description}</div>
                        <div className="bold" style={{ color: "#444", marginTop: "10px" }}>
                            Created: {new Date(projects.created_at).getDate() + '/' + (new Date(projects.created_at).getMonth() + 1) + '/' + new Date(projects.created_at).getFullYear()}
                            <a href={'https://github.com/Megatank58/' + projects.name} className="white bold" style={{ float: "right" }}>View<LinkLogo /></a>
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