import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "./config";

function AuthCallback() {
  useEffect(() => {
    const fragment = window.location.hash.substring(1);
    const params = new URLSearchParams(fragment);
    const accessToken = params.get("access_token");
    const navigate = useNavigate();
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
          navigate("/dashboard", {
            state: { isNewUser: response.data.isNewUser },
          });
        })
        .catch((error) => {
          console.error("Error storing token:", error);
        });
    } else {
      console.error("No access token found in the URL");
    }
  }, []);

  return (
    <div>
      <p>Processing authentication...</p>
    </div>
  );
}

export default AuthCallback;
