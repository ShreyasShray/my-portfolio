import { 
  Box, 
  Typography, 
  Button,
  Avatar,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.png';

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
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        textAlign: 'center',
        px: 2,
        backgroundColor:'#FBF8CC'
      }}
    >
      <Box 
        sx={{
          display:'flex',
          width:'80%',
          flexDirection:useMediaQuery('(max-width:980px)')?'column':'row',
          justifyContent:'space-between',
        }}
      >
        <Box
          sx={{
            marginBottom:'2rem'
          }}
        >
          <Typography sx={{textAlign:'left', color:'#03045E'}} >Hello, I'm Shreyas,</Typography>
          {
            useMediaQuery('(max-width:600px)')?(
              <Typography variant='h4' textAlign={'left'} fontWeight={'bold'} color='#03045E'>
                Web Developer<br/>
                Robotics Enthusiast<br/>
                Gym Rat<br/>
              </Typography>
            ):(
              <Typography variant='h2' textAlign={'left'} fontWeight={'bold'} color='#03045E'>
                Web Developer<br/>
                Robotics Enthusiast<br/>
                Gym Rat<br/>
              </Typography>
            )
          }
          <Typography sx={{textAlign:'left', color:"#03045E"}} >NIT Jamshedpur</Typography>
        </Box>
        <Box>
          <Avatar
            src={profileImg }
            sx={{ width: 250, height: 250, margin: 'auto' }}
          />
        </Box>
      </Box>
      {/* <Typography variant="h2" fontWeight={700}>
        Hi, I’m Shreyas 👋
      </Typography>
      <Typography variant="h5" color="text.secondary" mt={2}>
        Web Developer | Robotics Enthusiast | Gym Rat
      </Typography>
      <Link to="contact" smooth={true} duration={800}>
        <Button variant="contained" sx={{ mt: 4 }}>
          Contact Me
        </Button>
      </Link> */}
    </Box>
  );
}
