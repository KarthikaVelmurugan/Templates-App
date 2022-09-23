import React from "react";
import SocialIcons from "./FooterIcons";
import ItemsContainer from "./FooterItemContainer";
import { Icons } from "./FooterIcons";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      
      <ItemsContainer />

    
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
       pt-2 text-gray-400 text-sm pb-8"
      >
        
          <img
            src={logo}
            alt="OneBill Software PVT LTD - India Logo"
            className="footerLogo"
          ></img>
       
        <div className="md:text-center flex gap-2 flex-col sm:text-start">
          <span>© 2020 Appy. All rights reserved.</span>
          <SocialIcons Icons={Icons} />
        </div>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
