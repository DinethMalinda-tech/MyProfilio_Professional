
import { useState } from "react";
import "./CertificateCard.css";

interface GalleryItem {
  title: string;
  description: string;
  imgSrc: string;
}

function CertificateCard() {
  const galleryItems: GalleryItem[] = [
    {
      title: "Web Design for Beginners",
      description:
        "Faculty of Information Technology, University of Moratuwa",
      imgSrc: "web-beginner.jpg",
    },
    {
      title: "Front-End Web Development",
      description:
        "Faculty of Information Technology, University of Moratuwa",
      imgSrc: "font-end.jpg",
    },
    {
      title: "Server Side Web Programming",
      description:
        "Faculty of Information Technology, University of Moratuwa",
      imgSrc: "Server-side.png",
    },
    {
      title: "Python for Beginners",
      description:
        "Department of Computer Science & Engineering, University of Moratuwa",
      imgSrc: "python-be.jpg",
    },
    {
      title: "Python Programming",
      description:
        "Department of Computer Science & Engineering, University of Moratuwa",
      imgSrc: "python-pro.jpg",
    },
  ];

  const [selectedItem, setSelectedItem] =
    useState<GalleryItem | null>(null);

  return (
    <section className="qualifications-section">

      {/* SECTION HEADER */}
      <div className="certificates-header">
        <h2>UOM Open Flatform</h2>

        <p>
          A collection of certifications and achievements earned
          through learning, practice, and professional development.
        </p>
      </div>

      {/* CERTIFICATE GALLERY */}
      <div className="gallery">
        {galleryItems.map((item, index) => (
          <div
            className="certificate-card"
            key={index}
            onClick={() => setSelectedItem(item)}
          >
            <div className="img-wrapper">
              <img
                src={item.imgSrc}
                alt={item.title}
                loading="lazy"
              />
            </div>

            <div className="card-content">
              <h3 className="card-title">
                {item.title}
              </h3>

              <p className="card-desc">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CERTIFICATE PREVIEW MODAL */}
      {selectedItem && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.imgSrc}
              alt={selectedItem.title}
            />

            <div className="modal-caption">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedItem(null)}
              aria-label="Close certificate"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

export default CertificateCard;
