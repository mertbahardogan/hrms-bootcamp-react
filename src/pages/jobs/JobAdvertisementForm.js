import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import JobPositionService from "../../services/jobPositionService";
import CityService from "../../services/advertisementUtilities/cityService";
import WorkTypeService from "../../services/advertisementUtilities/workTypeService";
import WorkTimeService from "../../services/advertisementUtilities/workTimeService";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Dropdown,
  Input,
  Form,
  Label,
  Button,
  TextArea,
  Message,
} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";

export default function JobAdvertisementForm() {
  let jobAdvertisementService = new JobAdvertisementService();

  const [postState, setPostState] = useState(false);

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

  const formik = useFormik({
    initialValues: {
      employerId: 31,
      jobPositionId: "",
      cityId: "",
      workTypeId: "",
      workTimeId: "",
      minimumSalary: "",
      maximumSalary: "",
      description: "",
      countOfOpenPositions: "",
    },
    validationSchema: Yup.object().shape({
      cityId: Yup.number().required("??ehir se??ilmesi gereklidir."),
      jobPositionId: Yup.number().required("Pozisyon se??ilmesi gereklidir."),
      workTypeId: Yup.number().required("??al????ma t??r?? se??ilmesi gereklidir."),
      workTimeId: Yup.number().required("??al????ma zaman?? se??ilmesi gereklidir."),
      minimumSalary: Yup.number().min(0, "En az maa?? 0'dan k??????k olamaz."),
      maximumSalary: Yup.number().min(0, "En ??ok maa?? 0'dan k??????k olamaz."),
      description: Yup.string().required("Tan??m girilmesi gereklidir."),
      countOfOpenPositions: Yup.number()
        .min(0, "Ki??i say??s?? 0'dan k??????k olamaz.")
        .required("Ki??i say??s?? bilgisi gereklidir."),
      applicationDeadline: Yup.date().required(
        "Son ba??vuru tarihi gereklidir."
      ),
    }),
    onSubmit: (values) => {
      let advertPosting = {
        employer: {
          id: 31,
        },
        jobPosition: {
          id: values.jobPositionId,
        },
        city: {
          id: values.cityId,
        },
        workType: {
          id: values.workTypeId,
        },
        workTime: {
          id: values.workTimeId,
        },

        minimumSalary: values.minimumSalary,
        maximumSalary: values.maximumSalary,
        description: values.description,
        countOfOpenPositions: values.countOfOpenPositions,
        applicationDeadline: values.applicationDeadline,
      };
      jobAdvertisementService
        .add(advertPosting)
        .then((result) => setPostState(result.data.success));
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <h1>???? ??lan?? Ekle</h1>
      {postState === true ? (
        <Message
          success
          header="Ekleme i??lemini ba??ar??yla ger??ekle??tirdin."
          content="Son bir ad??m kald??! Onay durumunu profilinden takip edebilirsin."
        />
      ) : null}

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths={"equal"}>
          <Form.Field>
            <label>??ehir</label>
            <Dropdown
              id="cityId"
              onBlur={formik.handleBlur}
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "cityId");
              }}
              placeholder="??ehir Se??iniz"
              search
              item
              selection
              options={citiesOptions}
              value={formik.values.cityId}
            />
            {formik.errors.cityId ? (
              <Label basic color="red" pointing>
                {formik.errors.cityId}
              </Label>
            ) : null}
          </Form.Field>
          <Form.Field>
            <label>Pozisyon</label>
            <Dropdown
              id="jobPositionId"
              onBlur={formik.handleBlur}
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "jobPositionId");
              }}
              placeholder="???? Pozisyonu Se??iniz"
              options={jobPositionsOptions}
              value={formik.values.jobPositionId}
              search
              item
              selection
            />
            {formik.errors.jobPositionId ? (
              <Label basic color="red" pointing>
                {formik.errors.jobPositionId}
              </Label>
            ) : (
              null
            )}
          </Form.Field>
        </Form.Group>
        <Form.Group widths={"equal"}>
          <Form.Field>
            <label>??al????ma T??r??</label>
            <Dropdown
              id="workTypeId"
              onBlur={formik.handleBlur}
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "workTypeId");
              }}
              placeholder="??al????ma T??r?? Se??iniz"
              search
              item
              selection
              options={workTypesOptions}
              value={formik.values.workTypeId}
            />
            {formik.errors.workTypeId ? (
              <Label basic color="red" pointing>
                {formik.errors.workTypeId}
              </Label>
            ) : (
              null
            )}
          </Form.Field>
          <Form.Field>
            <label>??al????ma Zaman??</label>
            <Dropdown
              id="workTimeId"
              onBlur={formik.handleBlur}
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "workTimeId");
              }}
              placeholder="??al????ma Zaman?? Se??iniz"
              options={workTimesOptions}
              value={formik.values.workTimeId}
              search
              item
              selection
            />
            {formik.errors.workTimeId ? (
              <Label basic color="red" pointing>
                {formik.errors.workTimeId}
              </Label>
            ) : (
              " "
            )}
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>???? Tan??m??</label>
          <TextArea
            placeholder="???? Tan??m??"
            style={{ minHeight: 100 }}
            value={formik.values.description}
            name="description"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.errors.description ? (
            <Label basic color="red" pointing>
              {formik.errors.description}
            </Label>
          ) : (
            null
          )}
        </Form.Field>

        <Form.Group widths={"equal"}>
          <Form.Field>
            <label>En Az Maa??</label>
            <Input
              labelPosition="right"
              type="number"
              placeholder="En az maa??"
              value={formik.values.minimumSalary}
              name="minimumSalary"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            >
              <input />
              <Label>???</Label>
            </Input>
            {formik.errors.minimumSalary ? (
              <Label basic color="red" pointing>
                {formik.errors.minimumSalary}
              </Label>
            ) : (
              null
            )}
          </Form.Field>
          <Form.Field>
            <label>En Fazla Maa??</label>
            <Input
              labelPosition="right"
              type="number"
              placeholder="En Fazla Maa??"
              value={formik.values.maximumSalary}
              name="maximumSalary"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            >
              <input />
              <Label>???</Label>
            </Input>
            {formik.errors.maximumSalary ? (
              <Label basic color="red" pointing>
                {formik.errors.maximumSalary}
              </Label>
            ) : (
              null
            )}
          </Form.Field>
        </Form.Group>
        <Form.Group widths={"equal"}>
          <Form.Field>
            <label>A????k Pozisyon Say??s??</label>
            <Input
              labelPosition="right"
              type="number"
              placeholder="A????k Pozisyon Say??s??"
              onChange={formik.handleChange}
              value={formik.values.countOfOpenPositions}
              name="countOfOpenPositions"
            >
              <input />
              <Label>ki??i</Label>
            </Input>
            {formik.errors.countOfOpenPositions ? (
              <Label basic color="red" pointing>
                {formik.errors.countOfOpenPositions}
              </Label>
            ) : (
              null
            )}
          </Form.Field>
          <Form.Field>
            <label>Son Ba??vuru Tarihi</label>
            <SemanticDatepicker
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "applicationDeadline");
              }}
              value={formik.values.applicationDeadline}
              onBlur={formik.handleBlur}
              name="applicationDeadline"
              placeholder="Son Ba??vuru Tarihi"
            />
            {formik.errors.applicationDeadline ? (
              <Label basic color="red" pointing="left">
                {formik.errors.applicationDeadline}
              </Label>
            ) : (
              null
            )}
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Button type="submit" primary>
            Ekle
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
}
