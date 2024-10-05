import React, { useEffect } from 'react';
import { Box } from '@mui/material';

const Moving = React.memo(() => {
  const movingTextContainerStyle = {
    position: 'absolute',
    bottom: { xs: '30px', xl: '20px' },
    width: '200%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    zIndex: 1,
  };

  const movingTextStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fontSize: '7rem', // Adjust font size
    textTransform: 'uppercase',
    color: 'transparent',
    WebkitTextStroke: '1px white', // Text color
    animation: 'scrollText 60s linear infinite', // Adjust speed and direction
    fontFamily: '"Bebas Neue", sans-serif',
  };

  // Inject keyframes into a <style> element
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scrollText {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup: remove the style element when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '20vh', xl: '30vh' },
        overflow: 'hidden',
      }}
    >
      {/* Moving Text Section */}
      <div style={movingTextContainerStyle}>
        <div style={movingTextStyle}>
          <span style={{ paddingRight: '200px' }}>the only who can ensure it only the of</span>
          <span style={{ paddingRight: '200px' }}>the shall survive and when you start to</span>
          <span style={{ paddingRight: '200px' }}>survive keep on</span>
        </div>
      </div>
      <div style={movingTextContainerStyle}>
        <div style={movingTextStyle}>
          <span style={{ paddingRight: '200px' }}>
            sometimes the Rope gets too rough and you can't stand the pace can't keep up with the leader so get out of the
          </span>
          <span>race though you try and try so hard failure is your TR reward there is a</span>
        </div>
      </div>
    </Box>
  );
});

export default Moving;