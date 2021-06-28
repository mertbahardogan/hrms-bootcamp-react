import React, { useEffect, useState } from "react";
import { Card, Rating } from "semantic-ui-react";
import LanguageService from "../../../services/resumeUtilities/languageService";
import UpdateJobSeekerLanguage from "../updateResume/UpdateJobSeekerLanguages";

export default function JobSeekerLanguages({ seekerId }) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .getLanguagesById(seekerId)
      .then((result) => setLanguages(result.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="ui stackable three column grid">
        {languages.map((value) => (
          <div key={value.id} className="column">
            <Card>
              <Card.Content>
                <UpdateJobSeekerLanguage
                  id={value.id}
                  languageValue={value}
                ></UpdateJobSeekerLanguage>
                <Card.Header>{value.language?.name}</Card.Header>
                <Rating icon="star" disabled defaultRating={value.level} maxRating={5} />
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
