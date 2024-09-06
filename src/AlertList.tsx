import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PublicIcon from "@mui/icons-material/Public";
import axios from "axios";
import config from "./config";

function AlertList({
  setDeleteSuccess,
}: {
  setDeleteSuccess: (value: string) => void;
}) {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      const response = await axios.get(`${config.apiHostname}/get/alerts`, {
        withCredentials: true,
      });
      setFeeds(response.data);
    } catch (error) {
      setError("Failed to fetch alerts. Please try again later.");
    }
  };

  const handleDelete = async (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    try {
      await axios.get(`${config.apiHostname}/delete/alert?id=${id}`, {
        withCredentials: true,
      });
      fetchAlerts();
      setDeleteSuccess("Alert deleted successfully");
    } catch (error) {
      setError("Failed to delete alert. Please try again.");
    }
  };

  const handleItemClick = (id: string) => {
    navigate(`/topic?id=${id}`);
  };

  if (error) {
    return (
      <Typography
        variant="body2"
        color="error"
        className="text-center mt-4 font-inter"
      >
        {error}
      </Typography>
    );
  }

  if (feeds.length === 0) {
    return (
      <Typography
        variant="body2"
        className="text-center mt-4 text-gray-600 font-inter"
      >
        No alerts created yet.
      </Typography>
    );
  }

  return (
    <List className="space-y-2">
      {feeds.map((feed: any, index: number) => (
        <ListItem
          key={index}
          className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          onClick={() => handleItemClick(feed.id)}
        >
          <Paper className="p-4 w-full rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      className="font-semibold text-gray-800 font-poppins"
                    >
                      {feed.topic}
                    </Typography>
                  }
                />
                <Chip
                  icon={<PublicIcon style={{ color: "#9e9e9e" }} />}
                  label={feed.region}
                  size="small"
                  variant="outlined"
                  className="ml-2"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#9e9e9e",
                    color: "#9e9e9e",
                    height: "24px",
                  }}
                />
              </div>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={(event) => handleDelete(event, feed.id)}
                className="text-red-500 hover:text-red-700"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Paper>
        </ListItem>
      ))}
    </List>
  );
}

export default AlertList;
