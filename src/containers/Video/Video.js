import { useRef, useState } from 'react';

import { videos } from '../../constants';
import { Box, IconButton } from '@mui/material';
import { PauseCircleOutline, PlayCircleOutline } from '@mui/icons-material';

export function Video() {
	const [playVideo, setPlayVideo] = useState(false);
	const vidRef = useRef();

	const flex = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	const handleVideo = () => {
		setPlayVideo(!playVideo);
		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	};

	return (
		<Box sx={{ position: 'relative', height: '100vh' }}>
			<Box
				component='video'
				ref={vidRef}
				src={videos.wine}
				type='video/mp4'
				loop
				controls={false}
				muted
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				}}
			/>
			<Box
				onClick={handleVideo}
				sx={[
					flex,
					{
						position: 'absolute',
						inset: '0',
						background: 'rgba(49,49,49,0.3)',
					},
				]}
			>
				<IconButton
					fontSize='30px'
					sx={{ color: 'white' }}
				>
					{playVideo ? (
						<PauseCircleOutline sx={{ fontSize: '5rem' }} />
					) : (
						<PlayCircleOutline sx={{ fontSize: '5rem' }} />
					)}
				</IconButton>
			</Box>
		</Box>
	);
}
