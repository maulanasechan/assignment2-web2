import React from "react";

const LoginForm = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        fullWidth
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        sx={{
          margin: "20px",
        }}
      />
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
