import ProjectStyles from "../styles/Project.module.css";

function AboutMe() {
    return (
<div className={ProjectStyles.preview}>
	    <h2 className={`${ProjectStyles.bold}`}>About me</h2>
	    <p className={`${ProjectStyles.white}`}>
		You can contact me using
	    </p>
	    <ul>
	    	<li className={`${ProjectStyles.bold} ${ProjectStyles.white}`}> Discord: Megatank#6491 </li>
	    	<li className={`${ProjectStyles.bold} ${ProjectStyles.white}`}> Twitter: @Megatank58 </li>
	    	<li className={`${ProjectStyles.bold} ${ProjectStyles.white}`}> Email: dev@megatank58.me </li>
	    </ul>
      </div>	  
    )
}
export default AboutMe;
