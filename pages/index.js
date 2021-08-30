import Link from "next/link";

export default function Home() {
  return (
    <div className="project-preview">
      <Link href="/projects" className="white bold link" passHref>
        <a>
          <h2>My Projects →</h2>
          <p>
            Projects on which im currently working on and contributing with
            GitHub
          </p>
        </a>
      </Link>
    </div>
  );
}
