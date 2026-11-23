import "./ServiceCard.css";
import useScrollReveal from "../hooks/useScrollReveal";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

function ServiceCard({ title, description, icon, }: ServiceCardProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      className="service-card scroll-reveal"
    >
      <div className="service-card__icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3 className="service-card__title">
        <a>{title}</a>
      </h3>
      <p className="service-card__description">{description}</p>
    </div>
  );
}

export default ServiceCard;