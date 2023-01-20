import {
  Button,
  CardMedia,
  styled,
  Typography,
  Box,
  Card,
} from "@mui/material";
import { useMsal } from "@azure/msal-react";
import { useDispatch, useSelector } from "react-redux";
import { callMsGraph } from "../utils/Graph";
import { setLogin } from "../features/user";
import { useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: `url(
          "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"        
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
  const { instance, accounts } = useMsal();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);
  const loginHint = searchParams.get("login_hint");
  const loginRequest = {
    scopes: [`user.read`],
  };

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  useEffect(() => {
    if (loginHint) {
      loginRequest.extraQueryParameters = {
        login_hint: loginHint,
      };
      instance.loginPopup(loginRequest).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    }
  }, [loginHint, loginRequest, instance]);

  useEffect(() => {
    instance
      .acquireTokenSilent({
        ...{ scopes: [`user.read`] },
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((res) =>
          dispatch(setLogin(res))
        );
      });
  }, [instance, accounts, dispatch]);

  if (auth) return <Navigate to="/" replace />;

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
          Redirect
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            display: "flex",
            gap: "12px",
            padding: "12px",
            height: "41px",
            border: "1px solid #8c8c8c",
          }}
          onClick={handleLogin}
        >
          <img
            src="assets/logo/microsoft.png"
            alt=""
            style={{
              width: "17px",
              height: "17px",
              object: "cover",
            }}
          />
          <Typography
            sx={{
              fontWeight: "600",
              fontFamily: "Segoe UI",
              color: "#5e5e5e",
              fontSize: "15px",
            }}
          >
            Sign in with Microsoft
          </Typography>
        </Button>
      </StyledCard>
    </StyledBox>
  );
};

export default Login;
