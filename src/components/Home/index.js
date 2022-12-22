import React, { Component } from "react";
import Header from "../Header";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="background-container">
          <div className="body-container">
            <h1 className="heading">
              CARVING FUTURE TECHNOLOGY PROFESSINALS OUT OF YOUNG MINDS
            </h1>
          </div>
        </div>

        <div className="middle-section">
          <div className="middle-section-head">
            <h1>WHO WE ARE</h1>
            <p>
              Rubixe™ is a global technology company specializing in disruptive
              technologies – Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain and Internet of
              Things (IoT). Rubixe mission to enable businesses to leverage the
              full potential of disruptive technologies to stay competitive in
              the market.
            </p>
          </div>
          <div class="middle-section-image">
            <img src="https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.jpg?s=170667a&w=is&k=20&c=Uf_HF1bM7z8Vi_l9wiITJ6bscGfNdA5V0uliKFUVPTs=" />
          </div>
        </div>

        <div className="started-container">
          <h1 className="heading2">WHERE WE STARTED</h1>
          <p className="para2">
            We Started in 2015, providing technology solutions based in the
            Netherlands, founders of Rubixe™ have gained expertise in
            cutting-edge technology through delivering several smart city
            solutions for European Commission (EC) projects.
          </p>
        </div>

        <div className="login-div">
          <div className="login-form">
            <div className="text1">
              <h1>GET IN TOUCH</h1>
              <p>please complete the form will get back to you</p>
            </div>
            <hr />
            <div>
              <p>Name*</p>
              <input />
              <p>Email*</p>
              <input />
              <p>mobile number*</p>
              <input />
              <br />
              <br />
              <button className="button">register now</button>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <div>
            <h1 className="text">ABOUT US</h1>
            <p className="text">
              Rubixe™ is a global technology company specializing in disruptive
              <br />
              technologies – Artificial Intelligence (AI), Machine Learning,
              <br />
              Robotic Process Automation (RPA), BlockChain and Internet of
              <br />
              Things (IoT). Rubixe mission to enable businesses to leverage the
              <br />
              full potential of disruptive technologies to stay competitive in
              the market.
            </p>
          </div>
          <div>
            <h1 className="text">MENUS</h1>
            <ul className="text">
              <li>Home</li>
              <li>Serivces</li>
              <li>Products</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h1 className="text">LEARN MORE</h1>
            <ul className="text">
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h1 className="text">Address</h1>
            <p className="text">
              Novel Tech Park, 1st Floor, Hosur Rd,<br/> Kudlu gate, Bengaluru,
              Karnataka<br/> 560068<br/> Phone: 0804-717-8999<br/> Email: hi@rubixe.com
            </p>
          </div>
        </div>

      </>
    );
  }
}
export default Home;
