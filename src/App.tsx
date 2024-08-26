import { Route, Routes, useNavigate } from "react-router-dom";
import AuthCallback from "./AuthCallback";
import Dashboard from "./Dashboard";
import Landing from "./Landing"; // Uncomment if you have a Home component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useEffect } from "react";
import Cookies from "js-cookie"; // Import js-cookie to manage cookies

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    console.log(accessToken);
    if (!accessToken) {
      navigate("/"); // Redirect to the home page if the access_token is not present
    }
    // else {
    //   navigate("/dashboard"); // Redirect to the dashboard if the access_token is present
    // }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
