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
import LinkService from "../../../services/resumeUtilities/linkSerivce";

export default function UpdateJobSeekerLinks({ id, linkValue }) {
  let linkService = new LinkService();
  const [open, setOpen] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };
  const initialvalues = {
    link: linkValue.link,
  };
  const schema = Yup.object().shape({
    link: Yup.string().required("Bu alan zorunludur."),
  });
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: schema,
    onSubmit: (values) => {
      let newLink = {
        link: values.link,
        linkType: { id: linkValue.linkType.id },
        jobSeeker: {
          id: 3,
        },
      };
      linkService.updateLinks(id, newLink).then(refreshPage);
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
      <Modal.Header>Hesapları Güncelle</Modal.Header>
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
                {linkValue.linkType?.name}
              </Label>
            </FormField>
            <FormField>
              <Input
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                type="text"
                value={formik.values.link}
                name="link"
                placeholder="Seviye"
              ></Input>
              {formik.errors.link ? (
                <Label basic color="red" pointing="left">
                  {formik.errors.link}
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
