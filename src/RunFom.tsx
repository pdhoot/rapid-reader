import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import AlertList from "./AlertList"; // Assuming AlertList is in the same directory

function RunForm() {
  const [alertText, setAlertText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refreshAlerts, setRefreshAlerts] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(
        "https://4a14-2401-4900-1cba-87f5-b046-8858-cddb-3a15.ngrok-free.app/create/alert",
        {
          topic: alertText,
        }
      );
      setIsLoading(false);
      setRefreshAlerts((prev) => !prev); // Toggle to refresh the alert list
      setAlertText(""); // Clear the input field after submission
    } catch (error) {
      console.error("Error setting up alert:", error);
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          alignSelf: "flex-start",
          marginTop: "20px",
          width: "100%",
          position: "relative",
        }}
      >
        <Form
          style={{ width: "500px", margin: "0 auto", position: "relative" }}
          onSubmit={handleSubmit} // Attach the submit handler here
        >
          <Form.Control
            type="text"
            placeholder="Create an alert for"
            value={alertText}
            onChange={(e) => setAlertText(e.target.value)}
            style={{ paddingRight: "80px" }}
          />
          <Button
            variant="primary"
            type="submit"
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              height: "100%",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
          >
            Submit
          </Button>
        </Form>
        {isLoading && (
          <p style={{ marginTop: "10px", textAlign: "center" }}>
            Setting up alert...
          </p>
        )}
      </div>
      <AlertList key={String(refreshAlerts)} />
    </div>
  );
}

export default RunForm;
