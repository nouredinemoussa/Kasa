import React, { useState } from 'react';
import './Collapse.css';  
function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
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
