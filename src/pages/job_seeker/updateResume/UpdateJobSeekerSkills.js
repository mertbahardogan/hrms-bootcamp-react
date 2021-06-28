import React, { useState } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormField, Label, Divider } from "semantic-ui-react";
import * as Yup from "yup";
import SkillService from "../../../services/resumeUtilities/skillService";

export default function UpdateJobSeekerSkills({ id, skillValue }) {
  let skillService = new SkillService();
  const [open, setOpen] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };
  const initialValues = {
    name: skillValue.name,
  };
  const schema = Yup.object({
    name: Yup.string().required("Yetenek adı zorunludur."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        let newSkill = {
          name: values.name,
          jobSeeker: {
            id: 3,
          },
        };

        skillService.updateSkill(id, newSkill).then(refreshPage);
      }}
    >
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
        <Form className="ui form">
          <Modal.Content>
            <Divider hidden></Divider>
            <Modal.Description>
              <FormField>
                <Field name="name" placeholder="Yetenek Adı"></Field>
                <ErrorMessage
                  name="name"
                  render={(error) => (
                    <Label pointing basic color="red" content={error}></Label>
                  )}
                ></ErrorMessage>
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
    </Formik>
  );
}
