import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function ProjectCard({ item }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', marginBottom:'2rem'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {item.projectName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {item.projectDescription}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 2 }}>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
            <Button size="small"><Link href={item.projectLiveSite}>LIVESITE</Link></Button>
            <Button size="small"><Link href={item.projectRepo}>Repo</Link></Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ maxWidth: '500px', borderLeft: '2px solid rgba(0, 0, 0, .3)' }}
        image={item.projectImage}
        alt="Live from space album cover"
      />
    </Card>
  );
}
