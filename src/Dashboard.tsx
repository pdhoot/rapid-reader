import { Container } from "@mui/material";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import RunForm from "./RunFom";
import NavbarCustom from "./NavbarCustom";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";

function Dashboard() {
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.apiHostname}/auth/is-new-user`, { withCredentials: true })
      .then((response) => {
        setIsNewUser(response.data.isNewUser);
      });
  }, []);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "0 15px",
      }}
    >
      <NavbarCustom />
      <RunForm isNewUser={isNewUser} />
    </Container>
  );
}

export default Dashboard;
