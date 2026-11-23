import { useEffect, useState } from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  img: string;
  name: string;
  description: string;
  link: string;
}

function ProjectCard({ img, name, description, link }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsExpanded(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isExpanded]);

  return (
    <>
      <article className="project-card">
      <button
        className="project-card__toggle"
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        <img className="project-card__image" src={img} alt={name} />
        <span className="project-card__content">
          <span className="project-card__name">{name}</span>
          <span className="project-card__description">{description}</span>
        </span>
      </button>
      </article>

      {isExpanded && (
        <div
          className="project-modal-overlay"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={name}
          >
            <img
              className="project-modal__image"
              src={img}
              alt={name}
            />
            <div className="project-modal__caption">
              <h3>{name}</h3>
              <p>{description}</p>
              <a
                className="project-card__link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
            </div>
            <button
              className="project-modal__close"
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-label="Close project"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
