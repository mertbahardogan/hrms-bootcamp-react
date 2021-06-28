import React, { useEffect, useState } from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import LinkService from "../../../services/resumeUtilities/linkSerivce";
import UpdateJobSeekerLink from "../updateResume/UpdateJobSeekerLinks";

export default function JobSeekerLinks({ seekerId }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    let linkService = new LinkService();
    linkService
      .getLinksById(seekerId)
      .then((result) => setLinks(result.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="ui stackable three column grid">
        {links.map((value) => (
          <div key={value.id} className="column">
            <Card>
              <Card.Content>
                <UpdateJobSeekerLink
                  id={value.id}
                  linkValue={value}
                ></UpdateJobSeekerLink>
                <Button>
                  <Icon
                    name={value.linkType.id === 2 ? "linkedin" : "twitter"}
                  ></Icon>
                  {value.linkType?.name}
                </Button>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
