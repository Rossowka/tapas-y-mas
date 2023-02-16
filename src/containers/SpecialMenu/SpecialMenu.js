import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Cards } from '../../components';

import { images, wineSpecial, mealSpecial } from '../../constants';

export function SpecialMenu() {
	const flexCenter = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};
	return (
		<Container sx={{ my: 5 }}>
			<Box sx={{ textAlign: 'center' }}>
				<Typography
					sx={{ textTransform: 'capitalize', fontFamily: 'Comicool' }}
				>
					Your Journey of Taste
				</Typography>
				<img
					src={images.olives}
					alt='olives'
				/>
			</Box>
			<Cards />
			<Typography
				variant='h5'
				component='h5'
				color='primary'
				sx={{
					letterSpacing: '0.5rem',
					textTransform: 'uppercase',
					my: 5,
					textAlign: 'center',
				}}
			>
				Our Specials
			</Typography>

			<Box
				sx={[
					flexCenter,
					{ gap: 5, flexDirection: { xs: 'column', sm: 'row' } },
				]}
			>
				<Container sx={[flexCenter, { flexDirection: 'column' }]}>
					<Typography>Menu</Typography>
					<Box>
						{mealSpecial.map((meal, index) => (
							<Typography key={meal.name + index}>{meal.name}</Typography>
						))}
					</Box>
				</Container>
				<Container sx={flexCenter}>
					<Box
						component='img'
						sx={{
							maxHeight: '50vh',
							maxWidth: '100%',
							zIndex: 0,
						}}
						src={images.decanter}
						alt='menu image - decanter'
					/>
				</Container>
				<Container sx={[flexCenter, { flexDirection: 'column' }]}>
					<Typography>Wine</Typography>
					<Box>
						{wineSpecial.map((wine, index) => (
							<Typography key={wine.name + index}>{wine.name}</Typography>
						))}
					</Box>
				</Container>
			</Box>
		</Container>
	);
}
