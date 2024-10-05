import React from 'react'; 
import { Box, Typography } from '@mui/material';
import cool from '../media/cool.jpg';

function SpotifyEmbed() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
      sx={{
        backgroundImage: `url(${cool})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: { xs: '30px', sm: '80px', md: '120px' }, // Adjusted padding for smaller screens
     
        overflow: 'hidden',
      }}
    >
      <Box sx={{backgroundColor:'#2D383A', borderRadius: '8px', padding: '30px', paddingBottom: '50px'}}>
      {/* Clickable Title */}
      <a
        href="https://open.spotify.com/playlist/37i9dQZF1E4v2mgY7R8f8Z"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            marginBottom: '20px', // Adjusted for smaller screens
            color: '#B768A2',
            fontWeight: '900',
          
            fontFamily: "'Orbitron', serif",
            fontSize: { xs: '30px', sm: '50px', md: '70px' }, // Responsive font size
          }}
        >
          Follow me on Spotify
        </Typography>
      </a>

      {/* Responsive Spotify Embed */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: { xs: '400px', sm: '600px', md: '800px' }, // Max width for the embed
          paddingBottom: '56.25%', // 16:9 aspect ratio for iframe
          height: { xs: '300px', sm: '400px', md: '200px' },
          overflow: 'hidden',
         
        }}
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1E4v2mgY7R8f8Z"
          title="spotify"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
        
          }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </Box>
      </Box>
    </Box>
  );
}

export default SpotifyEmbed;
