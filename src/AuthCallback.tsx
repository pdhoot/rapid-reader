import { useEffect } from "react";
import axios from "axios";

function AuthCallback() {
  useEffect(() => {
    const fragment = window.location.hash.substring(1);
    const params = new URLSearchParams(fragment);
    const accessToken = params.get("access_token");
    console.log("Access token:", accessToken);

    if (accessToken) {
      // Send the access_token to the backend using axios
      axios
        .post(
          "https://4a14-2401-4900-1cba-87f5-b046-8858-cddb-3a15.ngrok-free.app/auth/store-token",
          { access_token: accessToken },
          { withCredentials: true } // To include cookies in the request
        )
        .then((response) => {
          console.log("Token stored successfully", response.data);
          // Redirect to the dashboard or another page
          window.location.href = "/dashboard";
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
