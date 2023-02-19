import { Container } from '@mui/material';
import MenuCard from './MenuCard';
import { cardItems } from '../../constants';

export function Cards() {
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				gap: 5,
				flexDirection: { xs: 'column', sm: 'row' },
				my: 10,
			}}
		>
			{cardItems.map((item, index) => (
				<MenuCard
					key={item.title}
					cardItems={cardItems[index]}
				/>
			))}
		</Container>
	);
}
