import { unified } from 'unified';
import { createElement } from 'react';
import parse from 'remark-parse';
import rehypePrism from "@mapbox/rehype-prism";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import LinkLogo from "../../components/LinkLogo";
import ProjectStyles from "../../styles/Project.module.css"

const parser = unified()
    .use(parse)
    .use(remark2rehype)
    .use(rehypePrism)
    .use(rehype2react, { createElement: createElement })

export default function ProjectDetails({ projects }) {
    return (
        <div className={ProjectStyles.details}>
            {projects && (
                <div className={ProjectStyles.list}>
                    <article className={ProjectStyles.preview}>
                        <div className={`${ProjectStyles.white} ${ProjectStyles.readme}`}>
                            {parser.processSync(projects.readme).result}
                        </div>
                        <div className={`${ProjectStyles.white}`} style={{ color: "#444", marginTop: "10px" }}>
                            <span className={`${ProjectStyles.white}`}>Created: {new Date(projects.created_at).getDate() + '/' + (new Date(projects.created_at).getMonth() + 1) + '/' + new Date(projects.created_at).getFullYear()}</span>
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

    projects.readme = await (await fetch('https://raw.githubusercontent.com/Megatank58/' + project + '/main/README.md')).text()

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