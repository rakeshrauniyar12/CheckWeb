import React from "react";
import "../styles/HooponoponoPowerWebinar.css";
import hooponopono from "../assets/hooponopono.jpg";
import check from "../assets/check.png";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const HooponoponoPowerWebinar = () => {
  const studentItems = [
    "Accept Yourself",
    "Stress and Anger Management",
    "Get Rid of Fear",
    "Being Social",
    "Make Learning Your Habit",
    "Communication Skills & Public Speaking",
    "Deal with Adolescence",
    "Responsibilities and You",
    "School Days and Relationships",
    "Planning Your Future",
    "Career Counselling",
  ];

  const professionalItems = [
    "Vision and perspectives",
    "Exploring winner within you",
    "Handling Personal and professional life",
    "Stress free life",
  ];

  const corporateItems = [
    "Peak Potential Development",
    "Success is a Mindset",
    "Personality and Behavior Matters",
    "Communication Skills",
    "Self-Care",
    "Smart Working",
    "Self-Development",
    "Health: Physical, Mental, and Emotional Wealth",
    "Positive Mindset",
    "Body Language and Communication Skills",
    "Path of Happiness",
    "Spiritual Quotient and Peace",
    "Millionaire Mindset Development",
  ];

  return (
    <div className="hooponoponoPowerWebinarContainer">
      <div className="hooponoponoImgContainer">
        <img src={hooponopono} alt="hooponopono" />
      </div>
      <div className="webinarInfo">
        <div className="webinarInfoDiv">
          <div className="webinarInfoIconDiv">
            <FaRegCalendarAlt color="white" size={35} />
          </div>
          <div className="webinarInfoDivDescription">
            <p className="webinarInfoDivHeading">Date</p>
            <p className="webinarInfoDivData">Every Sunday</p>
          </div>
        </div>
        <div className="webinarInfoDiv">
          <div className="webinarInfoIconDiv">
            <IoMdTime color="white" size={35} />
          </div>
          <div className="webinarInfoDivDescription">
            <p className="webinarInfoDivHeading">Time</p>
            <p className="webinarInfoDivData">9:00 PM</p>
          </div>
        </div>
        <div className="webinarInfoDiv">
          <div className="webinarInfoIconDiv">
            <MdTimer color="white" size={35} />
          </div>
          <div className="webinarInfoDivDescription">
            <p className="webinarInfoDivHeading">Duration</p>
            <p className="webinarInfoDivData">60 minutes</p>
          </div>
        </div>
        <div className="webinarInfoDiv">
          <button>
            <CgNotes style={{ marginRight: 10 }} /> Enroll Now (Free)
          </button>
        </div>
      </div>
      <div className="webinarInformation">
        <h1>Transform Your Life with Ancient Hawaiian Wisdom</h1>
        <p>
          Join Dr. Ravi Shankar every Sunday at 9:00 PM for a life-changing
          exploration of Ho'oponopono, an ancient Hawaiian practice of
          reconciliation and forgiveness. This webinar series will guide you
          through powerful techniques to heal past traumas, release negative
          emotions, and foster forgiveness. Ideal for anyone seeking personal
          growth, this program offers tools to create positive change and
          transform your life. Dr. Ravi Shankar, a seasoned life coach and
          spiritual healer with over 15 years of experience, leads these
          sessions, providing his expertise to help you achieve inner peace and
          holistic well-being.
        </p>
      </div>
      <div className="whyYouCantMissWebinarContainer">
        <div className="whyYouCantMissWebinarHeading">
          <div className="rectangle"></div>
          <h1>Why You Can't Miss This Webinar?</h1>
        </div>
        <div className="whyYouCantMissWebinarReasonMain">
          <div className="whyYouCantMissWebinarReason">
            <div className="whyYouCantMissWebinarReasonIcon">
              <img src={check} alt="check" />
            </div>
            <div className="whyYouCantMissWebinarReasonInfo">
              <h1>Heal Emotional Wounds</h1>
              <p>
                Discover techniques to heal from past traumas and emotional
                scars.
              </p>
            </div>
          </div>
          <div className="whyYouCantMissWebinarReason">
            <div className="whyYouCantMissWebinarReasonIcon">
              <img src={check} alt="check" />
            </div>
            <div className="whyYouCantMissWebinarReasonInfo">
              <h1>Release Negativity</h1>
              <p>Learn to let go of stress, anger, and fear.</p>
            </div>
          </div>
          <div className="whyYouCantMissWebinarReason">
            <div className="whyYouCantMissWebinarReasonIcon">
              <img src={check} alt="check" />
            </div>
            <div className="whyYouCantMissWebinarReasonInfo">
              <h1>Practice Forgiveness</h1>
              <p>
                Cultivate the ability to forgive yourself and others, promoting
                inner peace.
              </p>
            </div>
          </div>
          <div className="whyYouCantMissWebinarReason">
            <div className="whyYouCantMissWebinarReasonIcon">
              <img src={check} alt="check" />
            </div>
            <div className="whyYouCantMissWebinarReasonInfo">
              <h1>Enhance Personal Growth</h1>
              <p>
                Gain new insights and practices for ongoing self-improvement.
              </p>
            </div>
          </div>
          <div className="whyYouCantMissWebinarReason">
            <div className="whyYouCantMissWebinarReasonIcon">
              <img src={check} alt="check" />
            </div>
            <div className="whyYouCantMissWebinarReasonInfo">
              <h1>Manage Stress Effectively</h1>
              <p>Master strategies to maintain a stress-free life.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="whatYouGetFromWebinar">
        <div className="whatYouGetFromWebinarHeading">
          <div className="rectangle"></div>
          <h1>Unlock Your Potential with Tailored Training Programs</h1>
        </div>
        <div className="whatYouGetFromWebinarContent">
          <div className="servicesDiv">
            <FaUserGraduate color="white" size={40} />
            <h3>For Students</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {studentItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "14px",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  <FaCheck
                    size={16}
                    color="white"
                    style={{ marginRight: 10, fontWeight: "bold" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="servicesDiv">
            <FaUserTie color="white" size={40} />
            <h3>Professionals</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {professionalItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "14px",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  <FaCheck
                    size={16}
                    color="white"
                    style={{ marginRight: 10, fontWeight: "bold" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="servicesDiv">
            <FaUsers color="white" size={40} />
            <h3>Corporate</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {corporateItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "14px",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  <FaCheck
                    size={16}
                    color="white"
                    style={{ marginRight: 10, fontWeight: "bold" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="reserveSeatFormContainer">
        <div className="reserveSeatFormHeading">
          <div className="rectangle"></div>
          <h1>
            Don't miss out on this life-changing opportunity! Reserve your spot
            now for <span style={{ color: "red" }}>FREE</span>.
          </h1>
        </div>
        <p>
          Please fill out the form below to enroll; please also attach the
          payment screenshot.
        </p>
        <div className="reserveSeatFormMain">
          <h3>What is your basic problem?</h3>

          <div className="checkboxGroup">
            <label>
              <input type="checkbox" name="healthChallenge" /> Health Challenge
            </label>
            <label>
              <input type="checkbox" name="mentalChallenge" /> Mental - Stress,
              Depression, Fear, Phobia
            </label>
            <label>
              <input type="checkbox" name="financialChallenge" /> Financial
              Challenge
            </label>
          </div>

          <label className="otherCheckbox">
            <input type="checkbox" name="otherChallenge" />
            Other
          </label>

          <input
            type="text"
            placeholder="Other"
            style={{ width: "175px", marginBottom: "50px" }}
          />

          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="Your Phone" />

          <label>Gender</label>
          <div className="genderGroup">
            <label>
              <input type="checkbox" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="checkbox" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="checkbox" name="gender" value="preferNotToSay" />
              Prefer not to say
            </label>
          </div>

          <h3 style={{ marginTop: 30 }}>Address</h3>
          <div className="addressGroup">
            <div>
              <input type="text" id="city" />
              <label htmlFor="city">City</label>
            </div>
            <div>
              <input type="text" id="state" />
              <label htmlFor="state">State / Province / Region</label>
            </div>
          </div>
          <div className="webinarReserveBtnContainer">
            <button className="webinarReserveBtn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HooponoponoPowerWebinar;
