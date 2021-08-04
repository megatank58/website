import { useParams } from "react-router-dom";
import LinkLogo from "./LinkLogo";
import useFetch from "./useFetch";

function ProjectDetails() {
    const { id } = useParams();
    const { data: projects, error, isPending } = useFetch('https://api.github.com/repos/Megatank58/' + id);

    return (
        <div className="project-details">
            {isPending && <div className="center white bold">Loading...</div>}
            {error && <div>{error}</div>}
            {projects && (
                <div className="project-list">
                    <article className="project-preview">
                        <h2 className="white bold">{projects.name}</h2>
                        <div className="white bold">{projects.description}</div>
                        <div className="bold" style={{ color: "#444", marginTop: "10px" }}>
                            Created: {new Date(projects.created_at).getDate() + '/' + (new Date(projects.created_at).getMonth() + 1) + '/' + new Date(projects.created_at).getFullYear()}
                            <a href={'https://github.com/Megatank58/' + id} className="white bold" style={{ float: "right" }}>View<LinkLogo /></a>
                        </div>
                    </article>
                </div>
            )}
        </div>
    );
}

export default ProjectDetails;