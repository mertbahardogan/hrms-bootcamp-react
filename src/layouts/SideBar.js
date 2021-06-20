import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item as={Link} to="/job-advertisements" name="jobAdvertisement">
          <Icon name="bullhorn" />
          İş İlanları
        </Menu.Item>

        <Menu.Item as={Link} to="/job-positions" name="jobPosition">
          <Icon name="briefcase" />
          Açık Pozisyonlar
        </Menu.Item>

        <Menu.Item as={Link} to="/companies" name="company">
          <Icon name="building" />
          Şirketler
        </Menu.Item>

        {/* eğer işveren giriş yaptıysa bu alan görünsün */}

        <Menu.Item as={Link} to="/resume" name="cv">
          <Icon name="address card" />
          Özgeçmişler
        </Menu.Item>
      </Menu>
    </div>
  );
}
