import React from "react";
import instagram from "../../assets/icons/logo-instagram.svg"
import linkedin from "../../assets/icons/logo-linkedin.svg"
import email from "../../assets/icons/logo-email.svg"
import twitter from "../../assets/icons/logo-twitter.svg"
import facebook from "../../assets/icons/logo-facebook.svg"
export const Icons = [
  { name: facebook, link: "https://www.facebook.com/onebillsoftware/" },
  { name: twitter, link: "https://twitter.com/onebillsoftware/" },
  { name: email, link: "sales@onebillsoftware.com" },
  { name: linkedin, link: "https://www.linkedin.com/company/onebill-inc/" },
  { name: instagram, link: "https://www.instagram.com/onebillsoftware/" },
];

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
      
        <a href={icon.link}
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300">
          <img src={icon.name} color="white"/>
          </a>
      ))}
    </div>
  );
};

export default SocialIcons;
