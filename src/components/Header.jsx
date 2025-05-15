import {
  Box,
  Typography,
  Button,
  IconButton
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-scroll';
import { useMediaQuery } from '@mui/material';


const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return(
    <>
      <Box
        sx={{
          backgroundColor:'#F7F197',
          width:'100%',
          display:'flex',
          flexDirection:isMobile?'column':'row',
          justifyContent:'space-between',
          alignItems:'center',
          paddingTop:'1rem',
        }}
      >
        <Box sx={{
          paddingLeft:isMobile?'0':'3rem'
        }}>
          <Typography color='#03045E'  variant='h5' fontWeight={'bold'}>Shreyas Shray</Typography>
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          width:"14rem"
        }}>
          <Box>
            <Link to="about" smooth={true} duration={800}>
              <Button color='#03045E' sx={{fontWeight:'590'}} variant="text">About</Button>
            </Link>
          </Box>
          <Box>
            <Link to="projects" smooth={true} duration={800}>
              <Button color='#03045E' sx={{fontWeight:'590'}} variant="text">Projects</Button>
            </Link>
          </Box>
          <Box>
            <Link to="skills" smooth={true} duration={800}>
              <Button color='#03045E' sx={{fontWeight:'590'}} variant="text">Skills</Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          width:'6rem',
          paddingRight:'3rem'
        }}>
          <Box>
            <IconButton 
              onClick={()=>{
                window.open("https://www.linkedin.com/in/shreyas-shray-8535b8228", "_blank")
              }}
            >
              <LinkedInIcon/>
            </IconButton>
          </Box>
          <Box>
            <IconButton
              onClick={()=>{
                window.open("https://github.com/ShreyasShray", "_blank")
              }}
            >
              <GitHubIcon/>
            </IconButton>
          </Box>
          <Box>
            <IconButton
              onClick={()=>{
                window.open("https://www.instagram.com/shreyas_shray/", "_blank")
              }}
            >
              <InstagramIcon/>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Header;