import React from "react";

import { AppBar, Container, Stack, Toolbar, Link } from "@mui/material";

import Logo from "./Logo";

function DrawerNavBar() {

	return (
		<AppBar
			sx={{
				background: "rgba(0,0,0, 0.25)",
			}}
		>
			<Container>
				<Toolbar>
					<Link
							sx={{
								flexGrow: 1,
								color: "inherit",
								height: 40,
							}}
						>
						<Logo />
					</Link>
					<Stack direction="row" spacing={2}>
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
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default DrawerNavBar;
