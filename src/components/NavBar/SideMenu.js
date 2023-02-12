import {
	Box,
	Container,
	Divider,
	Drawer,
	IconButton,
	Toolbar,
} from '@mui/material';
import { LinkList } from './LinkList';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export function SideMenu({ handleDrawerToggle, toggleMenu }) {
	const drawerWidth = 240;

	return (
		<Box component='nav'>
			<Drawer
				variant='temporary'
				anchor='right'
				open={toggleMenu}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: drawerWidth,
					},
				}}
			>
				<Toolbar>
					<Container
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'end',
						}}
					>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerToggle}
							sx={{
								display: { sm: 'none' },
								transition: '0.5s ease',
								height: '64px',
							}}
						>
							{toggleMenu && <RestaurantMenuIcon />}
						</IconButton>
					</Container>
				</Toolbar>
				<Divider />
				<Container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						textAlign: 'center',
						mt: 5,
					}}
				>
					<LinkList
						direction='column'
						sx={{
							fontSize: '1.5rem',
							textTransform: 'capitalize',
						}}
						// color='black'
					/>
				</Container>
			</Drawer>
		</Box>
	);
}
