import React from "react";

const NewsletterSection = () => {
  return (
    <div className="newsletter-section-wrapper">
      <div className="newsletter-section-content">
        <div className="newsletter-section-title">
          <span>Grab Our</span>
          <span>Newsletter</span>
        </div>
        <div className="newsletter-section-description">
          To receive latest offers and discounts from the shop
        </div>
        <div className="newsletter-section-form">
          <input type="email" placeholder="Enter your email adress" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="newsletter-section-banner">
        <img src="/images/newsletter-banner.png" alt="" srcSet="" />
      </div>
    </div>
  );
};

export default NewsletterSection;
