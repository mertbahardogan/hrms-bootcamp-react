import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  function handleSignOut(params) {
    setIsAuthenticated(false);
    history.push("/");
  }

  return (
    <div>
      <Menu inverted fixed="top" size="huge">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="header" size="large" />
            RMS
          </Menu.Item>
          <Menu.Item as={Link} to="/" name="Ana Sayfa" />
          <Menu.Item as={Link} to="/job-seekers" name="İşarayanlar" />
          <Menu.Item as={Link} to="/employers" name="İşverenler" />
          <Menu.Item as={Link} to="/personnel-approved-advertisement" name="Onaylı İlanlar" />
          <Menu.Item as={Link} to="/personnel-not-approved-advertisement" name="Onaysız İlanlar" />

          <Menu.Menu position="right">
            <Menu.Item>
              {isAuthenticated ? (
                <SignedIn signOut={handleSignOut}></SignedIn>
              ) : (
                <SignedOut signIn={handleSignIn}></SignedOut>
              )}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
