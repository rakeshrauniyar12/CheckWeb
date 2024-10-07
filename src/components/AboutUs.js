import React from "react";
import "../styles/AboutUs.css";
import video from "../assets/play.mov";
import Courses from "./Courses";

const AboutUs = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <div className="aboutHeaderTop">
          <div className="rectangle"></div>
          <p>About</p>
        </div>
        <div className="aboutHeaderBottom">
          <h1>Shaping Brighter Futures: Welcome to Life Signify</h1>
        </div>
      </div>
      <div className="aboutInfo">
        <p>
          Life Signify, founded by Dr. Ravi Shankar, stands as a beacon of
          guidance for those seeking personal and professional growth. It's a
          platform where transformative journeys begin, led by Dr. Gupta's vast
          experience and deep understanding of life's complexities.
        </p>
        <p>
          Here, individuals are encouraged to explore their capabilities,
          overcome challenges, and achieve their fullest potential. Life Signify
          offers tailored coaching and workshops designed to ignite
          self-discovery, resilience, and purposeful living.
        </p>
      </div>
      <div className="sampleVideo">
        <video src={video} autoPlay muted loop playsInline />
      </div>

      <div className="ourPurposeHeading">
        <div className="rectangle"></div>
        <p>Our purpose</p>
      </div>

      <div className="ourPurposeContainer">
        <div className="purposeItem">
          <p className="heading">Inspiring Change</p>
          <p className="description">
            Empowering individuals to embrace personal growth and navigate
            life's challenges with resilience and confidence.
          </p>
        </div>
        <div className="purposeItem">
          <p className="heading">Holistic Development</p>
          <p className="description">
            Fostering a well-rounded approach to self-improvement, encompassing
            mental, emotional, and spiritual growth.
          </p>
        </div>
        <div className="purposeItem">
          <p className="heading">Empowering Voices</p>
          <p className="description">
            Encouraging authentic expression and effective communication to
            build stronger relationships and communities.
          </p>
        </div>
        <div className="purposeItem">
          <p className="heading">Unlocking Potential</p>
          <p className="description">
            Guiding people to discover and harness their innate talents and
            abilities for a fulfilling life.
          </p>
        </div>
        <div className="purposeItem">
          <p className="heading">Cultivating Harmony</p>
          <p className="description">
            Promoting balance and peace within oneself and in interactions with
            the world, leading to a more meaningful existence.
          </p>
        </div>
      </div>

      <div className="ourPurposeHeading">
        <div className="rectangle"></div>
        <p>Our Courses</p>
      </div>
      <Courses />
    </div>
  );
};

export default AboutUs;
