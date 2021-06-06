import React from "react";
import { Grid, Header, Icon, GridColumn, GridRow } from "semantic-ui-react";
import JobSeeker from "../pages/users/JobSeeker";
import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <SideBar></SideBar>{" "}
          </GridColumn>
          <GridColumn width={12}>
            {/* burası dinamik olarak app.js'den getirilecek */}
            <Header as="h3">
              <Icon name="list alternate outline" />
              <Header.Content>X List</Header.Content>
            </Header>
            <JobSeeker></JobSeeker>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
