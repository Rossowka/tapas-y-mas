import { Avatar, Container, Stack } from "@mui/material";
import { awardsItems } from "./consts/awardsItems"

export default function Awards({ sx }) {
	return (
    <Container sx={sx}>
      <Container>
        <Stack direction="row" spacing={4}>
          {awardsItems.map((item) => (
            <Avatar key={item.img} src={item.img} alt={item.title} sx={{ width: 80, height: 80, backgroundColor: "#fff"}}/>
            ))}
        </Stack>
      </Container>
    </Container>
	);
}
