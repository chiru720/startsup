import React from 'react';
import './header.scss';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <div className="header-container">
      <div className="container">
        <div className="menu">
          <div className="logo">logo here</div>
          <div className="menu-items">menu here</div>
        </div>
        <div className="header-content">
          <div className="hero-text">
            <div className="hero-text-title">
              <Typography variant="h3">
                We design amazing experience for you
              </Typography>
            </div>
            <div className="hero-text-subheading">
              <Typography
                sx={{ letterSpacing: '2px', wordSpacing: '2px' }}
                variant="subtitle1"
              >
                Template is a professional webflow with multiple sections.
              </Typography>
            </div>
            <div className="hero-button">
              <Button variant="contained" size="medium">
                Get started
              </Button>
              <Button variant="contained" size="medium">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hero-image">zszsddzd</div>
        </div>
      </div>
    </div>
  );
}
