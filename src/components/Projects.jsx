import { 
  Box, 
  Typography, 
  Grid, 
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button 
} from '@mui/material';

export default function Projects() {
  return (
    <Box 
      id="projects"
      sx={{ 
        textAlign: 'center', 
        py: 6,
        backgroundColor:'#FBF8CC'
      }}>
      <Typography variant="h2" fontWeight="bold">My Projects</Typography>
      <Grid container spacing={4} sx={{ px: 4, py: 8 }}>
        {[].map((id) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/project-sample.jpg"
                alt="Project image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Project Title {id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A short description of the project. What it does, what tech it uses.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="https://github.com">GitHub</Button>
                <Button size="small" href="#">Live Demo</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant='h5' color='text.secondary'>Currently working on projects</Typography>
    </Box>
  );
}
