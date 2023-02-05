import { Avatar, Container, Stack } from "@mui/material";
import { awardsItems } from "./consts/awardsItems";

export default function Awards({ sx }) {
	return (
		<Container sx={sx}>
			<Stack
				direction="row"
				spacing={{ sm: 4 }}
				sx={{
					width: "100%",
					alignItems: { xs: "center", md: "flex-start" },
					justifyContent: { xs: "space-between", sm: "flex-start" },
				}}
			>
				{awardsItems.map((item) => (
					<Avatar
						key={item.img}
						src={item.img}
						alt={item.title}
						sx={{ width: 70, height: 70, backgroundColor: "#fff" }}
					/>
				))}
			</Stack>
		</Container>
	);
}
