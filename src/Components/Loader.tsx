import { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const finish = () => {
      // small delay so it feels intentional, not flickery
      setTimeout(() => setHidden(true), 600);
      // fully remove from DOM after fade completes
      setTimeout(() => setGone(true), 1400);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${hidden ? "loader--hidden" : ""}`}>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb orb-1"></div>
        <div className="hero__orb orb-2"></div>
        <div className="hero__orb orb-3"></div>
        <div className="hero__grid"></div>
        <div className="hero__noise"></div>
      </div>
      <div className="loader-inner">
        <span className="hero__greeting">Full-stack &amp; Android developer</span>
        <h1 className="loader-title">
          Building <span className="hero__title--gradient">digital experiences</span>
        </h1>
        <div className="loader-bar">
          <span className="loader-bar-fill"></span>
        </div>
        <div className="loader-text">Loading portfolio</div>
      </div>
    </div>
  );
};

export default Loader;