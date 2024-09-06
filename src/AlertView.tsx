import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  Skeleton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import axios from "axios";
import config from "./config";

interface NewsItem {
  id: string;
  summary_title: string;
  summary_content: string;
  url: string;
  source: { source: string; url: string }[];
}

function ShimmerCard() {
  return (
    <ListItem className="bg-white rounded-lg shadow-md p-4 mb-4">
      <ListItemText
        primary={<Skeleton variant="text" width="80%" height={28} />}
        secondary={
          <>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="60%" />
          </>
        }
      />
    </ListItem>
  );
}

function AlertView() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const alertId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    fetchNewsItems(selectedDate);
  }, [selectedDate]);

  const changeDate = (days: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const fetchNewsItems = async (date: Date) => {
    setIsLoading(true);
    try {
      console.log(alertId);
      const response = await axios.get(`${config.apiHostname}/topic/history`, {
        params: {
          alertId,
          date: date.toISOString().split("T")[0],
        },
        withCredentials: true,
      });
      setNewsItems(response.data);
    } catch (error) {
      setError("Failed to fetch news items. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date) => date.toLocaleDateString();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <Typography variant="h4" className="font-bold">
          Topic history
        </Typography>
        <Typography variant="body2">
          Curated news items for this topic
        </Typography>
      </header>
      <nav className="bg-blue-500 text-white p-2 flex justify-between items-center">
        <div className="flex items-center">
          <ChevronLeft
            onClick={() => changeDate(-1)}
            className="cursor-pointer"
          />
          <Typography variant="body1" className="mx-4">
            {formatDate(selectedDate)}
          </Typography>
          <ChevronRight
            onClick={() => changeDate(1)}
            className="cursor-pointer"
          />
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto p-4">
        {error && (
          <Typography color="error" className="mb-4">
            {error}
          </Typography>
        )}
        {isLoading ? (
          <List>
            {[...Array(5)].map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </List>
        ) : newsItems.length === 0 ? (
          <Typography className="text-gray-600">
            No news items for the selected date.
          </Typography>
        ) : (
          <List>
            {newsItems.map((item) => (
              <ListItem
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <ListItemText
                  primary={
                    <Typography variant="h6" className="font-semibold">
                      {item.summary_title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        variant="body2"
                        className="mt-2 text-gray-600"
                      >
                        {item.summary_content}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="mt-2 text-gray-500"
                      >
                        Sources:{" "}
                        {item.source.map((s, index) => (
                          <span key={index}>
                            {index > 0 && ", "}
                            <Link
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {s.source}
                            </Link>
                          </span>
                        ))}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </main>
    </div>
  );
}

export default AlertView;
