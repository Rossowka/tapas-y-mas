import { Box, Typography } from "@mui/material";

function Logo() {
	return (
		<Box
            component="a"
            href="/"
			sx={{
				backgroundColor: "black",
				width: 64,
				height: 64,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
                textDecoration: "none",
                color: "inherit",
			}}
		>
			<Typography
				variant="h6"
				sx={{
					fontFamily: "Comicool",
				}}
			>
				q
			</Typography>
		</Box>
	);
}

export default Logo;
