import React, { useEffect, useState} from "react";
import "../styles/Home.css";
import image from "../assets/Cr-1.jpg";
import course from "../assets/course.jpg";
import ravi from "../assets/family.jpg";
import video from "../assets/play.mov";
import { LuShoppingCart } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiPieChartAlt2 } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { PiShieldWarningFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // This ensures the Elfsight script initializes after the component mounts
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="homeContainer">
      <div className="imageContainer">
        <img src={image} alt="Actual Size" className="actualSizeImage" />
        {/* ValueInsight */}
        <h1 className="headingOnImage">Transform Your Life with Vision</h1>
        <p>
          Unlock your true potential and secure your financial future with Dr.
          Ravi Shankar's expert guidance.
        </p>
        <button>Begin Your Transformation</button>
      </div>
      <h1 className="headingText">Courses</h1>
      <div className="coursesContainer">
        <div className="courseDiv">
          <img src={course} alt="course image" className="courseImage" />
          <h2>The 21-Day Success Blueprint Free</h2>
          <hr />
          <div className="bottomOfCourse">
            <p>₹2,100.00</p>
            <button>
              <LuShoppingCart
                color="white"
                size={16}
                style={{ marginRight: 5 }}
              />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <p className="serviceHeading">Services</p>
      <div className="serviceHeadingContainer">
        <h1>To meet your needs</h1>
        <p>
          Comprehensive Solutions for Holistic Growth and Financial Well-Being
        </p>
      </div>
      <div className="serviceMainContainer">
        <div className="serviceContainer">
          <h1>Training</h1>
          <div className="serviceOptions">
            <div className="servicesDiv">
              <FaUserGraduate color="white" size={40} />
              <h3>Students</h3>
              <p>
                Empower students with essential life skills, including stress
                management, communication, and career planning, to foster
                personal growth and academic success.
              </p>
            </div>
            <div className="servicesDiv">
              <FaUserTie color="white" size={40} />
              <h3>Professionals</h3>
              <p>
                Enhance professional development through tailored training in
                vision setting, personal balance, and stress management for a
                successful career.
              </p>
            </div>
            <div className="servicesDiv">
              <FaUsers color="white" size={40} />
              <h3>Corporate</h3>
              <p>
                Drive corporate excellence with programs focused on peak
                potential, effective communication, and smart working strategies
                to optimize organizational performance.
              </p>
            </div>
          </div>
        </div>
        <div className="serviceContainer">
          <h1>Personality Development</h1>
          <div className="serviceOptions">
            <div className="servicesDiv">
              <GoGraph color="white" size={40} />
              <h3>DMIT</h3>
              <p>
                Unlock individual potential through scientific analysis of
                fingerprint patterns, providing insights into unique
                intellectual strengths and learning styles.
              </p>
            </div>
            <div className="servicesDiv">
              <BiPieChartAlt2 color="white" size={40} />
              <h3>Midbrain Activation</h3>
              <p>
                Enhance cognitive abilities and memory with specialized training
                designed to activate and optimize the brains mid-region for
                improved mental performance.
              </p>
            </div>
            <div className="servicesDiv">
              <PiShieldWarningFill color="white" size={40} />
              <h3>Law of Attraction</h3>
              <p>
                Harness the power of positive thinking and visualization
                techniques to attract desired outcomes and achieve personal and
                professional goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="industriesContainer">
        <div>
          <p>Industries</p>
        </div>
        <div>
          <ul>
            <li>Financial Services</li>
            <li>Financial Institutions</li>
            <li>Healthcare & Pharmaceuticals</li>
            <li>Education</li>
            <li> Medical Devices & Technology</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Retail & E-commerce</li>
            <li>Energy and Utilities</li>
            <li>Hospitality and Tourism</li>
            <li>Automotive & Transportation</li>
          </ul>
        </div>
      </div>

      <div className="tagLineheading">
        <h1>BUILDING WEALTH, CREATING FUTURES.</h1>
      </div>
      <div className="aboutRavi">
        <div className="raviPoster">
          <img src={ravi} alt="ravishankar" />
        </div>
        <div className="raviShankarInfo">
          <h2>Dr. Ravi Shankar</h2>
          <p>
            Dr. Ravi Shankar is a beacon of knowledge and experience,
            transitioning from a distinguished career in public service to a
            passionate mentor and coach. His journey reflects a commitment to
            personal growth and societal betterment.
          </p>
          <p>
            Through Life Signify, he extends his wisdom to others, guiding them
            toward self-awareness and fulfillment. His holistic approach to life
            coaching empowers individuals to unlock their full potential and
            embrace a life of purpose.
          </p>
          <p className="raviQualification">
            A banker, a police officer, a PCS officer, an IAS officer, a sports
            person, a pistol shooter, an NLP coach, a motivational speaker, and
            now a life coach transforming the younger generation to their
            betterment.
          </p>
          <button>Learn More about Dr. Ravi Shankar</button>
        </div>
      </div>

      <div className="sampleVideo">
        <video src={video} autoPlay muted loop playsInline />
      </div>

      <h1 className="checkoutVideoHeading">Checkout our videos</h1>

      <div className="youtubeVideoCarousel">
        <div className="elfsight-app-8d346e41-e9d9-4cee-afbc-8504bb90aade" />
      </div>
    </div>
  );
};

export default Home;
