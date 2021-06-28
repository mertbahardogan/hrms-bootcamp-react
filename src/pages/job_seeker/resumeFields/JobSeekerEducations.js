import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import EducationService from "../../../services/resumeUtilities/educationsService";
import UpdateJobSeekerEducation from "../updateResume/UpdateJobSeekerEducations";

export default function JobSeekerEducations({ seekerId }) {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    let educationService = new EducationService();
    educationService
      .getEducationsById(seekerId)
      .then((result) => setEducation(result.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="ui stackable three column grid">
        {education.map((value) => (
          <div key={value.id} className="column">
            <Card>
              <Card.Content>
                <UpdateJobSeekerEducation
                  id={value.id}
                  educationValue={value}
                ></UpdateJobSeekerEducation>
                <Card.Header>{value.schoolName}</Card.Header>
                <Card.Meta>{value.departmentName}</Card.Meta>
                <Card.Description>
                  <b>Başlangıç: </b>
                  {value.startDate}
                </Card.Description>
                <Card.Description>
                  <b>Bitiş: </b>
                  {value.graduationDate}
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
