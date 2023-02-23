import { Box, Container, Typography } from '@mui/material';
import { MenuEntry } from './MenuEntry';

export function CustomMenuList({ title, data }) {
	const flexCenter = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	return (
		<Container
			sx={[
				flexCenter,
				{
					flexDirection: 'column',
					zIndex: 10,
					flex: 1,
					alignSelf: 'flex-start',
				},
			]}
		>
			<Typography
				sx={{
					fontFamily: 'Comicool',
					lineHeight: 5,
					letterSpacing: '0.25em',
				}}
			>
				{title}
			</Typography>
			<Box sx={{ width: '100%' }}>
				{data.map((item, index) => (
					<MenuEntry
						item={item}
						index={index}
						key={index + item}
					/>
				))}
			</Box>
		</Container>
	);
}
