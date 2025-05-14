import { Box, Typography, Grid, Avatar } from '@mui/material';

export default function About() {
  return (
    <Grid container spacing={4} alignItems="center" sx={{ px: 4, py: 8 }}>
      <Grid item xs={12} md={4}>
        <Avatar
        src='/../assets/profile.png'
        sx={{ width: 200, height: 200, margin: 'auto' }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary">
          I’m a passionate developer focused on frontend, robotics, and strength training. I love building both web interfaces and hardware-driven projects.
        </Typography>
      </Grid>
    </Grid>
  );
}
