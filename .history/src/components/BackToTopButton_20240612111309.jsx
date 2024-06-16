// components/BackToTopButton.js
import { useState, useEffect } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          padding: '10px 10px',
          fontSize: '16px',
          backgroundColor: 'blue',
          color: '#fff',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        <ArrowCircleUpIcon className=''/>
      </button>
    )
  );
};

export default BackToTopButton;
