import React from 'react';
import './header.scss';
import { ReactComponent as WebDesignImage } from '../../Asset/undraw_web_devices.svg';

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
              <Typography sx={{ fontWeight: '700' }} variant="h3">
                Smart Ideas for Your Brand Are Here
              </Typography>
            </div>
            <div className="hero-text-subheading">
              <Typography
                sx={{ letterSpacing: '1px', wordSpacing: '2px' }}
                variant="subtitle1"
              >
                our motto is to fulfill customer demand by making them satisfied
                with growing their business.
              </Typography>
            </div>
            <div className="hero-button">
              <Button variant="contained" size="medium">
                Get started
              </Button>
            </div>
          </div>
          <div className="hero-image">
            <WebDesignImage width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
