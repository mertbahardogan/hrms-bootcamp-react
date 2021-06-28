import React, { useEffect, useState } from "react";
import { Card, Image, Label, Button, Divider } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";
import JobSeekerSkills from "./resumeFields/JobSeekerSkills";
import JobSeekerEducations from "./resumeFields/JobSeekerEducations";
import JobSeekerExperiences from "./resumeFields/JobSeekerExperiences";
import JobSeekerLanguages from "./resumeFields/JobSeekerLanguages";
import JobSeekerLinks from "./resumeFields/JobSeekerLinks";
import PictureService from "../../services/resumeUtilities/pictureService";

export default function ResumeDetail() {
  const [seeker, setValues] = useState([]);
  const [picture, setPicture] = useState({});
  const [seekerId, setSeekerId] = useState(3);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    let pictureService = new PictureService();

    jobSeekerService
      .getJobSeekerById(seekerId)
      .then((result) => setValues(result.data.data[0]));

    pictureService
      .getPictureById(seekerId)
      .then((result) => setPicture(result.data.data[0].url))
      .then(console.log(picture));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Button size="tiny" color="green" floated="left">
            Güncelle
          </Button>
          <Image floated="right" size="tiny" src={picture}></Image>
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
      <Label size="large" color="black">
        Yetenekler
      </Label>
      <Divider hidden></Divider>
      <JobSeekerSkills seekerId={seekerId}></JobSeekerSkills>
      <Divider></Divider>
      <Label size="large" color="black">
        Eğitim Geçmişi
      </Label>
      <Divider hidden></Divider>
      <JobSeekerEducations seekerId={seekerId}></JobSeekerEducations>
      <Divider></Divider>
      <Label size="large" color="black">
        Tecrübeler
      </Label>
      <Divider hidden></Divider>
      <JobSeekerExperiences seekerId={seekerId}></JobSeekerExperiences>
      <Divider></Divider>
      <Label size="large" color="black">
        Yabancı Diller
      </Label>
      <Divider hidden></Divider>

      <JobSeekerLanguages seekerId={seekerId}></JobSeekerLanguages>

      <Divider></Divider>
      <Label size="large" color="black">
        Linkler
      </Label>
      <Divider hidden></Divider>

      <JobSeekerLinks seekerId={seekerId}></JobSeekerLinks>
      <Divider hidden></Divider>
    </div>
  );
}

//favorilere ekleme redux ile yapılacak

//TÜM DEĞER ATAMA IDLERİ PROPDAN AL

//tarih atamalarında 1 gün eksik atanma hatası

//Resim servisinden Güncellenebilecek
//resim yükleme hatası

//Kullanılan alanlar customlaştırılacak.

//Tüm cvler listelenecek
