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
					}}
				>
					<Typography sx={{ textTransform: 'uppercase' }}>
						{item.name}
					</Typography>
					<Box
						sx={{
							width: '90px',
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
