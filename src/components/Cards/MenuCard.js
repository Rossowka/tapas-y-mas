import { OpenInNew } from "@mui/icons-material";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from "@mui/material";

export default function MenuCard({ cardItems }) {
	return (
		<Card>
			<CardActionArea sx={{ display: "flex", justifyContent: "space-around" }}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography
							component="h4"
							variant="h4"
							sx={{ textTransform: "uppercase" }}
						>
							{cardItems.title}
						</Typography>
					</CardContent>
					<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
						<IconButton aria-label="open menu">
							<OpenInNew />
						</IconButton>
					</Box>
				</Box>
				<CardMedia
					component="img"
					sx={{ width: 150 }}
					image={cardItems.img}
					alt={cardItems.title}
				/>
			</CardActionArea>
		</Card>
	);
}
