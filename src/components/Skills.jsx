import { 
  Box, 
  Typography,
  Grid,
  Paper,
  useMediaQuery,
} from '@mui/material';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import jsImg from '../assets/js.png';
import reactImg from '../assets/react.png';
import nodejsImg from '../assets/nodejs.png';
import expressImg from '../assets/express.png';
import arduinoImg from '../assets/arduino.png';
import gitImg from '../assets/git.png';
import githubImg from '../assets/github.png';
import iotImg from '../assets/iot.png';
import vercelImg from '../assets/vercel.png';
import pythonImg from '../assets/python.png';
import chatgptImg from '../assets/chatgpt.png';
import bootstrapImg from '../assets/bootstrap.png';
import muiImg from '../assets/mui.png';
import javaImg from '../assets/java.png';
import cImg from '../assets/c.png';
import cppImg from '../assets/cpp.png';

export default function Skills() {
  return (
    <Box 
      id="skills"
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
    }}>
      <Box sx={{
        width:'70%'
      }}>
        <Typography sx={{textAlign:'left', color:"#F7F197"}} variant='h2' fontWeight={'bold'}>skills.</Typography>
      </Box>
      <Box
        sx={{
          width:'70%',
          marginTop:'2rem'
        }}
      >
        <img src={htmlImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={cssImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={jsImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={reactImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={nodejsImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={expressImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={gitImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={githubImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={cImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={cppImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={javaImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={pythonImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={muiImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={bootstrapImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={vercelImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={arduinoImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={iotImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
        <img src={chatgptImg} style={{width:useMediaQuery('(max-width:600px)')?'2.5rem':'4rem', height:'auto', margin:'0.6rem'}} />
      </Box>
    </Box>
  );
}
