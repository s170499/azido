import React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';

import photo1 from '../media/photo1.JPG';
import photo2 from '../media/photo2.JPG';
import photo3 from '../media/photo3.jpg';
import photo4 from '../media/photo4.jpg';


const images = [
  { img: photo4, title: 'Photo 1', rows: 3, cols: 2 },
  { img: photo1, title: 'Photo 4', rows: 2, cols: 2 },
  { img: photo2, title: 'Photo 2', rows: 1, cols: 1 },
  { img: photo3, title: 'Photo 3', rows: 1, cols: 1 },
];

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
};

const PhotoCollage = () => {
  return (
    <Box
    sx={{
      backgroundColor: 'black',
      height: { xs: '90vh', xl: '140vh'},
      display: 'flex', 
      justifyContent: 'center',  
      alignItems: 'center',  
      textAlign: 'center',
      paddingTop: {xs:'20px', md: '80px', xl: '0'},
      paddingBottom: {md: '100px', xl: '0'}
    }}
  >
      <ImageList
        sx={{ width: '100%', height: 'auto', padding:  { xs: '10px',sm: '40px',md: '100px', lg: '200px', } }} // Adjust to be responsive
        variant="quilted"
        cols={4}
        rowHeight={200} // Set a base row height
      >
        {images.map((item, index) => (
          <ImageListItem key={index} cols={item.cols} rows={item.rows}>
            <img
              {...srcset(item.img, 150, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
         
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default PhotoCollage;