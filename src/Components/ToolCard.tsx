import "./ToolCard.css";
import useScrollReveal from "../hooks/useScrollReveal";

interface Skill {
  name: string;
  percentage: number;
}

interface ToolCardProps {
  title?: string;
  skills: Skill[];
  height?: string; // optional override; by default the card sizes itself
  width?: string;  // optional override; by default the card is flexible
}

function ToolCard({ title = "💻 Tools", skills, height, width }: ToolCardProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  // Only apply inline sizes if the caller really asks for them
  const style: React.CSSProperties = {};
  if (height) style.height = height;
  if (width) {
    style.width = width;
    style.flex = "0 0 auto";
  }

  return (
    <div
      ref={revealRef}
      className="tool-card scroll-reveal"
      style={style}
    >
      <h2>{title}</h2>

      <div className="tool-card__skills">
        {skills.map((skill) => {
          const percentage = Math.min(100, Math.max(0, skill.percentage));

          return (
            <div className="tool-card__skill" key={skill.name}>
              <div className="tool-card__skill-info">
                <span>{skill.name}</span>
                <span>{percentage}%</span>
              </div>

              <div
                className="tool-card__progress"
                role="progressbar"
                aria-label={skill.name}
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="tool-card__progress-fill"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToolCard;
