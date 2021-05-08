import React from 'react';
import './SidebarOption.css';

// Functionality : On hoverblue for each icons, pass compoents as props
function SidebarOption(props) {
  const { Icon, text, active } = props;
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>

      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
