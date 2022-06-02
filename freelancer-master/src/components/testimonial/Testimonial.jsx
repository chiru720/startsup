import React from 'react';
import './testimonial.scss';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Glide from '@glidejs/glide';

new Glide('.images', {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  gap: 40,
}).mount();

export default function Testimonial() {
  return (
    <div className="testimonial">
      <Typography
        sx={{ color: '#50b475', fontWeight: '600', fontSize: '.9rem' }}
        variant="overline"
        display="block"
        gutterBottom
      >
        Testimonial
      </Typography>
      <Typography
        sx={{ width: '500px', fontWeight: '600' }}
        className="testimonial-heading"
        variant="h3"
        gutterBottom
        component="div"
      >
        Want our customers says about us
      </Typography>
      <div className="cards">
        <div class="images glide">
          <div class="glide__track" data-glide-el="track">
            <ui class="glide__slides">
              <li class="glide__slide">
                <Card
                  sx={{
                    width: '25rem',
                    padding: '2rem 2rem 0',
                    borderRadius: '10px',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.01)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <WorkspacePremiumIcon
                        sx={{
                          fontSize: '3rem',
                          color: '#50b475',
                          paddingBottom: '1rem',
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, color: '#444' }}
                      color="text.secondary"
                    >
                      Iam trusted my company my company in allies and the result
                      has been satisfying because my company has growing.
                    </Typography>
                    <Typography variant="body2">asdasdasd</Typography>
                    <Box sx={{ padding: '1rem 0 0' }}>
                      <Rating
                        name="text-feedback"
                        value={4.5}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Box>
                  </CardContent>
                </Card>
              </li>
              <li class="glide__slide">
                <Card
                  sx={{
                    width: '25rem',
                    padding: '2rem 2rem 0',
                    borderRadius: '10px',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.01)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <WorkspacePremiumIcon
                        sx={{
                          fontSize: '3rem',
                          color: '#50b475',
                          paddingBottom: '1rem',
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, color: '#444' }}
                      color="text.secondary"
                    >
                      Iam trusted my company my company in allies and the result
                      has been satisfying because my company has growing.
                    </Typography>
                    <Typography variant="body2">asdasdasd</Typography>
                    <Box sx={{ padding: '1rem 0 0' }}>
                      <Rating
                        name="text-feedback"
                        value={4.5}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Box>
                  </CardContent>
                </Card>
              </li>
              <li class="glide__slide">
                <Card
                  sx={{
                    width: '25rem',
                    padding: '2rem 2rem 0',
                    borderRadius: '10px',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.01)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <WorkspacePremiumIcon
                        sx={{
                          fontSize: '3rem',
                          color: '#50b475',
                          paddingBottom: '1rem',
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, color: '#444' }}
                      color="text.secondary"
                    >
                      Iam trusted my company my company in allies and the result
                      has been satisfying because my company has growing.
                    </Typography>
                    <Typography variant="body2">asdasdasd</Typography>
                    <Box sx={{ padding: '1rem 0 0' }}>
                      <Rating
                        name="text-feedback"
                        value={4.5}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Box>
                  </CardContent>
                </Card>
              </li>
              <li class="glide__slide">
                <Card
                  sx={{
                    width: '25rem',
                    padding: '2rem 2rem 0',
                    borderRadius: '10px',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.01)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <WorkspacePremiumIcon
                        sx={{
                          fontSize: '3rem',
                          color: '#50b475',
                          paddingBottom: '1rem',
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, color: '#444' }}
                      color="text.secondary"
                    >
                      Iam trusted my company my company in allies and the result
                      has been satisfying because my company has growing.
                    </Typography>
                    <Typography variant="body2">asdasdasd</Typography>
                    <Box sx={{ padding: '1rem 0 0' }}>
                      <Rating
                        name="text-feedback"
                        value={4.5}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Box>
                  </CardContent>
                </Card>
              </li>
              <li class="glide__slide">
                <Card
                  sx={{
                    width: '25rem',
                    padding: '2rem 2rem 0',
                    borderRadius: '10px',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.01)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <WorkspacePremiumIcon
                        sx={{
                          fontSize: '3rem',
                          color: '#50b475',
                          paddingBottom: '1rem',
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, color: '#444' }}
                      color="text.secondary"
                    >
                      Iam trusted my company my company in allies and the result
                      has been satisfying because my company has growing.
                    </Typography>
                    <Typography variant="body2">asdasdasd</Typography>
                    <Box sx={{ padding: '1rem 0 0' }}>
                      <Rating
                        name="text-feedback"
                        value={4.5}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Box>
                  </CardContent>
                </Card>
              </li>
              <li class="glide__slide">
                <Card
                  sx={{
                    width: '25rem',
                    padding: '2rem 2rem 0',
                    borderRadius: '10px',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.01)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <WorkspacePremiumIcon
                        sx={{
                          fontSize: '3rem',
                          color: '#50b475',
                          paddingBottom: '1rem',
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, color: '#444' }}
                      color="text.secondary"
                    >
                      Iam trusted my company my company in allies and the result
                      has been satisfying because my company has growing.
                    </Typography>
                    <Typography variant="body2">asdasdasd</Typography>
                    <Box sx={{ padding: '1rem 0 0' }}>
                      <Rating
                        name="text-feedback"
                        value={4.5}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Box>
                  </CardContent>
                </Card>
              </li>
              <li class="glide__slide">
                <Card
                  sx={{
                    width: '25rem',
                    padding: '2rem 2rem 0',
                    borderRadius: '10px',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.01)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <WorkspacePremiumIcon
                        sx={{
                          fontSize: '3rem',
                          color: '#50b475',
                          paddingBottom: '1rem',
                        }}
                      />
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, color: '#444' }}
                      color="text.secondary"
                    >
                      Iam trusted my company my company in allies and the result
                      has been satisfying because my company has growing.
                    </Typography>
                    <Typography variant="body2">asdasdasd</Typography>
                    <Box sx={{ padding: '1rem 0 0' }}>
                      <Rating
                        name="text-feedback"
                        value={4.5}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Box>
                  </CardContent>
                </Card>
              </li>
            </ui>
          </div>
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              <i class="fas fa-arrow-left"></i>
            </button>

            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
