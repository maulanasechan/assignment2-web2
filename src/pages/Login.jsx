import {
  Box,
  Card,
  CardMedia,
  styled,
  TextField,
  Typography,
} from "@mui/material";

const StyledBox = styled("Box")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: `url(
          "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"        
        )`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const StyledCard = styled("Card")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  background: "white",
  borderRadius: "20px",
});

const Login = () => {
  return (
    <StyledBox>
      <StyledCard>
        <CardMedia
          component="img"
          image="https://onfire.craftwork.design/images/s-5-img-12.png"
          alt="CardMedia Image Example"
          height="250"
          title="CardMedia Image Example"
        />
        <Typography
          sx={{ fontFamily: "Monument Extended", position: "absolute" }}
          variant="h4"
        >
          Login
        </Typography>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </StyledCard>
    </StyledBox>
  );
};

export default Login;
