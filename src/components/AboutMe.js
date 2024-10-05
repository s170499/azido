import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Avatar, Grid } from '@mui/material';
import cool from '../media/cool.jpg';
import about from '../media/about.jpg';

const AboutMe = () => {
  return (
    <div style={{ overflow: 'hidden', position: 'relative', paddingTop: '40px' }}>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>

      {/* Adjust background to cover the viewport more elegantly */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'relative',
          backgroundImage: `url(${cool})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          padding: { xs: '50px', sm: '70px', md: '100px' }, // Reduced padding for better fit
          overflow: 'hidden',
        }}
      >
        {/* Overlay Box - Move the card higher */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            backgroundColor: '#2D383A',
            borderRadius: 10,
            padding: { xs: '20px', sm: '30px', md: '40px' },
            boxSizing: 'border-box',
            maxWidth: { xs: '90%', md: '90%', lg: '60%' }, // Adjust the max-width for better scaling
            width: 'auto',
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              {/* Avatar Section */}
              <Avatar
                alt="Your Name"
                src={about}
                loading="lazy" 
                sx={{
                  width: { xs: 160, sm: 220, md: 300 }, // Reduce image size
                  height: { xs: 200, sm: 280, md: 380 },
                  margin: 'auto',
                  borderRadius: 10,
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              {/* About Me Text Section */}
              <Typography
                gutterBottom
                sx={{
                  fontWeight: '900',
          
                  fontFamily: "'Orbitron', serif",
                  color: '#F7468A',
                  textAlign: 'center',
                  fontSize: { xs: '16px', sm: '20px', md: '28px' }, // Adjust the font size for better fit
                  lineHeight: { xs: '1.2', sm: '1.4', md: '1.4', lg:'1.6' },
                  padding: { xs: '10px', sm: '15px', md: '20px' },
                }}
              >
                AZIDO is a new Israeli drum'n'bass project. Blending rock-guitar
                influence with the breakbeat and jungle rhythms of DnB to create
                raw and energetic soundscapes that are sure to move the dancefloor.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default AboutMe;