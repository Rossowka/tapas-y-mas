import React, { useState } from "react";

import {
	AppBar,
	Container,
	Stack,
	Toolbar,
	Link,
	Box,
	Divider,
	List,
	IconButton,
	Drawer,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./Logo";

const drawerWidth = 240;

export function NavBar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Divider />
			<List></List>
		</Box>
	);

	return (
		<Box>
			<AppBar
				component="nav"
				sx={{
					// background: "rgba(0,0,0, 0.25)",
					background: "none",
				}}
			>
				<Container>
					<Toolbar
						sx={{
							justifyContent: "space-between",
						}}
					>
						<Logo />
						<Stack
							direction="row"
							sx={{
								textShadow: "1px 1px 1px rgb(0,0,0,0.5)",
								display: { xs: "none", sm: "inherit" },
								gap: 2
							}}
						>
							<Link href="#" color="inherit" underline="none">
								Menu
							</Link>
							<Link href="#" color="inherit" underline="none">
								Services
							</Link>
							<Link href="#" color="inherit" underline="none">
								Our Story
							</Link>
							<Link href="#" color="inherit" underline="none">
								Visit Us
							</Link>
							<Link href="#" color="inherit" underline="none">
								Careers
							</Link>
						</Stack>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerToggle}
							sx={{
								display: { sm: "none" },
							}}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
			<Box component="nav">
				<Drawer
					variant="temporary"
					anchor="right"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}