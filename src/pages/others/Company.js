import React, { useState, useEffect } from "react";
import { Card, Icon } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function Company() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  });

  return (
    <div>
      {jobAdvertisements.map((jobAdvertisement) => (
        <Card fluid color="black">
          <Card.Content header={jobAdvertisement.employer.companyName} />
          <Card.Meta>{jobAdvertisement.employer.website}</Card.Meta>
          <Card.Content description={jobAdvertisement.employer.email} />
          <Card.Content extra>
            <Icon name="bullhorn" />
            Açık İlan Sayısı: 4
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
