
import ToolCard from "./ToolCard";
import "./SkillsSection.css";

function SkillsSection() {
  const tools = [
    { name: "Git", percentage: 90 },
    { name: "GitHub", percentage: 75 },
    { name: "Postman", percentage: 90 },
    { name: "VS Code", percentage: 85 },
    { name: "Android Studio", percentage: 70 },
  ];

  const frontEnd = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 90 },
    { name: "Angular", percentage: 75 },
    { name: "React", percentage: 90 },
  ];

  const backEnd = [
    { name: "Node.js", percentage: 90 },
    { name: "Express.js", percentage: 80 },
    { name: "REST API", percentage: 50 },
    { name: "Python", percentage: 30 },
  ];

  const android = [
    { name: "Java", percentage: 60 },
    { name: "Kotlin", percentage: 80 },
    { name: "Jetpack Compose", percentage: 80 },
    { name: "XML Layouts", percentage: 60 },
  ];

  const databases = [
    { name: "MySQL", percentage: 80 },
    { name: "SQLite", percentage: 90 },
    { name: "Database Design", percentage: 90 },
    { name: "Database Normalization", percentage: 80 },
    { name: "Database Indexing", percentage: 75 },
  ];

  return (
    <div className="skills-container">

      <ToolCard
        title="Front-End Development"
        skills={frontEnd}
      />

      <ToolCard
        title="Back-End Development"
        skills={backEnd}
      />

      <ToolCard
        title="Android Development"
        skills={android}
      />

      <ToolCard
        title="Database Skills"
        skills={databases}
      />

      <ToolCard
        title="Tools"
        skills={tools}
      />

    </div>
  );
}

export default SkillsSection;
