import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import AlertList from "./AlertList";
import axios from "axios";
import config from "./config";
import NewsPreview from "./NewsPreview";

function RunForm({ isNewUser }: { isNewUser: boolean }) {
  const [alertText, setAlertText] = useState("");
  const [region, setRegion] = useState("India"); // Default to India
  const [isLoading, setIsLoading] = useState(false);
  const [refreshAlerts, setRefreshAlerts] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteSuccess, setDeleteSuccess] = useState("");
  const [placeholder, setPlaceholder] = useState("RBI");
  const [showNewsPreview, setShowNewsPreview] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const examples = ["eg. RBI", "eg. Fintech", "eg. SaaS", "eg. VC"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        const currentIndex = examples.indexOf(prev);
        const nextIndex = (currentIndex + 1) % examples.length;
        return examples[nextIndex];
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (success) {
      timer = setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
    if (deleteSuccess) {
      timer = setTimeout(() => {
        setDeleteSuccess("");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [success, deleteSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlertText(e.target.value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (e.target.value.trim()) {
        setShowNewsPreview(true);
      } else {
        setShowNewsPreview(false);
      }
    }, 2000);
  };

  const handleRegionChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!alertText.trim()) return;
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post(
        `${config.apiHostname}/create/alert`,
        { topic: alertText, region: region },
        { withCredentials: true }
      );
      setSuccess("Alert created successfully!");
      setAlertText("");
      setRefreshAlerts(!refreshAlerts);
      setShowNewsPreview(false);
    } catch (error) {
      setError("Error setting up alert. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Paper
          elevation={3}
          className="p-6 md:p-8 bg-white rounded-lg shadow-lg"
        >
          <Typography
            variant="h5"
            className="text-left text-gray-800 font-semibold font-poppins"
          >
            Smart alerts
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-left mt-2 mb-8 text-gray-600 font-poppins"
          >
            Get the latest updates delivered to your inbox every morning
          </Typography>
          <div className="py-2"></div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <TextField
                fullWidth
                label="Create an alert about..."
                variant="outlined"
                value={alertText}
                onChange={handleInputChange}
                placeholder={placeholder}
                autoFocus
                className="bg-white font-poppins flex-grow"
                InputProps={{
                  className: "font-poppins",
                }}
                InputLabelProps={{
                  className: "font-poppins",
                }}
              />
              <Select
                value={region}
                onChange={handleRegionChange}
                aria-label="region selection"
                className="font-poppins"
              >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="US">US</MenuItem>
              </Select>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading || !alertText.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-poppins"
            >
              {isLoading ? "Creating..." : "Create Alert"}
            </Button>
          </form>
          {error && (
            <Alert severity="error" className="mt-4 font-poppins">
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" className="mt-4 font-poppins">
              {success}
            </Alert>
          )}
          {deleteSuccess && (
            <Alert severity="success" className="mt-4 font-poppins">
              {deleteSuccess}
            </Alert>
          )}
        </Paper>

        {!showNewsPreview && (
          <Paper
            elevation={3}
            className="mt-8 p-6 md:p-8 bg-white rounded-lg shadow-lg"
          >
            <Typography
              variant="h5"
              className="mb-4 text-gray-800 font-semibold font-poppins"
            >
              My alerts
            </Typography>
            <div className="max-h-96 overflow-y-auto">
              <AlertList
                key={String(refreshAlerts)}
                setDeleteSuccess={setDeleteSuccess}
              />
            </div>
          </Paper>
        )}

        {showNewsPreview && <NewsPreview alertText={alertText} />}

        {isNewUser && (
          <Paper
            elevation={3}
            className="mt-8 p-6 md:p-8 bg-yellow-50 rounded-lg shadow-lg"
          >
            <Typography
              variant="h6"
              className="mb-2 text-gray-800 font-semibold font-poppins"
            >
              Thank you for signing up!
            </Typography>
            <Typography variant="body1" className="text-gray-700 font-poppins">
              We've sent a confirmation email from punit@rapidread.io. If you
              don't see it in your Inbox, please check your Spam folder and mark
              it as "Not Spam" to ensure you receive all future communications
              from us.
            </Typography>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default RunForm;
