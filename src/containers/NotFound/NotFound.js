import { Typography } from '@mui/material';

export function NotFound() {
	return (
		<Typography
			variant='h1'
			component='h1'
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				width: '100%',
			}}
		>
			Page Not Found
		</Typography>
	);
}
