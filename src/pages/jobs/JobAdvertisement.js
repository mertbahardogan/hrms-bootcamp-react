import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Button, Card } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function JobAdvertisement() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAdvertsByIsActiveAndIsApproved()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content>İş İlanları</Header.Content>
      </Header>
      {jobAdvertisements.map((advert) => (
        <Card fluid color="black" header="Option 1">
          <Card.Content>
            <Card.Header>{advert.jobPosition.name}</Card.Header>
            <Card.Meta>
              <b>Son Başvuru Tarihi:</b> {advert.applicationDeadline}
            </Card.Meta>
            <Card.Description>
              <b>{advert.employer.companyName} </b>
            </Card.Description>
          </Card.Content>

          <Card.Content textAlign="right">
            <Button
              as={Link}
              to={`/job-advertisement/${advert.id}`}
              color="black"
            >
              Detayları Gör
            </Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
