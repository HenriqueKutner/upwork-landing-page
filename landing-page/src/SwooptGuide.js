import React, { useState } from 'react';
import './SwooptGuide.css';
import mobile from './mobile.png';

// Extract reusable components
const CompanyHeader = () => (
  <div className="company-header">
    <div className="company-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6H17.82C17.93 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4L11.5 3.34C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6C14.45 6 14 5.55 14 5C14 4.45 14.45 4 15 4ZM9 4C9.55 4 10 4.45 10 5C10 5.55 9.55 6 9 6C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4ZM20 19H4V17H20V19ZM20 14H4V8H9.08L7 10.83L8.62 12L11 8.76L12 7.4L13 8.76L15.38 12L17 10.83L14.92 8H20V14Z" fill="#0066cc"/>
      </svg>
    </div>
    <span className="company-name">Swoopt</span>
  </div>
);

const Navigation = ({ prevSlide, nextSlide, showNext = true, showBack = true }) => (
  <div className="navigation">
    {showBack && <button className="back-btn" onClick={prevSlide}>&#60; TILLBAKA</button>}
    {showNext && <button className="next-btn" onClick={nextSlide}>NÄSTA &#62;</button>}
  </div>
);

function SwooptGuide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;
  
  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };
  
  const resetGuide = () => {
    setCurrentSlide(0);
  };

  // Slide content mapping
  const slideContent = [
    // Slide 0: Intro
    <div className="slide intro" key="intro">
      <CompanyHeader />
      <div className="content">
        <h1 className="welcome">VÄLKOMMEN!</h1>
        <p className="intro-text">In the next 5 minutes, you will learn everything you need to become a guru with Swoopt!</p>
        <button className="start-btn" onClick={nextSlide}>KÖR!</button>
      </div>
    </div>,
    
    // Slide 1: Download App
    <div className="slide" key="download">
      <div className="wrap-slide">
        <h2 className="slide-title">DOWNLOAD THE SWOOPT APP</h2>
        <CompanyHeader />
        <div className="step-content">
          <ol>
            <li>Open the App Store on your mobile phone</li>
            <div className="app-store-buttons">
              <button className="app-btn">Android</button>
              <button className="app-btn">iPhone</button>
            </div>
            <li className="test">Search for the "Swoopt" App</li>
            <li>Download the Swoopt App to your mobile phone</li>
          </ol>
        </div>
        <Navigation prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    </div>,
    
    // Slide 2: Register
    <div className="slide" key="register">
      <div className="wrap-slide">
        <h2 className="slide-title">REGISTER IN THE SWOOPT APP</h2>
        <CompanyHeader />
        <div className="step-content">  
          <ol>
            <div>
              <li>On your mobile phone, launch the Swoopt App</li>
              <div className="register-logo">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6H17.82C17.93 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4L11.5 3.34C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6C14.45 6 14 5.55 14 5C14 4.45 14.45 4 15 4ZM9 4C9.55 4 10 4.45 10 5C10 5.55 9.55 6 9 6C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4ZM20 19H4V17H20V19ZM20 14H4V8H9.08L7 10.83L8.62 12L11 8.76L12 7.4L13 8.76L15.38 12L17 10.83L14.92 8H20V14Z" fill="#0066cc"/>
                </svg>
                <p>Swoopt</p>
              </div>
            </div>
            <li>Rego process to update here...</li>
            <li>TBC...</li>
          </ol>
        </div>
        <Navigation prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    </div>,
    
    // Slide 3: Check Business Profile
    <div className="slide" key="profile">
      <div className="wrap-slide">
        <h2 className="slide-title">CHECK "MY BUSINESS PROFILE"</h2>
        <CompanyHeader />
        <div className="step-content">
          <ol>
            <li>In the top-right corner, tap on "Settings"</li>
            <div className="register-logo">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6H17.82C17.93 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4L11.5 3.34C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6C14.45 6 14 5.55 14 5C14 4.45 14.45 4 15 4ZM9 4C9.55 4 10 4.45 10 5C10 5.55 9.55 6 9 6C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4ZM20 19H4V17H20V19ZM20 14H4V8H9.08L7 10.83L8.62 12L11 8.76L12 7.4L13 8.76L15.38 12L17 10.83L14.92 8H20V14Z" fill="#0066cc"/>
              </svg>
            </div>
            <li>Confirm that all of your businesses are displaying</li>
            <li>If one or more of your businesses is not displaying, email us at info@swoopt.app</li>
          </ol>
        </div>
        <Navigation prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    </div>,
    
    // Slide 4: Create Offers
    <div className="slide" key="offers">
      <div className="wrap-slide">
        <h2 className="slide-title">CREATE YOUR FIRST OFFER(S)</h2>
        <CompanyHeader />
        <div className="step-content">
          <ol>
            <li>In Settings, tap on "MY MARKETING"</li>
            <li>Tap on "+ Create New"</li>
            <li>Fill in the required fields (see tips below):</li>
            <div className="fields-list">
              <p>Heading:</p>
              <p>Sub-heading:</p>
              <p>Villkor:</p>
              <p>Inlösningar:</p>
              <p>Est. Savings:</p>
              <p>Startdatum:</p>
              <p>Utgångsdatum:</p>
              <p>Streckkod:</p>
            </div>
            <li>If you have more than one launch offer, follow the steps above for each offer</li>
          </ol>
          <div className="mobile-container">
            <img src={mobile} alt="Mobile app screenshot" />
          </div>
        </div>
        <Navigation prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    </div>,
    
    // Slide 5: Statistics
    <div className="slide" key="statistics">
      <div className="wrap-slide">
        <h2 className="slide-title">MY STATISTICS (EXPLAINED)</h2>
        <CompanyHeader />
        <div className="step-content">
          <ol>
            <li>In Settings, tap on "MY STATISTICS"</li>
            <li>Fill in the required fields (see tips below):</li>
            <li>If you have more than one launch offer, follow the steps above for each offer</li>
          </ol>
          <div className="mobile-container">
            <img src={mobile} alt="Mobile app statistics" />
          </div>
        </div>
        <Navigation prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    </div>,
    
    // Slide 6: Congratulations
    <div className="slide" key="congrats">
      <div className="wrap-slide">
        <div className="congrats-section">
          <p>Now you are ready to grow your business with Swoopt!</p>
          <h1 className="congrats">GRATTIS!</h1>
          <button className="ok-btn" onClick={resetGuide}>OK</button>
        </div>
      </div>
    </div>
  ];
  
  return (
    <div className="swoopt-guide">
      <div className="slides-container">
        {slideContent[currentSlide]}
      </div>
    </div>
  );
}

export default SwooptGuide;