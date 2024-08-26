// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import RunForm from "./RunFom";
import { Container } from "react-bootstrap";
import NavbarCustom from "./NavbarCustom";
function Dashboard() {
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
    </Container>
  );
}

export default Dashboard;
