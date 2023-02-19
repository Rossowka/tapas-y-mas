import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Cards } from '../../components';
import { CustomMenuList } from '../../components/Menus/CustomMenuList';

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
					sx={{
						textTransform: 'capitalize',
						fontFamily: 'Comicool',
						lineHeight: 5,
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
					letterSpacing: '0.5rem',
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
						gap: 40,
						flexDirection: { xs: 'column', sm: 'row' },
						position: 'relative',
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
						maxWidth: '100%',
						zIndex: 5,
						position: 'absolute',
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
