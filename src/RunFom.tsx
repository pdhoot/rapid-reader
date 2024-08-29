import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import AlertList from "./AlertList";
import config from "./config";

function RunForm({ isNewUser }: { isNewUser: boolean }) {
  const [alertText, setAlertText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refreshAlerts, setRefreshAlerts] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!alertText.trim()) return; // Prevent submission if alertText is empty or only whitespace
    setIsLoading(true);

    try {
      await axios.post(
        `${config.apiHostname}/create/alert`,
        {
          topic: alertText,
        },
        { withCredentials: true }
      );
      setIsLoading(false);
      setRefreshAlerts((prev) => !prev);
      setAlertText("");
    } catch (error) {
      console.error("Error setting up alert:", error);
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 200px)", // Adjust for navbar height
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minWidth: "700px",
          height: "100%",
          maxHeight: "calc(100vh - 104px)", // Adjust for navbar and padding
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            backgroundColor: "#1F2937",
            padding: "10px 20px",
            borderRadius: "4px 4px 0 0",
            textAlign: "center",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          Alerts
        </Typography>
        <Box sx={{ padding: "10px", flexShrink: 0 }}>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", alignItems: "center" }}
          >
            <TextField
              fullWidth
              label="Create an alert about..."
              variant="outlined"
              value={alertText}
              onChange={(e) => setAlertText(e.target.value)}
              sx={{ marginRight: "10px", minWidth: "400px" }} // Set a minimum width for the TextField
            />
            <IconButton
              type="submit"
              color="primary"
              disabled={isLoading || !alertText.trim()} // Disable button when loading or alertText is empty
            >
              {isLoading ? <CircularProgress size={24} /> : <AddIcon />}
            </IconButton>
          </form>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            minHeight: "100px",
            maxHeight: "calc(100vh - 250px)",
          }}
        >
          <AlertList key={String(refreshAlerts)} />
        </Box>
      </Paper>
      {isNewUser && (
        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Box sx={{ padding: "20px", backgroundColor: "#ffffcc" }}>
            <Typography variant="h6" gutterBottom>
              Thank you for signing up!
            </Typography>
            <Typography variant="body1">
              We've sent a confirmation email from punit@rapidread.io. If you
              don't see it in your Inbox, please check your Spam folder and mark
              it as "Not Spam" to ensure you receive all future communications
              from us.
            </Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
}

export default RunForm;
