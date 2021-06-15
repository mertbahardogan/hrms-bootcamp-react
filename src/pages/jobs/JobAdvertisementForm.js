import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import JobPositionService from "../../services/jobPositionService";
import CityService from "../../services/advertisement_utilities/cityService";
import WorkTypeService from "../../services/advertisement_utilities/workTypeService";
import WorkTimeService from "../../services/advertisement_utilities/workTimeService";
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
      cityId: Yup.number().required("Şehir seçilmesi gereklidir."),
      jobPositionId: Yup.number().required("Pozisyon seçilmesi gereklidir."),
      workTypeId: Yup.number().required("Çalışma türü seçilmesi gereklidir."),
      workTimeId: Yup.number().required("Çalışma zamanı seçilmesi gereklidir."),
      minimumSalary: Yup.number().min(0, "En az maaş 0'dan küçük olamaz."),
      maximumSalary: Yup.number().min(0, "En çok maaş 0'dan küçük olamaz."),
      description: Yup.string().required("Tanım girilmesi gereklidir."),
      countOfOpenPositions: Yup.number()
        .min(0, "Kişi sayısı 0'dan küçük olamaz.")
        .required("Kişi sayısı bilgisi gereklidir."),
      applicationDeadline: Yup.date().required(
        "Son başvuru tarihi gereklidir."
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
      <h1>İş İlanı Ekle</h1>
      {postState === true ? (
        <Message
          success
          header="Ekleme işlemini başarıyla gerçekleştirdin."
          content="Son bir adım kaldı! Onay durumunu profilinden takip edebilirsin."
        />
      ) : (
        ""
      )}

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths={"equal"}>
          <Form.Field>
            <label>Şehir</label>
            <Dropdown
              id="cityId"
              onBlur={formik.handleBlur}
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "cityId");
              }}
              placeholder="Şehir Seçiniz"
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
            ) : (
              " "
            )}
          </Form.Field>
          <Form.Field>
            <label>Pozisyon</label>
            <Dropdown
              id="jobPositionId"
              onBlur={formik.handleBlur}
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "jobPositionId");
              }}
              placeholder="İş Pozisyonu Seçiniz"
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
              " "
            )}
          </Form.Field>
        </Form.Group>
        <Form.Group widths={"equal"}>
          <Form.Field>
            <label>Çalışma Türü</label>
            <Dropdown
              id="workTypeId"
              onBlur={formik.handleBlur}
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "workTypeId");
              }}
              placeholder="Çalışma Türü Seçiniz"
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
              " "
            )}
          </Form.Field>
          <Form.Field>
            <label>Çalışma Zamanı</label>
            <Dropdown
              id="workTimeId"
              onBlur={formik.handleBlur}
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "workTimeId");
              }}
              placeholder="Çalışma Zamanı Seçiniz"
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
          <label>İş Tanımı</label>
          <TextArea
            placeholder="İş Tanımı"
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
            ""
          )}
        </Form.Field>

        <Form.Group widths={"equal"}>
          <Form.Field>
            <label>En Az Maaş</label>
            <Input
              labelPosition="right"
              type="number"
              placeholder="En az maaş"
              value={formik.values.minimumSalary}
              name="minimumSalary"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            >
              <input />
              <Label>₺</Label>
            </Input>
            {formik.errors.minimumSalary ? (
              <Label basic color="red" pointing>
                {formik.errors.minimumSalary}
              </Label>
            ) : (
              ""
            )}
          </Form.Field>
          <Form.Field>
            <label>En Fazla Maaş</label>
            <Input
              labelPosition="right"
              type="number"
              placeholder="En Fazla Maaş"
              value={formik.values.maximumSalary}
              name="maximumSalary"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            >
              <input />
              <Label>₺</Label>
            </Input>
            {formik.errors.maximumSalary ? (
              <Label basic color="red" pointing>
                {formik.errors.maximumSalary}
              </Label>
            ) : (
              ""
            )}
          </Form.Field>
        </Form.Group>
        <Form.Group widths={"equal"}>
          <Form.Field>
            <label>Açık Pozisyon Sayısı</label>
            <Input
              labelPosition="right"
              type="number"
              placeholder="Açık Pozisyon Sayısı"
              onChange={formik.handleChange}
              value={formik.values.countOfOpenPositions}
              name="countOfOpenPositions"
            >
              <input />
              <Label>kişi</Label>
            </Input>
            {formik.errors.countOfOpenPositions ? (
              <Label basic color="red" pointing>
                {formik.errors.countOfOpenPositions}
              </Label>
            ) : (
              ""
            )}
          </Form.Field>
          <Form.Field>
            <label>Son Başvuru Tarihi</label>
            <SemanticDatepicker
              onChange={(event, data) => {
                handleChangeSemantic(data.value, "applicationDeadline");
              }}
              value={formik.values.applicationDeadline}
              onBlur={formik.handleBlur}
              name="applicationDeadline"
              placeholder="Son Başvuru Tarihi"
            />
            {formik.errors.applicationDeadline ? (
              <Label basic color="red" pointing="left">
                {formik.errors.applicationDeadline}
              </Label>
            ) : (
              ""
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
