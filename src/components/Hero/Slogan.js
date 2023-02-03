import { Box, Typography } from "@mui/material";

export default function Slogan({ heroContent }) {
  return(
    <Box
    sx={{
      display: "flex",
      whiteSpace: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
    }}
    >
      {heroContent["welcome-p2"].map((item, index) => (
        <>
          <Typography
            variant="h5"
            component="h5"
            key={`welcome-p2-${index}`}
            sx={{
              color: "#fff",
            }}
          >
            {item}
          </Typography>
          {index !== heroContent["welcome-p2"].length - 1 && (
            <Box
              sx={{
                height: "10px",
                width: "10px",
                backgroundColor: "primary.main",
                boxShadow: "1px 1px 1px rgb(0,0,0,0.5)",
              }}
            />
          )}
        </>
      ))}
    </Box>
  );
}