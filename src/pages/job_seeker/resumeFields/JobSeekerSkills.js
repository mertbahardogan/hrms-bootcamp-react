import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import SkillService from "../../../services/resumeUtilities/skillService";
import UpdateJobSeekerSkills from "../updateResume/UpdateJobSeekerSkills";

export default function JobSeekerSkills() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    let skillService = new SkillService();
    skillService.getSkillsById(3).then((result) => setSkill(result.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="ui stackable three column grid">
        {skill.map((value) => (
          <div key={value.id} className="column">
            <Card key={value.id}>
              <Card.Content>
                <Card.Header textAlign="center">{value.name}</Card.Header>
              </Card.Content>

              <UpdateJobSeekerSkills id={value.id}></UpdateJobSeekerSkills>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
