import ProjectStyles from "../styles/Project.module.css";

function Skills() {
    return (
<div className={ProjectStyles.preview}>
	    <h2 className={`${ProjectStyles.bold}`}>Skills</h2>
	    <p className={`${ProjectStyles.white}`}>
	    	<ul>
	    	    <li>Base language: <ul><li>JavaScript</li><li>TypeScript</li></ul></li>
	    	    <li>Other languages: <ul><li>Python</li><li>C</li><li>C++</li><li>Rust</li><li>GO</li></ul></li>
		    <li>Frontend:<ul> 
	    		<li>React/Next.js</li>
	    		<li>Vue</li></ul>
	    	    </li>
	    	    <li>Backend:<ul>
	    		<li>GO</li>
	    		<li>C++</li></ul>
		    </li>	
	    	</ul>
	    </p>
      </div>	  
    )
}
export default Skills;
