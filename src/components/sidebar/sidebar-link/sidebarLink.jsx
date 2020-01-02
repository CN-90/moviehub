import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({ category, text, pathname, setMenuHidden }) => {
  return (
    <NavLink
      onClick={() => setMenuHidden(true)}
      isActive={(match, location) => {
        if (location.pathname.includes(category)) return true;
      }}
      activeClassName="active"
      to={pathname}
    >
      <li>{text}</li>
    </NavLink>
  );
};

export default SidebarLink;
