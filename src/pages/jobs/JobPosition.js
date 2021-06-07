import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobPositionService from "../../services/jobPositionService";
import { Button } from "semantic-ui-react";

export default function JobPosition() {
  const [jobPositions, setjobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setjobPositions(result.data.data));
  });

  return (
    <div>
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
                <Button content="Detay" secondary />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
