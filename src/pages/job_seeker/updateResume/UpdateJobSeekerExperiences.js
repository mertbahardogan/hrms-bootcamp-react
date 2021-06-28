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
import ExperienceService from "../../../services/resumeUtilities/experienceService";
import SemanticDatepicker from "react-semantic-ui-datepickers";

export default function UpdateJobSeekerExperiences({ id, experienceValue }) {
  let experienceService = new ExperienceService();

  const [startDate, setStartDate] = useState(experienceValue.startDate);
  const [open, setOpen] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };
  const initialvalues = {
    position: experienceValue.position,
    workplaceName: experienceValue.workplaceName,
    startDate: new Date(experienceValue.startDate),
    endDate: experienceValue.endDate ? new Date(experienceValue.endDate) : "",
  };
  const schema = Yup.object().shape({
    position: Yup.string().required("Pozisyon adı zorunludur."),
    workplaceName: Yup.string().required("Çalışma yeri zorunludur."),
    startDate: Yup.date()
      .required("Başlangıç tarihi gereklidir.")
      .min(0, "Başlangıç tarihi 0'dan küçük olamaz"),
    endDate: Yup.date()
      .nullable()
      .min(startDate, "Bitiş tarihi Başlangıç tarihinden erken olamaz."),
  });

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: schema,
    onSubmit: (values) => {
      let newExperience = {
        position: values.position,
        workplaceName: values.workplaceName,
        startDate: values.startDate,
        endDate: values.endDate,
        jobSeeker: {
          id: 3,
        },
      };
      experienceService
        .updateExperience(id, newExperience)
        .then(refreshPage);
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
                value={formik.values.position}
                name="position"
                placeholder="Pozisyon"
              ></Input>
              {/* <ErrorMessage
                name="position"
                render={(error) => (
                  <Label pointing basic color="red" content={error}></Label>
                )}
              ></ErrorMessage> */}
              {formik.errors.position ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.position}
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
                value={formik.values.workplaceName}
                name="workplaceName"
                placeholder="Çalışma Yeri"
              ></Input>
              {formik.errors.workplaceName ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.workplaceName}
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
                  handleChangeSemantic(data.value, "endDate");
                }}
                value={formik.values.endDate}
                name="endDate"
                placeholder="Bitiş Tarihi"
              />
              {formik.errors.endDate ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.endDate}
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
