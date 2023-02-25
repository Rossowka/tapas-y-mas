import React from 'react';

import { Box, Container, Typography } from '@mui/material';
import { images, heroContent } from '../../constants';
import { CallToAction, HeroImage, Slogan } from '../../components/Hero';

export function Header() {
	const flexCenter = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	return (
		<Box
			id='home'
			sx={[
				flexCenter,
				{
					position: 'relative',
				},
			]}
		>
			<HeroImage image={images.bgImage} />
			<Container
				sx={[
					flexCenter,
					{
						position: 'absolute',
						height: '100%',
					},
				]}
			>
				<Container
					sx={[
						flexCenter,
						{
							textAlign: 'center',
							textShadow: '1px 1px 1px rgb(0,0,0,0.5)',
							flexBasis: '60%',
							justifyContent: 'end',
							flexDirection: 'column',
						},
					]}
				>
					<Typography
						variant='h2'
						component='h2'
						sx={{ letterSpacing: '0.04em' }}
					>
						{heroContent['welcome-p1']}
					</Typography>
					<Slogan heroContent={heroContent} />
					<CallToAction heroContent={heroContent} />
				</Container>
			</Container>
		</Box>
	);
}
