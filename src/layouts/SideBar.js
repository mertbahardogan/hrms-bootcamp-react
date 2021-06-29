import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Divider, Dropdown, Label, Input } from "semantic-ui-react";
import CityService from "../services/advertisementUtilities/cityService";
import WorkTimeService from "../services/advertisementUtilities/workTimeService";
import WorkTypeService from "../services/advertisementUtilities/workTypeService";
import JobPositionService from "../services/jobPositionService";

export default function SideBar() {
  const [jobPositions, setjobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);

  useEffect(() => {
    fetchCities();
    fetchJobPositions();
    fetchWorkTypes();
    fetchWorkTimes();
  }, []);

  const fetchCities = () => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  };

  const fetchJobPositions = () => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setjobPositions(result.data.data));
  };

  const fetchWorkTypes = () => {
    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
  };

  const fetchWorkTimes = () => {
    let workTimeService = new WorkTimeService();
    workTimeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data));
  };

  const citiesOptions = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  const jobPositionsOptions = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.name,
    value: jobPosition.id,
  }));

  const workTypesOptions = workTypes.map((workType, index) => ({
    key: index,
    text: workType.name,
    value: workType.id,
  }));

  const workTimesOptions = workTimes.map((workTime, index) => ({
    key: index,
    text: workTime.name,
    value: workTime.id,
  }));
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
        <Menu.Item>
          <Icon name="bullhorn" />
          Filtrele
        </Menu.Item>

        <Menu.Item name="workType">
          <Dropdown
            direction="right"
            // id="workTypeId"
            // onBlur={formik.handleBlur}
            onChange={(event, data) => {
              console.log(data.value);
            }}
            placeholder="Çalışma Türü"
            search
            item
            selection
            options={workTypesOptions}
            // value={formik.values.workTypeId}
          />
        </Menu.Item>
        <Menu.Item name="workTime">
          <Dropdown
            direction="right"
            // id="workTypeId"
            // onBlur={formik.handleBlur}
            onChange={(event, data) => {
              console.log(data.value);
            }}
            placeholder="Çalışma Zamanı"
            search
            item
            selection
            options={workTimesOptions}
            // value={formik.values.workTypeId}
          />
        </Menu.Item>
        <Menu.Item name="cities">
          <Dropdown
            direction="right"
            // id="workTypeId"
            // onBlur={formik.handleBlur}
            onChange={(event, data) => {
              console.log(data.value);
            }}
            placeholder="Lokasyon"
            search
            item
            selection
            options={citiesOptions}
            // value={formik.values.workTypeId}
          />
        </Menu.Item>
        <Menu.Item name="jobPosition">
          <Dropdown
            direction="right"
            // id="workTypeId"
            // onBlur={formik.handleBlur}
            onChange={(event, data) => {
              console.log(data.value);
            }}
            placeholder="Pozisyon"
            search
            item
            selection
            options={jobPositionsOptions}
            // value={formik.values.workTypeId}
          />
        </Menu.Item>
      </Menu>
    </div>
  );
}
