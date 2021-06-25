import React, { useEffect, useState } from "react";
import JobSeekerService from "../../../services/jobSeekerService";
import { Card } from "semantic-ui-react";

export default function JobSeekerEducations() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekerResume(3)
      .then((result) =>
        setEducation({ ...result.data.data.jobSeekerEducations[0] })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card>
        <Card.Content header={education.schoolName} />
        <Card.Content header={education.startDate} />
        <Card.Content header={education.graduationDate} />
      </Card>
    </div>
  );
}
