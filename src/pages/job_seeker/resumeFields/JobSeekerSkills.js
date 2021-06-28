import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import SkillService from "../../../services/resumeUtilities/skillService";
import UpdateJobSeekerSkills from "../updateResume/UpdateJobSeekerSkills";

export default function JobSeekerSkills({seekerId}) {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    let skillService = new SkillService();
    skillService
      .getSkillsById(seekerId)
      .then((result) => setSkill(result.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="ui stackable three column grid">
        {skill.map((value) => (
          <div key={value.id} className="column">
            <Card>
              <Card.Content>
                <Card.Header textAlign="center">{value.name}</Card.Header>
              </Card.Content>
              <UpdateJobSeekerSkills
                skillValue={value}
                id={value.id}
              ></UpdateJobSeekerSkills>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
