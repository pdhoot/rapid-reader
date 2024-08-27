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
    setIsLoading(true);

    try {
      await axios.post(`${config.apiHostname}/create/alert`, {
        topic: alertText,
      });
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
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        flexDirection: "column",
        paddingTop: "20px",
        width: "100%",
        maxWidth: "700px", // Increase this if needed
        margin: "0 auto",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          width: "100%", // Ensure it takes full width of its container
          minWidth: "700px", // Set a minimum width
          textAlign: "center",
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
          }}
        >
          Alerts
        </Typography>
        <Box sx={{ padding: "10px" }}>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <TextField
              fullWidth
              label="Create an alert about..."
              variant="outlined"
              value={alertText}
              onChange={(e) => setAlertText(e.target.value)}
              sx={{ marginRight: "10px", minWidth: "400px" }} // Set a minimum width for the TextField
            />
            <IconButton type="submit" color="primary" disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} /> : <AddIcon />}
            </IconButton>
          </form>
        </Box>
        <AlertList key={String(refreshAlerts)} />
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
