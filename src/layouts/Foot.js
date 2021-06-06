import React from "react";
import { Icon, Menu } from "semantic-ui-react";

export default function Foot() {
  return (
    <div>
      <Menu attached="bottom" tabular>
        <Menu.Item name="active">Active Project</Menu.Item>

        <Menu.Item name="2">Project #2</Menu.Item>

        <Menu.Item name="3">Project #3</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="new-tab">
            <Icon name="add" />
            New Tab
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
