import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Card, Header, Icon, Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";

export default function JobAdvertisementDetailPosition() {
  let { id } = useParams();
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAdvertsByJobPositionId(id)
      .then((result) => setAdverts(result.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content>İş İlanları</Header.Content>
      </Header>
      {adverts.map((advert) => (
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
              İş İlan Detayları
            </Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
