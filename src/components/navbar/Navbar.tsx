import React, { useContext, useState } from "react";
import './navbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faClose, faGear, faGears, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

// import { NavbarContext } from '../../context/NavbarContext';
import { SidebarContext } from "../../context/SidebarContext";
import { faFonticons, faFonticonsFi } from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = () => {
  const [profileActive, setProfileActive] = useState<boolean>(false);

  const handleProfile = () => {
    setProfileActive(!profileActive);
  }
  // const navbarToggle: any = useContext(NavbarContext);
  // const activeNavbar = navbarToggle.active;
  // const triggerNavbar = navbarToggle.triggerNavbar;

  const sidebarToggle: any = useContext(SidebarContext);
  const activeSidebar = sidebarToggle.active;
  const triggerSidebar = sidebarToggle.triggerSidebar;

  return (
    <section className="navbar">
      <div className="leftNavbar">
        <div className="logo">
          <img src="../../assets/icons/logo-navbar.png" alt="" />
        </div>
      </div>
      <div className="rightNavbar">
        <div className="toogles">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" onClick={handleProfile} />
          <div className={`profile ${profileActive ? 'on' : ''}`}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGear} />
                <span>Settings</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faBell} />
                <span>Notifications</span>
              </li>
            </ul>
          </div>
          {activeSidebar ? (
            <FontAwesomeIcon icon={faClose} className="icon iconBars" onClick={triggerSidebar} />
          ) : (
            <FontAwesomeIcon icon={faBars} className="icon iconBars" onClick={triggerSidebar} />
          )}
          {/* {activeNavbar ? (
            <FontAwesomeIcon icon={faClose} className="icon iconClose" onClick={triggerNavbar} />

          ) : (
            <FontAwesomeIcon icon={faBars} className="icon iconClose" onClick={triggerNavbar} />

          )} */}

        </div>
      </div>
    </section>
  )
}

export default Navbar;