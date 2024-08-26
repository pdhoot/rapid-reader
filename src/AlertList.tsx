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
              //   secondary={`Frequency: ${
              //     feed.frequency
              //   } | Last Updated: ${new Date(feed.lastUpdated).toLocaleString()}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                href={feed.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
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
