import useFetch from "./useFetch";
import ProjectList from "./ProjectPreview";

function Home() {
    const { error, isPending, data: projects } = useFetch('https://api.github.com/users/Megatank58/repos')
    return (
        <div>
            <h1 className="center link bold">My Projects</h1>
            {error && <div>{error}</div>}
            {isPending && <div className="center link bold">Loading...</div>}
            {projects && <ProjectList projects={projects} />}
        </div>
    )
}

export default Home;