import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Image,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  Button,
  Label,
  Header,
  Icon,
  Divider,
} from "semantic-ui-react";
import { removeFromFav } from "../store/actions/favouriteActions";

export default function SignedIn({ signOut }) {
  const { favouriteItems } = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  const handleRemoveFromFav = (favouriteItem) => {
    dispatch(removeFromFav(favouriteItem.advertisement));
    toast.error(
      `${favouriteItem.advertisement.jobPosition.name} favorilerden kaldırıldı.`
    );
  };

  return (
    <div>
      <Menu inverted>
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
        <Menu.Item>
          <Dropdown pointing="top right" text="Favori İlanlar">
            <DropdownMenu>
              {favouriteItems.length === 0 ? (
                <Dropdown.Item>Henüz ilan favorilenmedi.</Dropdown.Item>
              ) : (
                favouriteItems.map((favouriteItem) => (
                  <Dropdown.Item>
                    <Header>
                      {favouriteItem.advertisement.jobPosition.name}

                      <Button
                        size="mini"
                        onClick={() => handleRemoveFromFav(favouriteItem)}
                      >
                        X
                      </Button>
                      <Button
                        size="mini"
                        color="black"
                        as={Link}
                        to={`/job-advertisement/${favouriteItem.advertisement.id}`}
                      >
                        <Icon name="pointing right"></Icon>
                      </Button>
                    </Header>
                    <Label>
                      {favouriteItem.advertisement.employer.companyName}
                    </Label>
                    <b>Son Başvuru: </b>
                    {favouriteItem.advertisement.applicationDeadline}
                    <Divider></Divider>
                  </Dropdown.Item>
                ))
              )}
            </DropdownMenu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </div>
  );
}
