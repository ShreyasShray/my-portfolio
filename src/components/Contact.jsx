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
				bgcolor: '#e0f7fa',
				textAlign: 'center',
				py: 8,
				px: 2,
			}}
		>
			<Typography variant="h4" gutterBottom>
				Get In Touch
			</Typography>
			<Typography variant="body1" mb={2}>
				Drop me a message at <strong>shreyas@email.com</strong>
			</Typography>
			<Button variant="contained" href="mailto:shreyas@email.com">
				Say Hello
			</Button>
		</Box>
  );
}
