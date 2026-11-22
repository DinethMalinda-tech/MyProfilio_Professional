import ServiceCard from "./ServiceCard";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="services__container">
        <ServiceCard
          title="Web Development"
          description="Building modern, responsive and powerful websites using the latest technologies."
          icon="web.jpeg"
          link="/web-development"
        />
        <ServiceCard
          title="Android Development"
          description="Creating powerful Android applications with modern design and reliable performance."
          icon="android.jpeg"
          link="/android-development"
        />
        <ServiceCard
          title="UI/UX Design"
          description="Designing intuitive and attractive user experiences for digital products."
          icon="ui.jpeg"
          link="/ui-ux-design"
        />
      </div>
    </section>
  );
}

export default Services;