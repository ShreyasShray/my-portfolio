import { 
  Box, 
  Typography, 
  Button 
} from '@mui/material';
import { Link } from 'react-scroll';

export default function Hero() {

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#f5f5f5',
        textAlign: 'center',
        px: 2,
        backgroundColor:'#FBF8CC'
      }}
    >
      <Typography variant="h2" fontWeight={700}>
        Hi, I’m Shreyas 👋
      </Typography>
      <Typography variant="h5" color="text.secondary" mt={2}>
        Web Developer | Robotics Enthusiast | Gym Rat
      </Typography>
      <Link to="contact" smooth={true} duration={800}>
        <Button variant="contained" sx={{ mt: 4 }}>
          Contact Me
        </Button>
      </Link>
    </Box>
  );
}
