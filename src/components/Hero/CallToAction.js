import { Box, Button } from '@mui/material';

export default function CallToAction({ heroContent }) {
	return (
		<Box
			sx={{
				display: 'flex',
				gap: 2,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Button
				variant='contained'
				color='primary'
			>
				{heroContent['primary-action']}
			</Button>
			<Button
				variant='outlined'
				color='secondary'
				sx={{ backdropFilter: 'contrast(10%)' }}
			>
				{heroContent['secondary-action']}
			</Button>
		</Box>
	);
}
