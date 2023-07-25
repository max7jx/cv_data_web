import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ArrowButton = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowUpArrow(true);
    } else {
      setShowUpArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showUpArrow && (
        <IconButton onClick={handleArrowClick}>
          <ArrowUpwardIcon style={{ fontSize: '2rem' }} />
        </IconButton>
      )}
    </>
  );
};

export default ArrowButton;
