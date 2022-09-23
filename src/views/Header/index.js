import React from "react";
import { Logo } from "../../components/Logo";
import NavBar from "../../components/NavBar";
import "../../assets/styles/main.css";
import Scroll from "../../components/ScrollBar";

const navItem = ["home", "about", "templates", "sandbox", "comments"];
const Header = () => {
  return (
    <div>


    <div className="header">

      <div class="section1">
        <Logo />
      </div>
      <div className="section2 navBar">
        {navItem &&
          navItem.map((e) => (
            <NavBar context={{ title: e.toUpperCase(), path: e }} />
          ))}
      </div>
    </div>
    <div>
      {/* <Scroll/> */}
    </div>

</div>
  );
};
export default Header;
