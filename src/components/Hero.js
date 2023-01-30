import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";

import BackgroundImage from "../assets/img/hero.jpeg";

function Hero() {
	const content = {
		"welcome-p1": "quiquiriquí",
		"welcome-p2": ["tapas", "wine", "good time"],
		"primary-action": "Book a table",
		"secondary-action": "Order Now",
	};

	return (
		<Container
			maxWidth={false}
			sx={{
				height: "100vh",
				width: "100vw",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: `linear-gradient(rgba(44,44,42,0.25), rgba(44,44,42,0.25)), url(${BackgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Box>
				<Typography
					color="inherit"
					variant="h2"
					component="h2"
					sx={{
						fontFamily: "Comicool",
						color: "#fff",
						textShadow: "1px 1px 1px rgb(0,0,0,0.5)",
					}}
				>
					{content["welcome-p1"]}
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "15px",
					}}
				>
					{content["welcome-p2"].map((item, index) => (
						<>
							<Typography
								color="inherit"
								variant="h5"
								component="h5"
								key={`welcome-p2-${index}`}
								sx={{
									fontFamily: "Comicool",
									color: "#fff",
									textShadow: "1px 1px 1px rgb(0,0,0,0.5)",
									alignSelf: "center",
								}}
							>
								{item}
							</Typography>
							{index !== content["welcome-p2"].length - 1 && (
								<Box
									sx={{
										height: "10px",
										width: "10px",
										backgroundColor: "rgba(195,65,61,1)",
										boxShadow: "1px 1px 1px rgb(0,0,0,0.5)",
									}}
								/>
							)}
						</>
					))}
				</Box>
				<Box
					sx={{
						mt: 4,
						display: "flex",
						gap: "20px",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "rgba(195,65,61,1)",
						}}
					>
						{content["primary-action"]}
					</Button>
					<Button
						variant="outlined"
						sx={{
							borderColor: "rgba(195,65,61,1)",
							color: "rgba(195,65,61,1)",
							textShadow: "1px 1px 1px rgb(0,0,0,0.5)",
							boxShadow: "1px 1px 1px rgb(0,0,0,0.5)",
						}}
					>
						{content["secondary-action"]}
					</Button>
				</Box>
			</Box>
		</Container>
	);
}

export default Hero;
