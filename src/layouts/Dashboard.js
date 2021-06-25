import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import JobAdvertisement from "../pages/jobs/JobAdvertisement";
import Company from "../pages/employer/Company";
import JobPosition from "../pages/jobs/JobPosition";
import Employer from "../pages/employer/Employer";
import JobSeeker from "../pages/job_seeker/JobSeeker";
import SideBar from "./SideBar";
import { Route } from "react-router";
import Home from "../pages/Home";
import JobAdvertisementForm from "../pages/jobs/JobAdvertisementForm";
import EmployerJobAdvertisement from "../pages/jobs/EmployerJobAdvertisement";
import PersonnelNotApprovedAdvert from "../pages/jobs/PersonnelNotApprovedAdvert";
import PersonnelApprovedAdvertisement from "../pages/jobs/PersonnelApprovedAdvertisement";
import JobAdvertisementDetail from "../pages/jobs/JobAdvertisementDetail";
import CompanyDetail from "../pages/employer/CompanyDetail";
import Resume from "../pages/job_seeker/Resume";
import JobAdvertisementDetailPosition from "../pages/jobs/JobAdvertisementDetailPosition";
import ResumeDetail from "../pages/job_seeker/ResumeDetail";

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
            <Route path="/company/:id" component={CompanyDetail}></Route>

            <Route exact path="/resume" component={Resume}></Route>

            <Route exact path="/job-seeker" component={JobSeeker}></Route>
            <Route
              exact
              path="/job-seeker/resume"
              component={ResumeDetail}
            ></Route>
            <Route exact path="/job-positions" component={JobPosition}></Route>
            <Route
              exact
              path="/job-position-advertisements/:id"
              component={JobAdvertisementDetailPosition}
            ></Route>

            <Route exact path="/employers" component={Employer}></Route>

            <Route
              path="/job-advertisements"
              component={JobAdvertisement}
            ></Route>
            <Route
              path="/job-advertisement/:id"
              component={JobAdvertisementDetail}
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
              path="/personnel-not-approved-advertisement"
              component={PersonnelNotApprovedAdvert}
            ></Route>
            <Route
              path="/personnel-approved-advertisement"
              component={PersonnelApprovedAdvertisement}
            ></Route>
            <Route path="/company-detail/:id" component={CompanyDetail}></Route>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
