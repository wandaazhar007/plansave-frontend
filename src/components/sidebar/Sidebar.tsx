import { SidebarContext } from "../../context/SidebarContext";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import './sidebar.scss';
import { menu } from "../../utils/Menu";

const Sidebar: React.FC = () => {
  const currentPath = useLocation();
  console.log(currentPath.pathname);

  const sidebarToggle: any = useContext(SidebarContext);
  const handleSidebar = () => {
    sidebarToggle.triggerSidebar();
  }
  const active = sidebarToggle.active;

  return (
    <div className={`sidebarContainer ${active ? 'on' : ''}`}>
      <section className="sidebar">
        {menu.map((item) => (
          <div className="item" key={item.id}>
            <div className="title">{item.title}</div>
            {item.listItems.map((listItem) => (
              <Link to={listItem.url} className={`listItem ${currentPath.pathname === listItem.url ? 'active' : ''}`} key={listItem.id}>
                <img src={`../../assets/icons/${listItem.icon}`} />
                <span className="listItemTitle" onClick={() => handleSidebar()}>{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}

export default Sidebar;