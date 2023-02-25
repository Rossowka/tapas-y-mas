import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Cards, CustomMenuList } from '../../components';

import { images, wineSpecial, mealSpecial } from '../../constants';

export function SpecialMenu() {
	const flexCenter = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};
	return (
		<Container
			id='menu'
			sx={{ my: 5 }}
		>
			<Box sx={{ textAlign: 'center' }}>
				<Typography
					sx={{
						textTransform: 'capitalize',
						fontFamily: 'Comicool',
						lineHeight: { xs: 2, sm: 5 },
						letterSpacing: '0.25em',
					}}
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
					letterSpacing: { xs: '0.25rem', sm: '0.5rem' },
					textTransform: 'uppercase',
					mt: 10,
					textAlign: 'center',
					fontWeight: 600,
					lineHeight: 5,
				}}
			>
				Our Specials
			</Typography>

			<Box
				sx={[
					flexCenter,
					{
						gap: { xs: 10, md: 2, lg: 0 },
						flexDirection: { xs: 'column', md: 'row' },
						position: 'relative',
						width: '100%',
					},
				]}
			>
				<CustomMenuList
					title='Tapas'
					data={mealSpecial}
				/>
				<Box
					component='img'
					sx={{
						maxHeight: '50vh',
						maxWidth: { xs: '100%', md: '30%' },
						zIndex: 5,
					}}
					src={images.decanter}
					alt='menu image - decanter'
				/>
				<Container sx={[flexCenter, { position: 'absolute', inset: 0 }]}>
					<Box
						component='img'
						sx={{
							maxHeight: '50vh',
							maxWidth: '100%',
							zIndex: 0,
						}}
						src={images.q}
						alt='q letter'
					/>
				</Container>
				<CustomMenuList
					title='Wine'
					data={wineSpecial}
				/>
			</Box>
		</Container>
	);
}
