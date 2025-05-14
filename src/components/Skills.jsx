import { 
  Box, 
  Typography,
  Grid,
  Paper,
} from '@mui/material';

export default function Skills() {
  return (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h4" gutterBottom>Skills</Typography>
      <Grid container spacing={3} justifyContent="center" mt={2}>
        {[
          'HTML', 
          'CSS', 
          'Java Script',
          'React', 
          'Node.js', 
          'Express.js',
          'ESP32',
          'Git',
          'C(Programming Language)',
          'Java',
          'Material UI',
          'ChatGPT',
          'React Hooks',
          'Python (Programming Language)',
          'Arduino'

        ].map((skill, idx) => (
          <Grid item key={idx}>
            <Paper elevation={3} sx={{ px: 4, py: 2 }}>
              <Typography>{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
