import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">26/4 R B N Roy Street, Kolkata - 700007, India</p>
        <p className="p__opensans">+91 6291882981</p>
        <p className="p__opensans">+91 9748762417 (Whatsapp)</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.arcadetheorylogo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Sunday</p>
        <p className="p__opensans">24 * 7</p>
        <p className="p__opensans">arcadetheorybiz@gmail.com</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2017 Arcade theory. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
