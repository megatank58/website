import ProjectStyles from "../styles/Project.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className={ProjectStyles.preview}>
      <Link href="/projects" passHref>
        <a>
          <h2 className={`${ProjectStyles.white} ${ProjectStyles.bold}`}>My Projects →</h2>
          <p>
            Projects on which im currently working on and contributing with
            GitHub
          </p>
        </a>
      </Link>
    </div>
  );
}
