import React, { useContext, useRef, useState } from "react";
import './navbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faClose, faGear, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { SidebarContext } from "../../context/SidebarContext";

const Navbar: React.FC = () => {
  const dropdownRef = useRef<any>(null);
  const [profileActive, setProfileActive] = useState<boolean>(false);
  const sidebarToggle: any = useContext(SidebarContext);
  const activeSidebar = sidebarToggle.active;
  const setActiveSidebar = sidebarToggle.setActive;

  const handleClickOutsideSidebar = (e: any) => {
    if (activeSidebar && !dropdownRef.current?.contains(e.target as Node)) {
      setActiveSidebar(false)
    }
  }

  const handleClickOutsideDropdownMenu = (e: any) => {
    if (profileActive && !dropdownRef.current?.contains(e.target as Node)) {
      setProfileActive(false)
    }
  }

  window.addEventListener("click", (e: MouseEvent) => {
    handleClickOutsideDropdownMenu(e);
    handleClickOutsideSidebar(e);
  });

  const handleProfile = () => {
    setProfileActive(!profileActive);
    setActiveSidebar(false);
  }

  const handleMenu = () => {
    setActiveSidebar(!activeSidebar);
    setProfileActive(false);
  }

  return (
    <section className="navbar" ref={dropdownRef}>
      <div className="leftNavbar">
        <div className="logo">
          <img src="../../assets/icons/logo-navbar.png" alt="" />
        </div>
      </div>
      <div className="rightNavbar">
        <div className="toogles">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" onClick={handleProfile} ref={dropdownRef} />
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
            <FontAwesomeIcon icon={faClose} className="icon iconBars" onClick={handleMenu} />
          ) : (
            <FontAwesomeIcon icon={faBars} className="icon iconBars" onClick={handleMenu} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Navbar;