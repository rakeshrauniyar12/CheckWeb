import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import course from "../assets/course.jpg";
import "../styles/Courses.css";

const Courses = () => {
  return (
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
  );
};

export default Courses;
