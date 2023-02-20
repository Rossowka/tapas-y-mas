import { Box, Divider, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export function MenuEntry({ item, index }) {
	return (
		<>
			<Box
				key={item.name + index}
				sx={{ my: 2 }}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: 2,
					}}
				>
					<Typography sx={{ textTransform: 'uppercase', flex: 1 }}>
						{item.name}
					</Typography>
					<Box
						sx={{
							width: '50px',
							height: '1px',
							background: 'white',
						}}
					/>
					<Typography>{item.price} €</Typography>
				</Box>
				<Typography color={grey[500]}>{item.tags}</Typography>
			</Box>
			<Divider color={grey[700]} />
		</>
	);
}
