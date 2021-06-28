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
import LanguageService from "../../../services/resumeUtilities/languageService";

export default function UpdateJobSeekerLanguages({ id, languageValue }) {
  let languageService = new LanguageService();
  const [open, setOpen] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };
  const initialvalues = {
    level: languageValue.level,
  };
  const schema = Yup.object().shape({
    level: Yup.number()
      .required("Bu alan zorunludur.")
      .min(1, "Seviye 1'den düşük olamaz.")
      .max(5, "Seviye 5'den yüksek olamaz."),
  });
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: schema,
    onSubmit: (values) => {
      let newLanguage = {
        level: values.level,
        language: { id: languageValue.language.id },
        jobSeeker: {
          id: 3,
        },
      };
      languageService.updateLanuages(id, newLanguage).then(refreshPage);
    },
  });
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
      <Modal.Header>Yabancı Dil Güncelle</Modal.Header>
      <Form
        autoComplete="off"
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
      >
        <Modal.Content>
          <Divider hidden></Divider>
          <Modal.Description>
            <FormField>
              <Label size="large" color="black">
                {languageValue.language?.name}
              </Label>
            </FormField>
            <FormField>
              <Input
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                type="number"
                value={formik.values.level}
                name="level"
                placeholder="Seviye"
              ></Input>
              {formik.errors.level ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.level}
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
