import React from 'react';
import aboutImage from '../assets/about-image.png'; 
import featureImage1 from '../assets/about1.jpg'; 
import featureImage2 from '../assets/about2.jpg'; 
import featureImage3 from '../assets/about3.jpg'; 

export const About = () => {
  return (
    <div>
      <div className="about-page" style={{ marginBottom: '0px', marginTop: '20px' }}>
        <div className="about-content">
          <h1 className="about-heading">Discover the World with Wanderlust</h1>
          <p className="about-caption">Unveiling the Beauty of Global Destinations</p>
          <img src={aboutImage} alt="Wanderlust" className="about-image" />
          <div className="about-description">
            <p>At Wanderlust, we believe in the power of exploration and the allure of discovery. Our mission is to inspire and guide travelers to uncover the stunning aesthetic vibes that different parts of the world have to offer.
            From the vibrant streets of Tokyo to the serene landscapes of the Swiss Alps, from the bustling markets of Marrakech to the sun-kissed beaches of the Maldives, every corner of the globe holds its unique charm waiting to be explored.
            Join us on a journey to experience the world through a lens of wonder and adventure. Let Wanderlust be your companion as you embark on unforgettable trips, create lifelong memories, and find inspiration in the beauty of diverse cultures and landscapes.</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-heading">Explore Our Top Destinations</h2>
        <div className="feature-row">
          <img src={featureImage1} alt="Feature 1" className="feature-image" />
          <div className="feature-text">
            <h3>Stunning Landscapes</h3>
            <p>Experience breathtaking views of nature's most beautiful landscapes. From majestic mountains to serene lakes, our destinations offer unparalleled scenic beauty.</p>
          </div>
        </div>
        <div className="feature-row reverse">
          <div className="feature-text">
            <h3>Vibrant Cities</h3>
            <p>Immerse yourself in the energy of bustling cities. Explore diverse cultures, vibrant street life, and historical landmarks that tell the stories of their past.</p>
          </div>
          <img src={featureImage2} alt="Feature 2" className="feature-image" />
        </div>
        <div className="feature-row">
          <img src={featureImage3} alt="Feature 3" className="feature-image" />
          <div className="feature-text">
            <h3>Relaxing Beaches</h3>
            <p>Unwind on pristine beaches with golden sands and crystal-clear waters. Our beach destinations are perfect for a relaxing getaway or adventurous water sports.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

