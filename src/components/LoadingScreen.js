import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import logo_white from '../media/logo_white.png';

// Create a styled component for the image with keyframe animations
const Logo = styled('img')(({}) => ({
  height: 40,
  width: 'auto',
  animation: 'zoomIn 2s ease-out',
  '@keyframes zoomIn': {
    '0%': { transform: 'scale(0)' },
    '100%': { transform: 'scale(1)' },
  },
}));

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time based on your needs

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null; // If loading is done, don't render the component
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        zIndex: 2000, // Ensure it's above other content
      }}
    >
      <Logo src={logo_white} alt="Logo" style={{width: '250px', height: '250px'}} />
    </Box>
  );
}

export default LoadingScreen;