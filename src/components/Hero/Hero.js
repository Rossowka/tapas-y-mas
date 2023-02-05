import React from "react";

import { Box, Container, Typography } from "@mui/material";
import { heroContent } from "./consts/heroContent";
import Slogan from "./Slogan";
import HeroImage from "./HeroImage";
import Awards from "./Awards";
import CallToAction from "./CallToAction";

export function Hero() {
	const flex = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<Box
			sx={[
				flex,
				{
					position: "relative",
				},
			]}
		>
			<HeroImage image={heroContent.image} />
			<Container
				sx={[
					flex,
					{
						position: "absolute",
						height: "100%",
					},
				]}
			>
				<Container
					sx={[
						flex,
						{
							textAlign: "center",
							color: "#fff",
							textShadow: "1px 1px 1px rgb(0,0,0,0.5)",
							flexBasis: "65%",
							justifyContent: "end",
						},
					]}
				>
					<Typography color="inherit" variant="h2" component="h2">
						{heroContent["welcome-p1"]}
					</Typography>
					<Slogan heroContent={heroContent} />
					<CallToAction heroContent={heroContent} />
				</Container>
				<Awards
					sx={{
						flexGrow: 1,
						display: "flex",
						alignItems: "center",
					}}
				/>
			</Container>
		</Box>
	);
}
