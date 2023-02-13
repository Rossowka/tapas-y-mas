import { Box, Typography } from '@mui/material';

export default function Slogan({ heroContent }) {
	const flex = {
		display: 'flex',
		whiteSpace: 'nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '10px',
	};

	return (
		<Box sx={flex}>
			{heroContent['welcome-p2'].map((item, index) => (
				<Box
					key={`welcome-p2-${index}`}
					sx={flex}
				>
					<Typography
						variant='h5'
						component='h5'
						sx={{
							color: '#fff',
							lineHeight: '120px',
						}}
					>
						{item}
					</Typography>
					{index !== heroContent['welcome-p2'].length - 1 && (
						<Box
							key={`welcome-box-${index}`}
							sx={{
								height: '10px',
								width: '10px',
								backgroundColor: 'primary.main',
								boxShadow: '1px 1px 1px rgb(0,0,0,0.5)',
							}}
						/>
					)}
				</Box>
			))}
		</Box>
	);
}
