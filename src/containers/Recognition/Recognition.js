import { Avatar, Container, Stack } from '@mui/material';
import { awards } from '../../constants';

export function Recognition() {
	return (
		<Container
		id='awards'
			sx={{
				flexGrow: 1,
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Stack
				direction='row'
				spacing={{ sm: 4 }}
				sx={{
					width: '100%',
					alignItems: { xs: 'center', md: 'flex-start' },
					justifyContent: { xs: 'space-between', sm: 'flex-start' },
				}}
			>
				{awards.map((item) => (
					<Avatar
						key={item.imgUrl}
						src={item.imgUrl}
						alt={item.title}
						sx={{ width: 70, height: 70, backgroundColor: '#fff' }}
					/>
				))}
			</Stack>
		</Container>
	);
}
