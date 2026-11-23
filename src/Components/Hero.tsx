
import "./Hero.css";
import { buildWhatsAppLink } from "../utils/whatsapp";
import useScrollReveal from "../hooks/useScrollReveal";

function HeroSection() {
  const revealRef = useScrollReveal<HTMLElement>();

  const whatsappLink: string = buildWhatsAppLink(
    "Hi Dineth, I visited your portfolio and would like to discuss a project opportunity."
  );

  return (
    <section
      id="about"
      ref={revealRef}
      className="hero scroll-reveal"
    >

      {/* Animated background layers */}
      <div className="hero__bg">
        <div className="hero__orb orb-1"></div>
        <div className="hero__orb orb-2"></div>
        <div className="hero__orb orb-3"></div>
        <div className="hero__grid"></div>
        <div className="hero__noise"></div>
      </div>

      {/* Main content */}
      <div className="hero__content">

        {/* Left text area */}
        <div className="hero__text">

          <span className="hero__greeting">
            ✦ Full-stack developer
          </span>

          <span className="hero__greeting">
            ✦ Android Developer
          </span>

          <h1 className="hero__title">
            Building{" "}
            <span className="hero__title--gradient">
              digital experiences
            </span>{" "}
            that matter.
          </h1>

          <p className="hero__description">
            I'm a full-stack developer passionate about building
            innovative digital solutions. From intuitive user
            interfaces to powerful backend systems, I turn
            complex problems into elegant solutions.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="hero__actions">

            {/* Hire Me — WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--primary"
            >
              <i className="fas fa-briefcase"></i>
              <span>Hire Me</span>
              <i className="fas fa-arrow-right hero__btn-arrow"></i>
            </a>

            {/* Contact Me — In-page navigation */}
            <a
              href="#contact"
              className="hero__btn hero__btn--secondary"
            >
              <i className="fas fa-comment-dots"></i>
              <span>Contact Me</span>
            </a>

          </div>

        </div>

        {/* Right image */}
        <div className="hero__image-wrapper">

          <div className="hero__image-ring">

            <div className="hero__image-glow"></div>

            <img
              className="hero__image"
              src="Profile.jpg"
              alt="Developer portrait"
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;
