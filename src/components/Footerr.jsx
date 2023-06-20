import React from 'react';
import "../index.css";
function Footerr() {
    const currentYear = new Date().getFullYear();
  return (
    
    <div className="footer">
      Mostafa Kataya © {currentYear}
    </div>
  );
}

export default Footerr;
