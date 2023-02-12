import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import BarebnbImage from '../images/barebnb.png'

function Copyright() {
  const person = {
    firstName: 'Ethan',
    lastname: 'Sauri',
    linkedin: ''
  }
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

const projectCards = [
  {
    id: 1,
    projectName: 'Barebnb',
    projectRepo: 'https://github.com/EthanSafari/Barebnb',
    projectLiveSite: 'https://barebnb.onrender.com/',
    projectImage: BarebnbImage,
    projectDescription: `This website provides an experience similar to airbnb as its a clone of airbnb. Born out of concept, the design is similar to airbnb, without providing much of the color.`
  }
]

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h5" color="inherit" noWrap>
            A Personal Look Into Ethan Sauri
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About Ethan
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Experienced college and decided It was to slow for me, so I then birthed my own business, eventually deciding to dive into tech to create something greater in the fast moving, ever growing tech environment. This led me to take on one of the greatest challenges that I have ever experienced at App Academy. Here I created an airbnb clone over a two-week period using, at the time, new technologies to me such as React and Sequelize to make this project exclusively JavaScript. Took a week to learn the vary basics of Python, and found that Skills transferred. Collaborated in a team setting to create a discord clone, learning about and implementing websockets through Socket.io in order to provide a seem-less user experience. Created a project using a React frontend, and a Flask backend with exceptional performance in less than a week, which gave me extra time to help fellow developers debug and provide creative solutions to problems they were experiencing.
            </Typography>
            <Typography variant='subtitle1' align="center" color="text.secondary" paragraph>
            Javascript | Node.js | Express.js | React.js | React-Redux | SQL | Python3 | Flask | SQLAlchemy | Git | Heroku | HTML5 | CSS3
          </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projectCards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.projectImage}
                    alt={card.projectName}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.projectName}
                    </Typography>
                    <Typography>
                      {card.projectDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link href={card.projectLiveSite}>LIVE</Link></Button>
                    <Button size="small">Repo</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
