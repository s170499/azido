import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import main from '../media/main.mp4';

export const MainVideo = () => {
  // This ref will store the single reference to the video element
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current; // This refers to the <video> DOM element

    if ('IntersectionObserver' in window && videoElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoElement.play();  // Play the video when it is in view
            } else {
              videoElement.pause(); // Pause the video when it is out of view
            }
          });
        },
        {
          threshold: 0.5, // Play when 50% of the video is visible
        }
      );

      observer.observe(videoElement);  // Observe the video

      return () => {
        observer.unobserve(videoElement); 
      };
    }
  }, []);

  return (
    <Box sx={{ maxWidth: '100%', height: { xs: '500px',sm:'600px', md: '800px' }}}>
      <video
        ref={videoRef}  
        loop
        muted
        preload="metadata"
        style={{ width: '100%', height: '100%', objectFit: 'cover',  }}
      >
        <source src={main} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default MainVideo;

