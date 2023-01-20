import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";

const Dashboard = () => {
  const auth = useSelector((state) => state.user);

  return (
    <Box sx={{ minHeight: "100vh", background: "red" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
        height="100vh"
      >
        <Typography
          sx={{
            fontFamily: "Monument Extended",
          }}
        >
          {auth.displayName}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Monument Extended",
          }}
        >
          {auth.userPrincipalName}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Dashboard;
