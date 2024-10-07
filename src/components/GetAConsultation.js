import React from "react";
import "../styles/GetAConsultation.css";

const GetAConsultation = () => {
  return (
    <div className="getAConsultationContainer">
      <div className="getAConsultationHeader">
        <div className="getAConsultationHeaderTop">
          <div className="rectangle"></div>
          <p>Get a consultation</p>
        </div>
        <div className="getAConsultationHeaderBottom">
          <h1>Let's Get Started!</h1>
        </div>
      </div>
      <div className="getAConsultationFormContainer">
        <p>
          Please tell us how we can help you. Only fields marked with * are
          required. Your information is protected by our privacy policy.
        </p>
        <div className="getAConsultationForm">
          <input type="text" placeholder="First Name" className="inputField" />
          <input type="tel" placeholder="Phone" className="inputField" />
          <input type="email" placeholder="Email" className="inputField" />
          <textarea placeholder="Message" className="messageField" />
          <button className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default GetAConsultation;
