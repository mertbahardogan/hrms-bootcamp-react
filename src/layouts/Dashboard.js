import React from "react";
import { Grid, Header, Icon, GridColumn, GridRow } from "semantic-ui-react";
import JobAdvertisement from "../pages/jobs/JobAdvertisement";
import Company from "../pages/others/Company";
// import JobPosition from "../pages/jobs/JobPosition";
// import Employer from "../pages/users/Employer";
// import JobSeeker from "../pages/users/JobSeeker";
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
              <Header.Content>X Sayfası</Header.Content>
            </Header>
            {/* <JobSeeker></JobSeeker> */}
            {/* <Employer></Employer> */}
            {/* <JobPosition></JobPosition> */}
            {/* <JobAdvertisement></JobAdvertisement> */}
            <Company></Company>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
