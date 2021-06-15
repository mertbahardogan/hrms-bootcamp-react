import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import JobAdvertisement from "../pages/jobs/JobAdvertisement";
import Company from "../pages/others/Company";
import JobPosition from "../pages/jobs/JobPosition";
import Employer from "../pages/users/Employer";
import JobSeeker from "../pages/users/JobSeeker";
import SideBar from "./SideBar";
import { Route } from "react-router";
import Home from "../pages/others/Home";
import JobAdvertisementForm from "../pages/jobs/JobAdvertisementForm";
import EmployerJobAdvertisement from "../pages/jobs/EmployerJobAdvertisement";
import PersonnelClosedAdvertisement from "../pages/jobs/PersonnelClosedAdvertisement";
import PersonnelOpenedAdvertisement from "../pages/jobs/PersonnelOpenedAdvertisement";

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
            {/* <Header as="h3">
              <Icon name="list alternate outline" />
              <Header.Content>X Sayfası</Header.Content>
            </Header> */}
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/companies" component={Company}></Route>
            <Route exact path="/job-seekers" component={JobSeeker}></Route>
            <Route exact path="/job-positions" component={JobPosition}></Route>
            <Route exact path="/employers" component={Employer}></Route>
            <Route
              path="/job-advertisements"
              component={JobAdvertisement}
            ></Route>
            <Route
              path="/add-job-advertisement"
              component={JobAdvertisementForm}
            ></Route>
            <Route
              path="/employer-job-advertisement"
              component={EmployerJobAdvertisement}
            ></Route>
            <Route
              path="/personnel-closed-advertisement"
              component={PersonnelClosedAdvertisement}
            ></Route>
            <Route
              path="/personnel-opened-advertisement"
              component={PersonnelOpenedAdvertisement}
            ></Route>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
