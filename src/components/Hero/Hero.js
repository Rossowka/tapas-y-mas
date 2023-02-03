import React from "react";

import { Box, Typography } from "@mui/material";
import { heroContent } from "./consts/heroContent";
import Slogan from "./Slogan";
import HeroImage from "./HeroImage";
import Awards from "./Awards";
import CallToAction from "./CallToAction";


export function Hero() {
	return (
		<Box sx={{ position: "relative" }}>
			<HeroImage image={heroContent.image} />
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					textAlign: "center",
					color: "#fff",
					textShadow: "1px 1px 1px rgb(0,0,0,0.5)",
				}}
			>
				<Typography color="inherit" variant="h2" component="h2">
					{heroContent["welcome-p1"]}
				</Typography>
				<Slogan heroContent={heroContent} />
				<CallToAction heroContent={heroContent} />
			</Box>
			<Awards sx={{ position: "absolute", bottom: "10%" }} />
		</Box>
	);
}
