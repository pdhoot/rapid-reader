import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  CircularProgress,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import config from "./config";

interface RSSFeed {
  id: number;
  topic: string;
  frequency: string;
  link: string;
  lastUpdated: string;
}

function AlertList({ key }: { key: string }) {
  const [feeds, setFeeds] = useState<RSSFeed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<RSSFeed[]>(`${config.apiHostname}/get/alerts`, {
        withCredentials: true,
      })
      .then((response) => {
        setFeeds(response.data);
        setLoading(false);
      })
      .catch((_error) => {
        setError("Failed to fetch RSS feeds");
        setLoading(false);
      });
  }, [key]);

  const handleDelete = async (
    event: React.MouseEvent<HTMLButtonElement>,
    feedId: number
  ) => {
    event.preventDefault();
    try {
      await axios.get(`${config.apiHostname}/delete/alert?id=${feedId}`, {
        withCredentials: true,
      });
      setFeeds((prevFeeds) => prevFeeds.filter((feed) => feed.id !== feedId));
    } catch (error) {
      console.error("Error deleting alert:", error);
      setError("Failed to delete alert");
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <CircularProgress />
        <Typography variant="body2" sx={{ marginTop: "10px" }}>
          Loading RSS feeds...
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant="body2"
        color="error"
        sx={{ textAlign: "center", marginTop: "20px" }}
      >
        {error}
      </Typography>
    );
  }

  if (feeds.length === 0) {
    return (
      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: "20px" }}
      >
        No RSS feeds subscribed.
      </Typography>
    );
  }

  return (
    <List>
      {feeds.map((feed, index) => (
        <ListItem
          key={index}
          divider
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper sx={{ padding: "10px", width: "100%", maxWidth: "450px" }}>
            <ListItemText
              primary={feed.topic}
              secondary={`Frequency: ${feed.frequency} `}
            />
            <ListItemSecondaryAction sx={{ marginRight: "8px" }}>
              <IconButton
                edge="end"
                aria-label="edit"
                href={feed.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={(event) => handleDelete(event, feed.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </Paper>
        </ListItem>
      ))}
    </List>
  );
}

export default AlertList;
