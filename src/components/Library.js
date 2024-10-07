import React from "react";
import "../styles/Library.css";

const Library = () => {
  return (
    <div className="libraryContainer">
      <div className="libraryHeader">
        <div className="libraryHeaderTop">
          <div className="rectangle"></div>
          <p>Library</p>
        </div>
        <div className="libraryHeaderBottom">
          <h1>
            Discover a curated selection of books to expand your knowledge and
            growth.
          </h1>
        </div>
      </div>
      <div className="libraryBooksContainer">
        <div className="bookDiv">
          <div className="bookDivTop">
            <img
              src="https://lifesignify.com/wp-content/uploads/2024/05/free-sample-640x928.jpeg"
              alt="book"
            />
          </div>
          <div className="bookDivBottom">
            <h2 className="bookTitle">The Seven Spiritual Laws of Success</h2>
            <p className="bookCost">Free</p>
            <button className="BookDownloadOrBuyBtn">Download Now</button>
          </div>
        </div>
        <div className="bookDiv">
          <div className="bookDivTop">
            <img
              src="https://lifesignify.com/wp-content/uploads/2024/05/1685293892-320x320.webp"
              alt="book"
            />
          </div>
          <div className="bookDivBottom">
            <h2 className="bookTitle">
              Adult Children of Emotionally Immature
            </h2>
            <p className="bookCost">₹300</p>
            <button className="BookDownloadOrBuyBtn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
