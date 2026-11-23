import "./Hero.css"

function HeroSection() {
  return (
    <section id="about" className="hero">

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

          <div className="hero__meta">
            <span>
              <i className="fas fa-code"></i> Full-stack
            </span>

            <span>
              <i className="fas fa-rocket"></i> Problem solver
            </span>

            <span>
              <i className="fas fa-globe"></i> Tech enthusiast
            </span>
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
