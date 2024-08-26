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

function RunForm() {
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
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          width: "100%",
          maxWidth: "700px", // Increase the maxWidth here
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
              sx={{ marginRight: "10px" }}
            />
            <IconButton type="submit" color="primary" disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} /> : <AddIcon />}
            </IconButton>
          </form>
        </Box>
        <AlertList key={String(refreshAlerts)} />
      </Paper>
    </Box>
  );
}

export default RunForm;
