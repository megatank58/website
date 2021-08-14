import useFetch from "./useFetch";
import ProjectPreview from "./ProjectPreview";

function ProjectList() {
    const { error, isPending, data: projects } = useFetch('https://api.github.com/users/Megatank58/repos')
    return (
        <div>
            <h1 className="center white bold">My Projects</h1>
            {error && <div>{error}</div>}
            {isPending && <div className="center white bold">Loading...</div>}
            {projects && <ProjectPreview projects={projects} />}
        </div>
    )
}

export default ProjectList;