import React from "react";
import { Helmet } from "react-helmet";
import "./ChromeExtensionPage.css";

const ChromeExtensionPage = () => {
  return (
    <>
      <Helmet>
        <title>
          FetLife Availability Badge - Instantly See Who's Available on FetLife!
        </title>
        <meta
          name="description"
          content="Boost your FetLife experience with the FetLife Availability Badge! Instantly see who's available and ready to chat with our seamless Chrome extension. Secure, fast, and easy to install!"
        />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="FetLife Availability Badge - Instantly See Who's Available on FetLife!"
        />
        <meta
          property="og:description"
          content="Boost your FetLife experience with our Chrome extension that shows real-time availability on FetLife profiles."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/path-to-og-image.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FetLife Availability Badge - Instantly See Who's Available on FetLife!"
        />
        <meta
          name="twitter:description"
          content="Boost your FetLife experience with our Chrome extension that shows real-time availability on FetLife profiles."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/path-to-twitter-image.jpg"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data for FAQ SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the FetLife Availability Badge?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The FetLife Availability Badge is a Chrome Extension that lets users see real-time availability on FetLife profiles.",
                },
              },
              {
                "@type": "Question",
                name: "How do I install the extension?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can install it from the Chrome Web Store in one click. No setup is required!",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1>
              FetLife Availability Badge - Chrome Extension for Instant
              Connections
            </h1>
            <p className="subtitle">
              Enhance your FetLife experience with our seamlessly integrated
              Chrome Extension.
            </p>

            <img
              src="fetlife-availability-badge-preview.png"
              alt="FetLife Availability Badge - See who’s online instantly"
              className="preview-image"
            />

            <div style={{ marginTop: "3rem" }}>
              <a
                href="https://chromewebstore.google.com/detail/fetlife-availability-badg/nfndadpoffakgdfjapndhelcpbllhand"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Get the FetLife Availability Badge!
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2
              className="feature-title"
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                marginBottom: "2rem",
              }}
            >
              Why Choose the FetLife Availability Badge?
            </h2>

            <div className="features-grid">
              <div className="feature-card">
                <h3 className="feature-title">Real-Time Availability</h3>
                <p>
                  See availability badges instantly as you browse profiles and
                  feeds, helping you connect at the right moment.
                </p>
              </div>

              <div className="feature-card">
                <h3 className="feature-title">Seamless Integration</h3>
                <p>
                  Perfectly integrated with FetLife's design, providing a
                  natural and enhanced browsing experience.
                </p>
              </div>

              <div className="feature-card">
                <h3 className="feature-title">Easy Installation</h3>
                <p>
                  One-click setup from the Chrome Web Store gets you started in
                  seconds, no technical expertise needed.
                </p>
              </div>

              <div className="feature-card">
                <h3 className="feature-title">Privacy Focused</h3>
                <p>
                  100% secure with no data tracking or storage, ensuring your
                  privacy remains protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
              <h3>What is the FetLife Availability Badge?</h3>
              <p>
                The FetLife Availability Badge is a Chrome Extension that lets
                users see real-time availability on FetLife profiles.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I install the extension?</h3>
              <p>
                You can install it from the{" "}
                <a
                  href="https://chromewebstore.google.com/detail/fetlife-availability-badg/nfndadpoffakgdfjapndhelcpbllhand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chrome Web Store
                </a>{" "}
                in one click. No setup is required!
              </p>
            </div>

            <div className="faq-item">
              <h3>Is my data secure?</h3>
              <p>
                Yes! The extension does not store, track, or share any user
                data. Your privacy is our top priority.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="container">
            <p>
              © {new Date().getFullYear()} FetLife Availability Badge. All
              rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default ChromeExtensionPage;
