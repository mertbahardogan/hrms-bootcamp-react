import React, { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobPositionService from "../../services/jobPositionService";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function JobPosition() {
  const [jobPositions, setjobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setjobPositions(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content>Açık Pozisyonlar</Header.Content>
      </Header>
      <Table celled color="black">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>İlanları Gör</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((jobPosition) => (
            <Table.Row key={jobPosition.id}>
              <Table.Cell>{jobPosition.name}</Table.Cell>
              <Table.Cell>
                <Button
                  as={Link}
                  to={`/job-position-advertisements/${jobPosition.id}`}
                  color="black"
                >
                  Detayları Gör
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
