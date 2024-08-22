import { useState, useEffect } from "react";
import {
  Card,
  Spinner,
  Alert,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Gear } from "react-bootstrap-icons";
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
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading RSS feeds...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="mt-5 text-center">
        {error}
      </Alert>
    );
  }

  if (feeds.length === 0) {
    return (
      <Alert variant="info" className="mt-5 text-center">
        No RSS feeds subscribed.
      </Alert>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        {feeds.map((feed, index) => (
          <Col md={12} lg={6} key={index} className="mb-4">
            <Card
              style={{
                height: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Card.Body
                style={{
                  position: "relative",
                  paddingTop: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="link"
                  href={feed.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    padding: "10px",
                    zIndex: 10,
                  }}
                >
                  <Gear size={20} />
                </Button>
                <div style={{ textAlign: "center" }}>
                  <Card.Title style={{ marginBottom: "0.5rem" }}>
                    {feed.topic}
                  </Card.Title>
                  <Card.Text>{feed.frequency}</Card.Text>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                Last updated: {new Date(feed.lastUpdated).toLocaleString()}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AlertList;
