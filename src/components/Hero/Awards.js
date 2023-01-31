import { Avatar, Container, Stack } from "@mui/material";
import DecanterAward from "./img/badge_Decanter.jpg";
import EsfaAward from "./img/badge_ESFA.png";
import RieslingAward from "./img/badge_RieslingWeeks.png";
import TripadvisorAward from "./img/badge_Tripadvisor.png";

const itemData = [
	{
		img: DecanterAward,
		title: "Decanter Award",
	},
	{
		img: EsfaAward,
		title: "European Street Food Awards",
	},
	{
		img: RieslingAward,
		title: "Riesling Weeks Award",
	},
	{
		img: TripadvisorAward,
		title: "Tripadvisor Award",
	},
];

export default function Awards() {
	return (
    <Container>
      <Container>
        <Stack direction="row" spacing={4}>
          {itemData.map((item) => (
            <Avatar key={item.img} src={item.img} alt={item.title} sx={{ width: 80, height: 80}}/>
            ))}
        </Stack>
      </Container>
    </Container>
	);
}
