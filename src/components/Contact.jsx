import { 
	Box, 
	Typography,
	Button
} from '@mui/material';

export default function Contact() {
  return (
		<Box
			id="contact"
			name="contact"
			sx={{
				backgroundColor:'#FBF8CC',
				textAlign: 'center',
				py: 8,
				px: 2,
			}}
		>
			<Typography variant="h4" gutterBottom>
				Get In Touch
			</Typography>
			<Typography variant="body1" mb={2}>
				Drop me a message at <strong>shreyasshray94308@email.com</strong>
			</Typography>
			<Button variant="contained" href="mailto:shreyasshray94308@email.com">
				Say Hello
			</Button>
		</Box>
  );
}
