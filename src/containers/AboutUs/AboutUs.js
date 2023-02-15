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
		<Container sx={[flexCenter, { position: 'relative' }]}>
			<Container sx={[flexCenter, { position: 'absolute', inset: 0 }]}>
				<Box
					component='img'
					sx={{ height: '50vh', zIndex: 0 }}
					src={images.q}
					alt='q letter'
				/>
			</Container>
			<Container sx={[flexCenter, { zIndex: 10 }]}>
				<Box
					sx={{
						flex: 1,
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'flex-end',
						flexDirection: 'column',
						textAlign: 'right',
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
					sx={{ height: '80vh', my: 2, mx: 4 }}
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
