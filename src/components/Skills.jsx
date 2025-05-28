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
import postmanImg from '../assets/postman.png';
import appwriteImg from '../assets/appwrite.png';
import solidworksImg from '../assets/solidworks.png';
import './Skills.css';


const CustomCard = ({url, title}) => {
  return (
    <Box className='skill-card'>
      <Box className='card-img-box'>
        <img src={url}/>
      </Box>
      <Box>
        {useMediaQuery('(max-width:600px)')?
        (<Typography variant='caption'>
          {title}
        </Typography>):(<Typography variant='body2'>
          {title}
        </Typography>)}
      </Box>
    </Box>
  );
}

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
          marginTop:'2rem',
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'center'
        }}
      >
        <CustomCard url={htmlImg} title={"HTML"} />
        <CustomCard url={cssImg} title={"CSS"} />
        <CustomCard url={jsImg} title={"JavaScript"} />
        <CustomCard url={reactImg} title={"React"} />
        <CustomCard url={expressImg} title={"Express"} />
        <CustomCard url={nodejsImg} title={"Nodejs"} />
        <CustomCard url={postmanImg} title={"Postman"} />
        <CustomCard url={appwriteImg} title={"Appwrite"} />
        <CustomCard url={gitImg} title={"Git"} />
        <CustomCard url={githubImg} title={"Github"} />
        <CustomCard url={cImg} title={"C"} />
        <CustomCard url={cppImg} title={"C++"} />
        <CustomCard url={javaImg} title={"Java"} />
        <CustomCard url={pythonImg} title={"Python"} />
        <CustomCard url={muiImg} title={"MUI"} />
        <CustomCard url={bootstrapImg} title={"BootStrap"} />
        <CustomCard url={vercelImg} title={"Vercel"} />
        <CustomCard url={arduinoImg} title={"Arduino"} />
        <CustomCard url={iotImg} title={"IOT"} />
        <CustomCard url={chatgptImg} title={"ChatGPT"} />
        <CustomCard url={solidworksImg} title={"SolidWorks"} />
      </Box>
    </Box>
  );
}
