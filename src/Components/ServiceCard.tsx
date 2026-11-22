import "./ServiceCard.css";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

function ServiceCard({ title, description, icon, }: ServiceCardProps) {
  return (
    <div className="service-card">
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