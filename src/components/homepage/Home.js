import SuccessfullStudents from "./SuccessfullStudents";
import Offerings from "./Offerings";
import "./home.scss";
import React from "react";
import WhyAbacus from "./WhyAbacus";
import Header from "../header/Header";
import Footer from "../footer/Footer";
function Home({setUserType,token,setToken}) {
  return (
    <><Header token={token} setToken={setToken} setUserType={setUserType} /><>
      <div className="dashboard">
        <div className="content">
          <span className="header-text">
            AMBITION IS THE FIRST STEP TOWARDS
          </span>
          <h1>SUCCESS</h1>
          <span className="footer-text">
            Now Available To Provide Excellent Coaching
          </span>
          <button className="button">Book Now</button>
        </div>
      </div>
      <div className="help">
        <hr />
        <h3>How can we help you</h3>
        <div className="boxes">
          <div className="box">
            <span className="box-heading">Offline Coaching</span>
            <span>Use this area to describe one of your service</span>
            <hr />
            <span>1hr</span>
            <span>500 rs</span>
            <button>Book it</button>
          </div>
          <div className="box">
            <span className="box-heading">Guidence Workshops</span>
            <span>Use this area to describe one of your service</span>
            <hr />
            <span>1hr</span>
            <span>500 rs</span>
            <button>Book it</button>
          </div>
          <div className="box">
            <span className="box-heading">Self-Improvement</span>
            <span>Use this area to describe one of your service</span>
            <hr />
            <span>1hr</span>
            <span>500 rs</span>
            <button>Book it</button>
          </div>
        </div>
      </div>
      <div className="about">
        <hr />
        <h3>About ABACUS</h3>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page.
        </p>
        <p>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide.
        </p>
        <button>Read More</button>
      </div>
      <Offerings />
      <SuccessfullStudents />
      <WhyAbacus />
    </><Footer /></>
  );
}

export default Home;
