import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Grid, Header, Table, Label } from "semantic-ui-react";

import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { id } = useParams();
  const [advertDetail, setAdvertDetail] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAdvertByIsActiveAndId(id)
      .then((result) => setAdvertDetail(result.data.data[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header>
        <Card fluid>
          <Card.Content>
            <Card.Header>{advertDetail.jobPosition?.name}</Card.Header>
            <Card.Meta>{advertDetail.description}</Card.Meta>
          </Card.Content>
        </Card>
      </Header>
      <Grid columns="two" divided>
        <Grid.Row>
          <Grid.Column width={6}>
            <Card fluid>
              <Card.Content>
                <Card.Header>{advertDetail.id}</Card.Header>
                <Card.Meta>{advertDetail.description}</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={10}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label color="black" ribbon>Lokasyon</Label>
                  </Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
