import ProjectStyles from "../styles/Project.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className={ProjectStyles.preview}>
      <Link href="/projects" passHref>
        <a className={`${ProjectStyles.white}`}>
          <h2 className={`${ProjectStyles.bold}`}>My Projects →</h2>
          <p>
            Projects on which im currently working on and contributing with
            GitHub...
          </p>
        </a>
      </Link>
    </div>
    <div className={ProjectStyles.preview}>
      <Link href="/skills" passHref>
        <a className={`${ProjectStyles.white}`}>
          <h2 className={`${ProjectStyles.bold}`}>My Skills →</h2>
          <p>
	     The languages that I'm currently learning and using in everyday projects...
          </p>
        </a>
      </Link>
    </div>
    <div className={ProjectStyles.preview}>
      <Link href="/aboutme" passHref>
        <a className={`${ProjectStyles.white}`}>
          <h2 className={`${ProjectStyles.bold}`}>About me →</h2>
          <p>
	     Learn more about me and ways to contact me for queries...
          </p>
        </a>
      </Link>
    </div>
    </>
  );
}
