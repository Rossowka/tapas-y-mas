import { Box, Typography } from "@mui/material";

function Logo() {
	return (
		<Box
			sx={{
				backgroundColor: "black",
				width: 64,
				height: 64,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				variant="h6"
				component="a"
				href="/"
				sx={{
					fontFamily: "Comicool",
					color: "inherit",
					textDecoration: "none",
				}}
			>
				q
			</Typography>
		</Box>
	);
}

export default Logo;
