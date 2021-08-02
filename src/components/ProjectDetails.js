import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function ProjectDetails() {
    const { id } = useParams();
    const { data: projects, error, isPending } = useFetch('https://api.github.com/repos/Megatank58/' + id);


    return (
        <div className="project-details">
            {isPending && <div className="center link bold">Loading...</div>}
            {error && <div>{error}</div>}
            {projects && (
                <div className="project-list">
                    <article className="project-preview">
                        <h2 className="link bold">{projects.name}
                            <a href={'https://github.com/Megatank58/' + projects.name} className="bold" style={{
                                color: 'white',
                                backgroundColor: '#35acf1',
                                marginLeft: "75%",
                                alignContent: 'auto',
                                borderRadius: '8px'
                            }}>View
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" className="icon outbound">
                                    <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                                    </path>
                                    <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                                    </polygon>
                                </svg>
                            </a>
                        </h2>
                        <div className="link bold">{projects.description}</div>
                        <div className="bold" style={{color: "#444", marginTop: "10px"}}>Created: {new Date(projects.created_at).getDate() + '/' + (new Date(projects.created_at).getMonth()+1) + '/' + new Date(projects.created_at).getFullYear()}</div>
                    </article>
                </div>
            )}
        </div>
    );
}

export default ProjectDetails;