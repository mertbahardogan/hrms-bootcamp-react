import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Divider, Dropdown, Label, Input } from "semantic-ui-react";

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

        <Menu.Item as={Link} to="/resume" name="cv">
          <Icon name="address card" />
          Özgeçmişler
        </Menu.Item>

        <Menu.Item as={Link} to="/employer-job-advertisement" name="employer">
          <Icon name="bell" />
          İş İşanları - İşveren
        </Menu.Item>
      </Menu>
      <Divider hidden></Divider>

      <Menu icon="labeled" vertical>
        <Menu.Item as={Link} to="/job-advertisements" name="jobAdvertisement">
          <Icon name="bullhorn" />
          İş İlanları
        </Menu.Item>

        <Menu.Item name="jobPosition">
          <Label>Şehir Seçiniz</Label>

          <Dropdown text="Ankara">
            <Dropdown.Menu>
              <Dropdown.Item text="New" />
              <Dropdown.Item text="Open..." description="ctrl + o" />
              <Dropdown.Item text="Save as..." description="ctrl + s" />
              <Dropdown.Item text="Rename" description="ctrl + r" />
              <Dropdown.Item text="Make a copy" />
              <Dropdown.Item icon="folder" text="Move to folder" />
              <Dropdown.Item icon="trash" text="Move to trash" />
              <Dropdown.Divider />
              <Dropdown.Item text="Download As..." />
              <Dropdown.Item text="Publish To Web" />
              <Dropdown.Item text="E-mail Collaborators" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>

      <Menu vertical>
        <Menu.Item name="inbox">
          <b>Filteleme</b>
        </Menu.Item>

        <Menu.Item>Sehir Seç</Menu.Item>
        <Menu.Item name="spam">
          <Dropdown text="Ankara">
            <Dropdown.Menu direction="left">
              <Dropdown.Item text="New" />
              <Dropdown.Item text="Open..." description="ctrl + o" />
              <Dropdown.Item text="Save as..." description="ctrl + s" />
              <Dropdown.Item text="Rename" description="ctrl + r" />
              <Dropdown.Item text="Make a copy" />
              <Dropdown.Item icon="folder" text="Move to folder" />
              <Dropdown.Item icon="trash" text="Move to trash" />
              <Dropdown.Divider />
              <Dropdown.Item text="Download As..." />
              <Dropdown.Item text="Publish To Web" />
              <Dropdown.Item text="E-mail Collaborators" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item name="updates">
          <Label>1</Label>
          Updates
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search mail..." />
        </Menu.Item>
      </Menu>
    </div>
  );
}
