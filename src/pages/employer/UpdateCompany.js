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
import EmployerService from "../../services/employerService";

export default function UpdateCompany({ id, companyValue, mert }) {
  let employerService = new EmployerService();
  const [open, setOpen] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };

  const initialValues = {
    companyName: companyValue.companyName,
    email: companyValue.email,
    website: companyValue.website,
    phoneNumber: companyValue.phoneNumber,
    password: companyValue.password,
  };
  const schema = Yup.object().shape({
    companyName: Yup.string().required("Şirket adı zorunludur."),
    email: Yup.string().required("Email zorunludur."),
    website: Yup.string().required("Website zorunludur."),
    phoneNumber: Yup.string().required("Numara zorunludur."),
    password: Yup.string().required("Parola alanı zorunludur."),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      let newExperience = {
        companyName: values.companyName,
        email: values.email,
        website: values.website,
        phoneNumber: values.phoneNumber,
        password: values.password,
        employerCase: {
          id: 2,
        },
        jobSeeker: {
          id: 3,
        },
      };
      employerService.updateCompany(id, newExperience).then(refreshPage);
    },
  });

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="left" size="tiny" color="black" icon>
          <Icon name="edit" /> Bilgileri Güncelle
        </Button>
      }
    >
      <Modal.Header>Şirket Bilgilerini Güncelle</Modal.Header>
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
                value={formik.values.companyName}
                name="companyName"
                placeholder="Şirket Adı"
              ></Input>
              {formik.errors.companyName ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.companyName}
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
                value={formik.values.email}
                name="email"
                placeholder="Email"
              ></Input>
              {formik.errors.email ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.email}
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
                value={formik.values.website}
                name="website"
                placeholder="Website"
              ></Input>
              {formik.errors.website ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.website}
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
                value={formik.values.phoneNumber}
                name="phoneNumber"
                placeholder="Telefon Numarası"
              ></Input>
              {formik.errors.phoneNumber ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.phoneNumber}
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
                value={formik.values.password}
                name="password"
                placeholder="Parola"
              ></Input>
              {formik.errors.password ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.password}
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
//Parola tekrarı ve initial value undefined hataları
