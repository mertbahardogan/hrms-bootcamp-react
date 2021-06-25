import React, { useEffect, useState } from "react";
import JobSeekerService from "../../../services/jobSeekerService";
import { Card } from "semantic-ui-react";

export default function JobSeekerExperiences() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekerResume(3)
      .then((result) =>
        setExperience({ ...result.data.data.jobSeekerExperiences[0] })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{experience.position}</Card.Header>
          <Card.Meta>{experience.workplaceName}</Card.Meta>
          <Card.Description>
            Matthew is a pianist living in Nashville.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content header={experience.workplaceName} />
        <Card.Content header={experience.position} />
        <Card.Content header={experience.startDate} />
        <Card.Content header={experience.endDate} />
      </Card>
    </div>
  );
}

//SERVİCE DEĞİŞTİR