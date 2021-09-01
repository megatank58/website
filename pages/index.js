import ProjectStyles from "../styles/Project.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className={ProjectStyles.preview}>
      <Link href="/projects" passHref>
        <a className={`${ProjectStyles.white}`}>
          <h2 className={`${ProjectStyles.bold}`}>My Projects →</h2>
          <p>
            Projects on which im currently working on and contributing with
            GitHub
          </p>
        </a>
      </Link>
    </div>
  );
}
