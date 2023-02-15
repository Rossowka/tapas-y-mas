import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Container } from '@mui/system';
import { images, aboutContent } from '../../constants';

export function AboutUs() {
	const flexCenter = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};
	return (
		<Container sx={[flexCenter, { position: 'relative', my: 5 }]}>
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
			<Container
				sx={[
					flexCenter,
					{
						zIndex: 10,
						flexDirection: 'row',
						maxWidth: '100%',
						flexWrap: 'wrap',
						justifyContent: { xs: 'center', sm: 'space-between', md: 'center' },
					},
				]}
			>
				<Box
					sx={{
						flex: 1,
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'flex-end',
						flexDirection: 'column',
						textAlign: 'right',
						minWidth: '205px',
						maxWidth: '305px',
						my: { xs: 10, sm: 0 },
					}}
				>
					<Typography
						variant='h5'
						component='h5'
						color='primary'
						sx={{ letterSpacing: '0.04em', textTransform: 'uppercase' }}
					>
						{aboutContent['left-heading']}
					</Typography>
					<img
						src={images.olives}
						alt='olives'
					/>
					<Typography
						color={grey[200]}
						sx={{ my: 2 }}
					>
						{aboutContent['left-body-p1']}
					</Typography>
					<Typography
						color={grey[200]}
						sx={{ my: 1 }}
					>
						{aboutContent['left-body-p2']}
					</Typography>
				</Box>
				<Box
					component='img'
					sx={{
						maxHeight: '90vh',
						maxWidth: { xs: '100%', sm: '50%' },
						my: { xs: 5, sm: 2 },
						mx: { xs: 2, md: 5 },
					}}
					src={images.platter}
					alt='platter'
				/>
				<Box
					sx={{
						flex: 1,
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						flexDirection: 'column',
						textAlign: 'left',
						minWidth: '205px',
						maxWidth: '305px',
						my: { xs: 10, sm: 0 },
					}}
				>
					<Typography
						color='primary'
						variant='h5'
						component='h5'
						sx={{ letterSpacing: '0.04em', textTransform: 'uppercase' }}
					>
						{aboutContent['right-heading']}
					</Typography>
					<img
						src={images.olives}
						alt='olives'
					/>
					<Typography
						color={grey[200]}
						sx={{ my: 2 }}
					>
						{aboutContent['right-body-p1']}
					</Typography>
					<Typography
						color={grey[200]}
						sx={{ my: 1 }}
					>
						{aboutContent['right-body-p2']}
					</Typography>
				</Box>
			</Container>
		</Container>
	);
}
