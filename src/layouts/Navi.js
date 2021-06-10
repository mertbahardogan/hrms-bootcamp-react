import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Icon, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="huge">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="header" size="large" />
            RMS
          </Menu.Item>
          <Menu.Item as={Link} to="/"  name="Ana Sayfa" />
          <Menu.Item as={Link} to="/job-seekers"  name="İş Arayanlar" />
          <Menu.Item as={Link} to="/employers"  name="İş Verenler" />

          <Menu.Menu position="right">
            <Menu.Item>
              <Button.Group>
                <Button color="white">Kayıt Ol</Button>
                <Button.Or text="|" />
                <Button color="grey">Giriş Yap</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
