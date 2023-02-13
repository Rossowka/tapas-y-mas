import { Container } from '@mui/material';

export default function HeroImage({ image }) {
	return (
		<Container
			maxWidth={false}
			sx={{
				height: '100vh',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: `linear-gradient(rgba(44,44,42,0.5), rgba(44,44,42,0.5)), url(${image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		/>
	);
}
