import { 
  Box, 
  Typography, 
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

export default function About() {
  return (
    <Box 
      id="about"
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
        <Typography sx={{textAlign:'left', color:"#F7F197"}} variant='h2' fontWeight={'bold'}>about.</Typography>
      </Box>
      <Box
        sx={{
          width:'70%',
          justifyContent:'left',
          marginTop:'1.5rem'
        }}
      >
        <Box sx={{width:'90%', textAlign:'left'}}>
          <Typography sx={{color:'#03045E'}}>
            I’m a passionate developer focused on frontend, robotics, and strength training. 
            I love building both web interfaces and hardware-driven projects.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display:'flex',
          flexDirection:'row-reverse',
          width:'70%',
          marginTop:'4rem'
        }}
      >
        <Box
          sx={{
            display:'flex',
            flexDirection:'column'
          }}
        >
          <Box
            sx={{
              wdith:'100%',
              display:'flex',
              flexDirection:'row-reverse'
            }}
          > 
            <Box width={"80%"}>
              <Typography sx={{color:'#03045E'}} textAlign={'left'} fontWeight={'bold'}><CircleIcon sx={{position:'relative', top:'0.4rem', right:'0.4rem', width:'0.6rem'}}/>2024-present</Typography>
              <Box>
                <Typography textAlign={'left'} paddingLeft={'0.6rem'} sx={{color:'#03045E'}}>
                Currently pursuing a Bachelor of Technology (B.Tech) in Mechanical Engineering at the National Institute of Technology (NIT) Jamshedpur. 
                I am in my first year, exploring opportunities in robotics, programming, and personal development.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
