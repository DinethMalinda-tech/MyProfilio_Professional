
import { useState } from "react";
import "./AndroidBadges.css";
import useScrollReveal from "../hooks/useScrollReveal";

interface Badge {
  id: number;
  title: string;
  image: string;
  description: string;
  link?: string;
}

interface AndroidBadgeCardProps {
  badge: Badge;
  onSelect: (badge: Badge) => void;
}

function AndroidBadgeCard({ badge, onSelect }: AndroidBadgeCardProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      className="android-badge-card scroll-reveal"
      onClick={() => onSelect(badge)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(badge);
        }
      }}
    >
      <div className="android-badge-image">
        <img src={badge.image} alt={badge.title} loading="lazy" />
      </div>

      <div className="android-badge-details">
        <h3>{badge.title}</h3>
        <span>Google Android</span>
      </div>

      <div className="android-badge-view">View Badge</div>
    </div>
  );
}

function AndroidBadges() {
  const [showAll, setShowAll] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const headerRevealRef = useScrollReveal<HTMLDivElement>();
  const toggleRevealRef = useScrollReveal<HTMLDivElement>();

  // Google Android Development Badges
  const badges: Badge[] = [
    {
      id: 1,
      title: "Views in Compose",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-8-pathway-2/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 2,
      title: "Android Views and Compose in Views",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-8-pathway-1/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 3,
      title: "Schedule tasks with WorkManager",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-7-pathway-1/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 4,
      title: "Store and access data using keys with DataStore",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-6-pathway-3/badge.svg",
        description: "Google Android Development Achievement",
    },

    {
      id: 5,
      title: "Use Room for data persistence",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-6-pathway-2/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 6,
      title: "Introduction to SQL",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-6-pathway-1/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 7,
      title: "Load and display images from the internet",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-5-pathway-2/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 8,
      title: "Get data from the internet",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-5-pathway-1/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 9,
      title: "Adaptive layouts",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-4-pathway-3/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 10,
      title: "Navigation in Jetpack Compose",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-4-pathway-2/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 11,
      title: "Architecture Components",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-4-pathway-1/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 12,
      title: "Add theme and animation",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-3-pathway-3/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 13,
      title: "Build a scrollable list",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-3-pathway-2/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 14,
      title: "More Kotlin fundamentals",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-3-pathway-1/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 15,
      title: "Interacting with UI and state",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-2-pathway-3/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 16,
      title: "Add a button to an app",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-2-pathway-2/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 17,
      title: "Kotlin Fundamentals",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-2-pathway-1/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 18,
      title: "Build a Basic Layout",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-1-pathway-3/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 19,
      title: "Introduction to programming in Kotlin",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/playlists/android/android-basics-compose-unit-1-pathway-1/badge.svg",
      description: "Google Android Development Achievement",
    },
    {
      id: 20,
      title: "Joined the Google Developer Program",
      image: "https://www.gstatic.com/googledevelopers/profile/badges/profile/created-profile/created_profile.svg",
      description: "Google Android Development Achievement",
    },

  ];

  const visibleBadges = showAll
    ? badges
    : badges.slice(0, 8);

  return (
    <section className="android-badges-section">

      {/* Section Heading */}
      <div
        ref={headerRevealRef}
        className="android-badges-header scroll-reveal"
      >

        <h2>Google Android Development</h2>

        <p>
          A collection of achievements earned through learning
          and developing Android applications.
        </p>

      </div>

      {/* Badge Grid */}
      <div className="android-badges-grid">

        {visibleBadges.map((badge) => (
          <AndroidBadgeCard
            badge={badge}
            onSelect={setSelectedBadge}
            key={badge.id}
          />
        ))}

      </div>

      {/* View More / Show Less */}
      {badges.length > 8 && (

        <div
          ref={toggleRevealRef}
          className="android-badges-footer scroll-reveal"
        >

          <span
            className="android-badges-toggle"
            onClick={() => setShowAll(!showAll)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setShowAll(!showAll);
              }
            }}
          >

            {showAll ? "Show Less" : "View More"}

            <span className="android-badges-arrow">
              {showAll ? "↑" : "→"}
            </span>

          </span>

        </div>

      )}

      {/* Badge Preview Modal */}
      {selectedBadge && (

        <div
          className="android-badge-modal"
          onClick={() => setSelectedBadge(null)}
        >

          <div
            className="android-badge-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="android-badge-close"
              onClick={() => setSelectedBadge(null)}
              aria-label="Close preview"
            >
              &times;
            </button>

            <img
              src={selectedBadge.image}
              alt={selectedBadge.title}
            />

            <h3>{selectedBadge.title}</h3>

            <p>{selectedBadge.description}</p>

            {selectedBadge.link && (
              <a
                href={selectedBadge.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify Achievement
              </a>
            )}

          </div>

        </div>

      )}

    </section>
  );
}

export default AndroidBadges;
