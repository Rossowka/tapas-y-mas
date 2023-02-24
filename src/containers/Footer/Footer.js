import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export function Footer() {
	return (
		<AppBar
			position='fixed'
			component='footer'
			sx={{
				top: 'auto',
				bottom: 0,
				// backgroundColor: 'rgb(12, 12, 12, 0.5)',
				background: 'none',
				// backdropFilter: 'blur(2px)',
				boxShadow: 'none',
			}}
		>
			<Container>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
						textShadow: '1px 1px 1px rgb(0,0,0,0.5)',
					}}
				>
					<Typography>Footer</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
