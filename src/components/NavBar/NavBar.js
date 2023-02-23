import React, { useState } from 'react';

import { AppBar, Container, Toolbar, IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import { LinkList } from './LinkList';
import { SideMenu } from './SideMenu';

export function NavBar() {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleDrawerToggle = () => {
		setToggleMenu((prevState) => !prevState);
	};

	return (
		<>
			<AppBar
				component='nav'
				sx={{
					backgroundColor: 'rgb(12, 12, 12, 0.5)',
					backdropFilter: 'blur(2px)',
					// background: 'none',
					// boxShadow: 'none',
				}}
			>
				<Container>
					<Toolbar
						sx={{
							justifyContent: 'space-between',
							textShadow: '1px 1px 1px rgb(0,0,0,0.5)',
						}}
					>
						<Logo />
						<LinkList
							direction='row'
							sx={{ display: { xs: 'none', sm: 'inherit' } }}
						/>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerToggle}
							sx={{
								display: { sm: 'none' },
								transition: '0.5s ease',
							}}
						>
							{!toggleMenu && <MenuIcon />}
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
			<SideMenu
				handleDrawerToggle={handleDrawerToggle}
				toggleMenu={toggleMenu}
			/>
		</>
	);
}
