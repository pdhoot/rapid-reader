// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import RunForm from "./RunFom";
import { Container } from "react-bootstrap";
import NavbarCustom from "./NavbarCustom";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const isNewUser = location.state?.isNewUser;
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "0 15px",
      }}
    >
      <NavbarCustom />
      <RunForm />
      {isNewUser && (
        <div
          style={{
            backgroundColor: "#ffffcc",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        >
          <h4>Thank you for signing up!</h4>
          <p>
            We've sent a confirmation email from punit@rapidread.io. If you
            don't see it in your Inbox, please check your Spam folder and mark
            it as "Not Spam" to ensure you receive all future communications
            from us.
          </p>
        </div>
      )}
    </Container>
  );
}

export default Dashboard;
