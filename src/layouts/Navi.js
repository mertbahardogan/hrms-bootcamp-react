import React from "react";
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
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="İş Arayanlar" />
          <Menu.Item name="İş Verenler" />

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
