import {
  Button,
  CardMedia,
  styled,
  Typography,
  Box,
  Card,
} from "@mui/material";
import { useMsal } from "@azure/msal-react";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: `url(
          "https://images.unsplash.com/photo-1536481351195-04a50ee18278?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"        
        )`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const StyledCard = styled(Card)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 30px 30px 30px",
  background: "white",
  borderRadius: "20px",
  boxShadow:
    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
});

const Login = () => {
  const { instance } = useMsal();

  const hanldeSignin = () => {
    instance.loginRedirect({
      scopes: [`user.read`],
    });
  };

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
          sx={{
            fontFamily: "Monument Extended",
            position: "absolute",
            top: "175px",
            color: "#F3B63F",
          }}
          variant="h4"
        >
          Login
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
          }}
        >
          Do you have an Microsoft Account ?
        </Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            marginTop: "10px",
          }}
          onClick={hanldeSignin}
        >
          Login with Azure Ad
        </Button>
      </StyledCard>
    </StyledBox>
  );
};

export default Login;
