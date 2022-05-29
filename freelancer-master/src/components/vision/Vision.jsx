import React from 'react';
import './vision.scss';
import Typography from '@mui/material/Typography';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';
import { red, green, yellow } from '@mui/material/colors';

export default function Vision() {
  return (
    <div className="about">
      <div className="intro">
        <div className="intro-LS">
          <Typography
            className="tag"
            variant="overline"
            display="block"
            gutterBottom
          >
            What we do
          </Typography>
          <Typography
            className="title"
            variant="h3"
            gutterBottom
            component="div"
          >
            Perfect Solution For your Business
          </Typography>
        </div>
        <div className="intro-RS">
          <Typography className="intro-rs-descp" variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </div>
      </div>
      <div className="services">
        <div className="card">
          <div
            className="icon"
            style={{ backgroundColor: 'rgba(255, 160, 122, 0.502)' }}
          >
            <DesignServicesIcon sx={{ color: red[500] }} />
          </div>
          <div className="title">title1 here</div>
          <div className="desc">
            description here little bit more neque doloribus, cupiditate numquam
            dignissimos laborum
          </div>
          <div className="button">
            <Button variant="text" endIcon={<ArrowRightAltIcon />}>
              Learn More
            </Button>
          </div>
        </div>
        <div className="card">
          <div
            className="icon"
            style={{ backgroundColor: 'rgba(144, 238, 144, 0.5)' }}
          >
            <DesignServicesIcon sx={{ color: green[500] }} />
          </div>
          <div className="title">title2 here</div>
          <div className="desc">
            description here little bit more neque doloribus, cupiditate numquam
            dignissimos laborum
          </div>
          <div className="button">
            <Button variant="text" endIcon={<ArrowRightAltIcon />}>
              Learn More
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="icon" style={{ backgroundColor: '#ffffa9d7' }}>
            <DesignServicesIcon sx={{ color: yellow[500] }} />
          </div>
          <div className="title">title3 here</div>
          <div className="desc">
            description here little bit more neque doloribus, cupiditate numquam
            dignissimos laborum
          </div>
          <div className="button">
            <Button variant="text" endIcon={<ArrowRightAltIcon />}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
