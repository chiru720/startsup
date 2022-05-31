import React from 'react';
import './footer.scss';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        Copyright. Situp 2022. All rights reserved.
      </div>
      <div className="footer-icons">
        <span className="footer-icons-items">
          <InstagramIcon fontSize="small" />
        </span>
        <span className="footer-icons-items">
          <FacebookIcon fontSize="small" />
        </span>
        <span className="footer-icons-items">
          <TwitterIcon fontSize="small" />
        </span>
        <span className="footer-icons-items">
          <LinkedInIcon fontSize="small" />
        </span>
      </div>
    </div>
  );
}
