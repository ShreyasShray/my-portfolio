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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        textAlign: 'center',
        px: 2,
        backgroundColor:'#FBF8CC'
      }}
    >
      <Box sx={{
        width:'70%'
      }}>
        <Typography sx={{textAlign:'left', color:"#F7F197"}} variant='h2' fontWeight={'bold'}>projects.</Typography>
      </Box>
      <Box sx={{
        width:'70%',
        marginTop:'1.5rem'
      }}>
        <Typography textAlign={'left'}>
          Working on Projects...
        </Typography>
      </Box>
    </Box>
  );
}
