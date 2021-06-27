import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { useFormik } from "formik";
import {
  FormField,
  Label,
  Divider,
  Icon,
  Input,
  Form,
} from "semantic-ui-react";
import * as Yup from "yup";
import EducationService from "../../../services/resumeUtilities/educationsService";
import SemanticDatepicker from "react-semantic-ui-datepickers";

export default function UpdateJobSeekerEducations({ id, educationValue }) {
  let educationService = new EducationService();
  const [startDate, setStartDate] = useState(educationValue.startDate);
  const [open, setOpen] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };
  const initialvalues = {
    departmentName: educationValue.departmentName,
    schoolName: educationValue.schoolName,
    startDate: new Date(educationValue.startDate),
    graduationDate: educationValue.graduationDate
      ? new Date(educationValue.graduationDate)
      : "",
  };
  const schema = Yup.object().shape({
    departmentName: Yup.string().required("Bölüm adı zorunludur."),
    schoolName: Yup.string().required("Okul adı zorunludur."),
    startDate: Yup.date()
      .required("Başlangıç tarihi gereklidir.")
      .min(0, "Başlangıç tarihi 0'dan küçük olamaz"),
    graduationDate: Yup.date()
      .nullable()
      .min(startDate, "Mezuniyet tarihi Başlangıç tarihinden erken olamaz."),
  });

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: schema,
    onSubmit: (values) => {
      let newEducation = {
        departmentName: values.departmentName,
        schoolName: values.schoolName,
        startDate: values.startDate,
        graduationDate: values.graduationDate,
        jobSeeker: {
          id: 3,
        },
      };
      educationService.updateEducation(id, newEducation).then(refreshPage);
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" size="tiny" basic color="green" icon>
          <Icon name="edit" />
        </Button>
      }
    >
      <Modal.Header>Yetenekleri Güncelle</Modal.Header>
      <Form
        autoComplete="off"
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
      >
        <Modal.Content>
          <Divider hidden></Divider>
          <Modal.Description>
            <FormField>
              <Input
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                type="text"
                value={formik.values.departmentName}
                name="departmentName"
                placeholder="Bölüm Adı"
              ></Input>
              {/* <ErrorMessage
                name="departmentName"
                render={(error) => (
                  <Label pointing basic color="red" content={error}></Label>
                )}
              ></ErrorMessage> */}
              {formik.errors.departmentName ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.departmentName}
                </Label>
              ) : null}
            </FormField>
            <FormField>
              <Input
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                type="text"
                value={formik.values.schoolName}
                name="schoolName"
                placeholder="Okul Adı"
              ></Input>
              {formik.errors.schoolName ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.schoolName}
                </Label>
              ) : null}
            </FormField>
            <FormField>
              <SemanticDatepicker
                onBlur={formik.handleBlur}
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "startDate");
                  setStartDate(data.value);
                }}
                value={formik.values.startDate}
                name="startDate"
                placeholder="Başlangıç Tarihi"
              />
              {formik.errors.startDate ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.startDate}
                </Label>
              ) : null}
            </FormField>
            <FormField>
              <SemanticDatepicker
                onBlur={formik.handleBlur}
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "graduationDate");
                }}
                value={formik.values.graduationDate}
                name="graduationDate"
                placeholder="Bitiş Tarihi"
              />
              {formik.errors.graduationDate ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.graduationDate}
                </Label>
              ) : null}
            </FormField>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Divider hidden></Divider>
          <Button onClick={() => setOpen(false)}>Kapat</Button>
          <Button color="green" type="submit">
            Güncelle
          </Button>
          <Divider hidden></Divider>
        </Modal.Actions>
      </Form>
    </Modal>
  );
}
