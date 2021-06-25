import React, { useEffect, useState } from "react";
import { Card, Image, Label, Button, Divider } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";
import JobSeekerSkills from "./resumeFields/JobSeekerSkills";
import JobSeekerEducations from "./resumeFields/JobSeekerEducations";
import JobSeekerExperiences from "./resumeFields/JobSeekerExperiences";

export default function ResumeDetail() {
  const [seeker, setValues] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekerById(3)
      .then((result) => setValues(result.data.data[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Button size="tiny" color="green" floated="left">
            Güncelle
          </Button>
          <Image
            floated="right"
            size="tiny"
            src="https://res.cloudinary.com/dklvms3jy/image/upload/v1622760971/vh9faxn078oavoqpcvbm.jpg"
          ></Image>
          <Card.Header textAlign="center">
            {seeker.firstName + " " + seeker.lastName} Özgeçmişi
          </Card.Header>
          <Card.Description>
            <Label>İletişim </Label> {seeker.email}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <Label>Niyet Mektubu </Label>
            {seeker.coverLetter === null
              ? "Henüz eklenmedi."
              : seeker.coverLetter}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label>Doğum Tarihi</Label> {seeker.birthOfDate}
        </Card.Content>
      </Card>

      <Divider></Divider>
      <Label size="large" color="brown">
        Yetenekler
      </Label>
      <Divider hidden></Divider>
      <JobSeekerSkills></JobSeekerSkills>
      <Divider></Divider>
      <Label size="large" color="brown">
        Eğitim Geçmişi
      </Label>
      <Divider hidden></Divider>
      <JobSeekerEducations></JobSeekerEducations>
      <Divider></Divider>
      <Label size="large" color="brown">
        Tecrübeler
      </Label>
      <Divider hidden></Divider>
      <JobSeekerExperiences></JobSeekerExperiences>
    </div>
  );
}
