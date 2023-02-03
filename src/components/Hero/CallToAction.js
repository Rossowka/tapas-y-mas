import { Box, Button } from "@mui/material";

export default function CallToAction({ heroContent }) {
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button variant="contained" color="primary">
        {heroContent["primary-action"]}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          textShadow: "1px 1px 1px rgb(0,0,0,0.5)",
          boxShadow: "1px 1px 1px rgb(0,0,0,0.5)",
        }}
      >
        {heroContent["secondary-action"]}
      </Button>
    </Box>
  )
}