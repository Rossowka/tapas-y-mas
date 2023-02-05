import { Container } from "@mui/material";
import MenuCard from "./MenuCard";
import { cardItems } from "./consts/cardItems";

export function Cards() {
	return (
		<Container sx={{ display: "flex" }}>
			{cardItems.map((item, index) => (
				<MenuCard key={item.title} cardItems={cardItems[index]} />
			))}
		</Container>
	);
}
