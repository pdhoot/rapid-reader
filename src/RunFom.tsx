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
    <Box sx={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          backgroundColor: "#3f51b5",
          padding: "10px 20px",
          borderRadius: "4px 4px 0 0",
        }}
      >
        Alerts
      </Typography>
      <Paper elevation={3} sx={{ padding: "20px" }}>
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
            sx={{ marginRight: "10px" }}
          />
          <IconButton type="submit" color="primary" disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : <AddIcon />}
          </IconButton>
        </form>
        <AlertList key={String(refreshAlerts)} />
      </Paper>
    </Box>
  );
}

export default RunForm;
