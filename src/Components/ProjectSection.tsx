
import "./ProjectSection.css";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <div className="Project-container">
      <ProjectCard
        img="csm (1).png"
        name="Classroom Student Manager"
        description="LMS system for small classes. It allows teachers to manage students' attendance, assignments, and grades."
        link="https://dinethmalinda-tech.github.io/csm-web-page/"
      />

       <ProjectCard
        img="csmweb.png"
        name="CSM Web Page"
        description="Web page for Classroom Student Manager. It provides information about the project, its features, and how to use it."
        link="https://dinethmalinda-tech.github.io/csm-web-page/"
      />

    </div>
  );
}

export default ProjectSection;
