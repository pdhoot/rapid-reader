import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "./config";
import { CircularProgress, Typography, Box } from "@mui/material";

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const fragment = window.location.hash.substring(1);
    const params = new URLSearchParams(fragment);
    const accessToken = params.get("access_token");
    console.log("Access token:", accessToken);

    if (accessToken) {
      // Send the access_token to the backend using axios
      axios
        .post(
          `${config.apiHostname}/auth/store-token`,
          { access_token: accessToken },
          { withCredentials: true } // To include cookies in the request
        )
        .then((response) => {
          console.log("Token stored successfully", response.data);
          // Redirect to the dashboard or another page
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error("Error storing token:", error);
        });
    } else {
      console.error("No access token found in the URL");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Box className="text-center">
        <CircularProgress size={60} className="text-blue-600 mb-4" />
        <Typography variant="h5" className="text-gray-800 font-semibold">
          Loading...
        </Typography>
        <Typography variant="body1" className="text-gray-600 mt-2">
          Processing authentication
        </Typography>
      </Box>
    </div>
  );
}

export default AuthCallback;
