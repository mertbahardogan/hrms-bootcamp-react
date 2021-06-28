import React, { useEffect, useState } from "react";
import ExperienceService from "../../../services/resumeUtilities/experienceService";
import { Card } from "semantic-ui-react";
import UpdateJobSeekerExperiences from "../updateResume/UpdateJobSeekerExperiences";

export default function JobSeekerExperiences({seekerId}) {
  const [experience, setExperience] = useState([]);

  console.log(seekerId);
  useEffect(() => {
    let experienceService = new ExperienceService();
    experienceService
      .getExperiencesById(seekerId)
      .then((result) => setExperience(result.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="ui stackable three column grid">
        {experience.map((value) => (
          <div key={value.id} className="column">
            <Card>
              <Card.Content>
                <UpdateJobSeekerExperiences
                  id={value.id}
                  experienceValue={value}
                ></UpdateJobSeekerExperiences>
                <Card.Header>{value.position}</Card.Header>
                <Card.Meta>{value.workplaceName}</Card.Meta>
                <Card.Description>
                  <b>Başlangıç: </b>
                  {value.startDate}
                </Card.Description>
                <Card.Description>
                  <b>Bitiş: </b>
                  {value.endDate}
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
