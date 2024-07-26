import React, { useState } from 'react';
import '../style/Collapse.css';  
function Collapse({ title, children, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h1 className="collapse-title">{title}</h1>
        <span className={`collapse-icon ${isOpen ? 'open' : 'closed'}`}>
        <i className="fas fa-chevron-up"></i>
        </span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
