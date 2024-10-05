import React, { useState } from 'react';
import { Grid, TextField, Typography, Button, Box, MenuItem } from '@mui/material';
import sea from '../media/sea.mp4';

const MessageForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    topic: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mldryvbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          topic: '',
          message: '',
        });
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden', position: 'relative', color: 'white' }}>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          color: white;
        }
      `}</style>
      <video
        src={sea}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: '200vh',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
   <Box
  sx={{
    height: '100vh',
    padding: { xs: '20px', md: '20px' }, 
    paddingLeft: { xs: '70px', md: '70px' }, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  }}
>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={4} maxWidth="1200px">
            {/* Left Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h2" sx={{  mb: 2,   fontSize: { xs: '1.5rem',sm: '2rem', md: '3.5rem' },
              fontWeight: '900',
              fontFamily: "'Orbitron', serif", }}>
                LET'S GET IN TOUCH
              </Typography>
              {submitted && <Typography color="green">Message sent successfully!</Typography>}
              {error && <Typography color="red">Oops! Something went wrong.</Typography>}
            </Grid>
            <Grid item xs={12} md={8} paddingRight={6}>
              <Grid container spacing={2} >
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderWidth: '2px', 
                          borderColor: 'rgba(255, 255, 255, 0.8)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                          borderWidth: '3px', 
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderWidth: '2px',
                          borderColor: 'rgba(255, 255, 255, 0.8)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                          borderWidth: '3px', 
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderWidth: '2px', // Bolder border
                          borderColor: 'rgba(255, 255, 255, 0.8)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                          borderWidth: '3px', // Even bolder when focused
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    variant="outlined"
                    select
                    fullWidth
                    required
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderWidth: '2px', // Bolder border
                          borderColor: 'rgba(255, 255, 255, 0.8)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                          borderWidth: '3px', // Even bolder when focused
                        },
                      },
                    }}
                  >
                    <MenuItem value="personal">Personal request</MenuItem>
                    <MenuItem value="collaboration">Collaboration</MenuItem>
                    <MenuItem value="booking">Booking for event</MenuItem>
                    <MenuItem value="license">License my music</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderWidth: '2px', // Bolder border
                          borderColor: 'rgba(255, 255, 255, 0.8)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                          borderWidth: '3px', // Even bolder when focused
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#333',
                      color: '#fff',
                      padding: '12px',
                      '&:hover': {
                        backgroundColor: '#555',
                      },
                    }}
                  >
                    SEND MESSAGE
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default MessageForm;