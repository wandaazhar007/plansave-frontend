import React, { useContext, useState } from "react";
import './navbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

import { NavbarContext } from '../../context/NavbarContext';
import { SidebarContext } from "../../context/SidebarContext";

const Navbar: React.FC = () => {
  const navbarToggle: any = useContext(NavbarContext);
  const activeNavbar = navbarToggle.active;
  const triggerNavbar = navbarToggle.triggerNavbar;

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
          <FontAwesomeIcon icon={faUser} className="icon" />
          {activeSidebar ? (
            <FontAwesomeIcon icon={faClose} className="icon iconClose" onClick={triggerSidebar} />
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