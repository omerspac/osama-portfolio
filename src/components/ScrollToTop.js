"use client"
import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FaArrowUp } from 'react-icons/fa';
// import { FaArrowTurnUp } from 'react-icons/fa6';
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '39px',
          right: '40px',
          backgroundColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          color: "#22c55e",
          border: 'none',
          borderRadius: '50%',
          backgroundColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          color: "#22c55e",
          border: 'none',
          borderRadius: '50%',
          padding: '25px 25px',
          fontSize: '0px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: '1000',
          transition: 'transform 0.3s ease',
          width: '50px',
          height: '50px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="scroll-to-top-btn"
      >
        {/* <i className='bx bx-up-arrow-alt'></i> */}
        <IoIosArrowUp size={30} className="-ml-[15px] -mt-[18px] color-[#212121]"/>
      </button>
    )
  );
}