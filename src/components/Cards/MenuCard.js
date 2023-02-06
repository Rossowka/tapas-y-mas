import { OpenInNew } from "@mui/icons-material";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Icon,
	Typography,
} from "@mui/material";

import { grey } from "@mui/material/colors";
import { ReactComponent as Brand } from "../../assets/img/logo.svg";

export default function MenuCard({ cardItems }) {
	return (
		<Card
			sx={{
				background: `linear-gradient(315deg, ${grey[300]}, #fff)`,
				flex: "0 0 40%",
				boxShadow: "0 30px 60px rgb(0 0 0 / 40%)",
				position: "relative",
			}}
		>
			<CardActionArea
				sx={{
					position: "relative",
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
					<CardContent sx={{ flex: "1 0 auto", zIndex: 90, mr: 10 }}>
						<Typography
							component="h4"
							variant="h4"
							sx={{ textTransform: "uppercase" }}
						>
							{cardItems.title}
						</Typography>
					</CardContent>
					<Icon
						fontSize="large"
						aria-label="open menu"
						sx={{ ml: 2, mb: 2, mt: 5, zIndex: 20, }}
					>
						<OpenInNew fontSize="large" />
					</Icon>
				</Box>
				<Box
					sx={{
						color: grey[300],
						position: "absolute",
						bottom: 0,
						left: 70,
						borderRadius: "0 0 4px 0",
						zIndex: 0,
						overflow: "hidden",
					}}
				>
					<Brand height="50%" />
				</Box>
				<CardMedia
					component="img"
					sx={{
						width: 150,
						position: "absolute",
						bottom: cardItems.bottom,
						right: cardItems.right,
						zIndex: 10,
					}}
					image={cardItems.img}
					alt={cardItems.title}
				/>
			</CardActionArea>
		</Card>
	);
}
