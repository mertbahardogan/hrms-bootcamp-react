import React from "react";
import { Icon, Menu } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item name="jobAdvertisement">
          <Icon name="bullhorn" />
          İş İlanları
        </Menu.Item>

        <Menu.Item name="jobPosition">
          <Icon name="briefcase" />
          Açık Pozisyonlar
        </Menu.Item>

        <Menu.Item name="company">
          <Icon name="building" />
          Şirketler
        </Menu.Item>

        <Menu.Item name="cv">
          <Icon name="address card" />
          Özgeçmişler
        </Menu.Item>
      </Menu>
    </div>
  );
}
