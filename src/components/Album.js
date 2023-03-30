import * as React from 'react';
import { Avatar } from '@mui/material';
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

import BarebnbImage from '../images/barebnb.png';
import DithcordImage from '../images/dithcord.png';
import BibliothecaImage from '../images/bibliotheca.png';
import ProfileImage from '../images/profile_image.jpg';

import Resume from '../documents/Resume.docx.pdf';

import ProjectCard from './ProjectCard';

const person = {
  firstName: 'Ethan',
  lastName: 'Sauri',
  linkedin: 'https://www.linkedin.com/in/ethan-sauri-57a9b9240/',
  github: 'https://github.com/EthanSafari',
  email: 'ethansauri@outlook.com',
  personImage: ProfileImage,
  resume: Resume,
};

const cards = [1, 2, 3];

const projectCards = [
  {
    id: 1,
    projectName: 'Barebnb',
    projectRepo: 'https://github.com/EthanSafari/Barebnb',
    projectLiveSite: 'https://barebnb.onrender.com/',
    projectImage: BarebnbImage,
    projectDescription: `This website provides an experience similar to airbnb as its a clone of airbnb. Born out of concept, the design is similar to airbnb, without providing much of the color.`
  },
  {
    id: 2,
    projectName: 'Dithcord',
    projectRepo: 'https://github.com/EthanSafari/Dithcord',
    projectLiveSite: 'https://dithcord.onrender.com/',
    projectImage: DithcordImage,
    projectDescription: `Mike Tyson themed Discord clone that implements websockets via socketio for live chat functionality.`
  },
  {
    id: 3,
    projectName: 'Bibliotheca',
    projectRepo: 'https://github.com/EthanSafari/Bibliotheca',
    projectLiveSite: 'https://bibliotheca.onrender.com',
    projectImage: BibliothecaImage,
    projectDescription: `Currently a note-taking application with plans to evolve into a life organizing application that is inspired by Evernote.`
  }
];

const theme = createTheme();

export default function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar
        sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography variant="h5" color="inherit" noWrap>
            1 (727) 238-9292
          </Typography>
          <Typography variant="h5" color="inherit" noWrap>
            {person.email}
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
            <Container
            sx={{ display:'flex', justifyContent:'center', marginBottom:'2rem'}}>
            <Avatar
            sx={{ width: 200, height: 200 }}
            alt='profile-image'
            src={person.personImage} />
            </Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About {person.firstName} {person.lastName}
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              Experienced college and decided It was to slow for me, so I then birthed my own business, eventually deciding to dive into tech to create something greater in the fast moving, ever growing tech environment. This led me to take on one of the greatest challenges that I have ever experienced at App Academy. Here I created an airbnb clone over a two-week period using, at the time, new technologies to me such as React and Sequelize to make this project exclusively JavaScript. Took a week to learn the vary basics of Python, and found that Skills transferred. Collaborated in a team setting to create a discord clone, learning about and implementing websockets through Socket.io in order to provide a seem-less user experience. Created a project using a React frontend, and a Flask backend with exceptional performance in less than a week, which gave me extra time to help fellow developers debug and provide creative solutions to problems they were experiencing.
            </Typography>
          </Container>
          <Container
          sx={{ pt: 4 }}
          maxWidth="sm">
          <Typography
            variant="h6"
            align="center"
            color="text.primary"
            gutterTop
          >
            TECHNICAL SKILLS
          </Typography>
          <Typography variant='subtitle1' align="center" color="text.secondary" paragraph>
            Javascript | Node.js | Express.js | React.js | React-Redux | SQL | Python3 | Flask | SQLAlchemy | Git | Heroku | HTML5 | CSS3
          </Typography>
          </Container>
            <Container>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={1}
                justifyContent="center"
              >
                <Button variant="contained"><Link href={person.linkedin} color="inherit">Linkedin</Link></Button>
                <Button variant="contained"><Link href={person.github} color="inherit">Github</Link></Button>
                <Button variant="contained"><Link href={person.resume} color="inherit" download>Resume</Link></Button>
              </Stack>
            </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projectCards.map((card) => (
              <ProjectCard item={card} />
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Thank You For Your Interest!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          This site was made with React, and Material UI. If you like what you see here, feel free to contact me!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
