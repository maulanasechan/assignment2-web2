import { useSelector } from "react-redux";
import { Box, Stack, Typography, styled } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: `url(
          "https://images.unsplash.com/photo-1530128118208-89f6ce02b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"        
        )`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const Dashboard = () => {
  const auth = useSelector((state) => state.user);

  return (
    <StyledBox>
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
            color: "white",
          }}
          variant="h1"
        >
          Redirect Sign In
        </Typography>
        <Typography
          sx={{
            fontFamily: "Monument Extended",
            color: "yellow",
          }}
          variant="h4"
        >
          {auth.userPrincipalName}
        </Typography>
      </Stack>
    </StyledBox>
  );
};

export default Dashboard;
