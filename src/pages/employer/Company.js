import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Header, Button } from "semantic-ui-react";
import EmployerService from "../../services/employerService";

export default function Company() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content>Şirketler</Header.Content>
      </Header>
      {employers.map((employer) => (
        <Card key={employer.id} fluid>
          <Card.Content>
            <Card.Header textAlign="center">{employer.companyName}</Card.Header>
            <Card.Meta textAlign="center">{employer.website}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button primary>Web Sitesi</Button>
              <Button.Or></Button.Or>

              <Button as={Link} to={`/company/${employer.id}`} secondary>
                Şirket Profili
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
