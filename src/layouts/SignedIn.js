import React from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
} from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://res.cloudinary.com/dklvms3jy/image/upload/v1622760971/vh9faxn078oavoqpcvbm.jpg"
        ></Image>
        <Dropdown pointing="top left" text="Mert">
          <DropdownMenu>
            <DropdownItem
              as={Link}
              to="/add-job-advertisement"
              text="Yeni İlan Oluştur"
              icon="add"
            ></DropdownItem>
            <DropdownItem
              onClick={signOut}
              text="Çıkış Yap"
              icon="sign-out"
            ></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
