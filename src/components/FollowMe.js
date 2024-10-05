import React from 'react';
import { Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import SpotifyIcon from '@mui/icons-material/Contactless';
import SoundIcon from '@mui/icons-material/CloudCircle';

const FollowMeSection = () => {
  const socialLinks = [
    { icon: <InstagramIcon sx={{ fontSize: '40px', color: 'white' }} />, label: 'Instagram', url: 'https://www.instagram.com/azido_dj?igsh=MTdsOGFrbjJ1aTJyZQ' },
    { icon: <YouTubeIcon sx={{ fontSize: '40px', color: 'white' }} />, label: 'YouTube', url: "https://www.youtube.com/@azido"},
    { icon: <SpotifyIcon sx={{ fontSize: '40px', color: 'white' }} />, label: 'Spotify', url: "https://open.spotify.com/artist/58CJketZTqmgiCycZbGysm" },
    { icon: <FacebookIcon sx={{ fontSize: '40px', color: 'white' }} />, label: 'Facebook', url: 'https://facebook.com' },
    { icon: <SoundIcon sx={{ fontSize: '40px', color: 'white' }} />, label: 'Sound', url: "https://soundcloud.com/dney_bboi" },
    { icon: <AppleIcon sx={{ fontSize: '40px', color: 'white' }} />, label: 'AppleMusic', url: "https://music.apple.com/il/artist/azido/672094812" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        height: '50vh',  // Full height of the viewport
        display: 'flex',  // Flexbox to center content
        justifyContent: 'center',  // Horizontally center the content
        alignItems: 'center',  // Vertically center the content
        textAlign: 'center',
      }}
    >
        <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <Box>
        <Typography
        
          sx={{
            color: 'white',
            marginBottom: '20px',
            fontWeight: '900',
            fontFamily: "'Orbitron', serif",
            fontSize: { xs: '40px',sm: '50px', md: '60px' },
          }}
        >
          Follow Me
        </Typography>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={0}  // Remove gaps
          sx={{
            maxWidth: { xs: '250px', sm: '500px', md: '1000px' },
            margin: '0',
            
          }}
        >
          {socialLinks.map((link, index) => (
            <Grid
              item
              xs={4}  // 3 columns on small screens
              md={2}  // 6 columns on medium and large screens
              key={index}
              sx={{
                padding: 0,
                margin: 0,
              }}
            >
              <Box
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  border: '2px solid white',
                  height: { xs: '70px', md: '100px' },
                  width: { xs: '70px', md: '100px' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'white',
                    '& .MuiSvgIcon-root': {
                      color: 'black',
                    },
                  },
                }}
              >
                {link.icon}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FollowMeSection;