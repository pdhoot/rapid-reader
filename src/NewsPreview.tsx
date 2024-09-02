import { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Typography, CircularProgress, Box, Link } from "@mui/material";
import config from "./config";

interface Article {
  title: string;
  description: string;
  url: string;
  source: string;
}

function NewsPreview({ alertText }: { alertText: string }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!alertText.trim()) {
      setArticles([]);
      setLoading(false);
      return;
    }

    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${config.apiHostname}/get/preview`, {
          params: { topic: alertText },
          withCredentials: true,
        });
        setArticles(response.data);
      } catch (error) {
        setError("Failed to fetch news articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [alertText]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography
        variant="body2"
        color="error"
        sx={{ textAlign: "center", mt: 4 }}
      >
        {error}
      </Typography>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{ mt: 2, p: 3, bgcolor: "background.paper", borderRadius: 2 }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, color: "text.primary", fontWeight: "medium" }}
      >
        Alert preview
      </Typography>
      <Typography
        variant="body1" // Changed from body2 to body1 for larger font size
        sx={{
          mb: 4,
          color: "text.secondary",
          fontWeight: "medium",
          textDecoration: "underline",
        }} // Increased mb to 4 for more space
      >
        Get a curated summary of similar articles on this topic daily
      </Typography>
      {articles.map((article, index) => (
        <Box
          key={index}
          sx={{
            mb: 2,
            pb: 2,
            borderBottom: index < articles.length - 1 ? 1 : 0,
            borderColor: "divider",
          }}
        >
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ color: "text.primary", fontWeight: "bold" }}
          >
            <Typography variant="subtitle1">{article.title}</Typography>
          </Link>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            {article.source}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {article.description}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}

export default NewsPreview;
