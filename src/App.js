import { MsalProvider } from "@azure/msal-react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { store } from "./app/store";

function App({ msalInstance }) {
  return (
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Provider>
    </MsalProvider>
  );
}

export default App;
