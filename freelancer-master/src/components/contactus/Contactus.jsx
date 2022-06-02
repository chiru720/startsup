import React from 'react';
import './contactus.scss';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Contactus() {
  return (
    <div className="contactus">
      <Typography
        className="tag"
        variant="overline"
        display="block"
        gutterBottom
      >
        Contact us
      </Typography>
      <Typography
        className="contactus-heading"
        variant="h4"
        gutterBottom
        component="div"
      >
        Contact us and get your business online
      </Typography>
      <Typography className="contactus-body" variant="body2" gutterBottom>
        We recommended you to contact us and get best quotation. Get ready with
        your website in no time
      </Typography>
      <div className="contact-info">
        <div className="contact-details">
          <div className="address-container">
            <div className="address-header">
              <LocationOnIcon />
              Address
            </div>
            <Typography
              sx={{ fontSize: '16px', color: 'white', lineHeight: '25px' }}
              className="address-text"
              display="block"
              gutterBottom
            >
              AH365, sector II, Bidhan Nagar, Kol- 700092
            </Typography>
          </div>
          <div className="phone-container">
            <div className="phone-header">
              <PhoneIphoneIcon />
              Phone
            </div>
            <Typography
              sx={{ fontSize: '16px', color: 'white' }}
              className="phone-text"
              display="block"
              gutterBottom
            >
              7908135238
            </Typography>
          </div>
          <div className="email-container">
            <div className="email-header">
              <AlternateEmailIcon />
              Email
            </div>
            <Typography
              sx={{
                fontSize: '16px',
                color: 'white',
                overflowWrap: 'anywhere',
                lineHeight: '20px',
              }}
              className="email-text"
              display="block"
              gutterBottom
            >
              chiru720@gmail.com
            </Typography>
          </div>
        </div>
        <div className="contact-form">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="standard-name-input"
                label="Name"
                type="text"
                variant="standard"
                autoComplete="off"
                helperText=""
              />
              <TextField
                id="standard-email-input"
                label="Email"
                type="email"
                variant="standard"
                autoComplete="off"
                helperText=""
              />
              <TextField
                id="standard-phone-input"
                label="Phone No"
                type="number"
                variant="standard"
                autoComplete="off"
                helperText=""
              />
              <TextField
                id="standard-search"
                label="Services"
                type="search"
                variant="standard"
                autoComplete="off"
              />
            </div>
          </Box>
          <TextareaAutosize
            id="standard-name-input"
            aria-label="empty textarea"
            placeholder="Tell us about your requirement"
            style={{
              width: 400,
              height: 100,
              margin: 10,
              padding: 10,
              // boxSizing: 'borderBox',
            }}
          />
          <div className="submit-button">
            <Button
              sx={{
                background: '#50b474',
                padding: '8px 14px',
                width: '10rem',
                borderRadius: '20px',
              }}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
