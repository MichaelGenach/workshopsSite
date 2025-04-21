import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };





  const scrollTo2 = () => {
    window.scrollTo({
      top: 50000,
      behavior: 'smooth'
    });
    setIsOpen(false)
  };

  const scrollTo1 = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false)
  };



  return (
    <div id="menu-container">
      {/* כפתור המבורגר */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* תפריט הקישורים */}
      <div className={`linksDiv ${isOpen ? 'open' : ''}`}>

        <Link className="links" onClick={scrollTo2}>יצירת קשר</Link>
        <Link className="links" onClick={scrollTo1} to='/janur'>רכישת תנור קדרות</Link>
        <Link className="links" onClick={scrollTo1} to='/private'>סדנאות פסיפס בוטיק</Link>
        <Link className="links" onClick={scrollTo1} to='/tours'>סיורים פרטיים</Link>
        <Link className="links" onClick={scrollTo1} to='/company'>סדנאות פסיפס לחברות</Link>
        <Link className="links" onClick={scrollTo1} to='/pottery'>סדנאות קדרות</Link>
        {/* <Link className="links" onClick={scrollTo1} to='/bookingWidget'>לרכישת סדנא</Link> */}
        <Link className="links" onClick={scrollTo1} to='/'>בית</Link>














      </div>
    </div>
  );
}
