import { Button, Typography } from '@mui/material';

export default function Logo() {
	return (
		<Button
			component='a'
			href='/'
			sx={{
				backgroundColor: 'primary.main',
				width: 64,
				height: 64,
				borderRadius: '0',
				textTransform: 'lowercase',
				color: 'inherit',
				'&:hover': {
					backgroundColor: 'primary.dark',
				},
			}}
		>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'Comicool',
				}}
			>
				q
			</Typography>
		</Button>
	);
}
