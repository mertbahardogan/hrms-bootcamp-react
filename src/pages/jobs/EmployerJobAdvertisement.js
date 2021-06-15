import React, { useState, useEffect } from "react";
import { Table, Header, Icon, Button } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function EmployerJobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  const refreshPage = () => {
    window.location.reload();
  };

  const advertEmployerId = 31;
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllByEmployerId(advertEmployerId)
      .then((result) => setjobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content> İş İlanlarımız</Header.Content>
      </Header>
      <Table celled color="black">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Aktif Mi?</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobPosition.name}</Table.Cell>
              <Table.Cell singleLine>
                {jobAdvertisement.description.substring(0, 20)}...
              </Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>
                {jobAdvertisement.approved === true ? (
                  jobAdvertisement.active === true ? (
                    <Button
                      onClick={() =>
                        jobAdvertisementService
                          .closeJobAdvertisement(jobAdvertisement.id)
                          .then(refreshPage)
                      }
                      color="red"
                    >
                      Pasifleştir
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        jobAdvertisementService
                          .openJobAdvertisement(jobAdvertisement.id)
                          .then(refreshPage)
                      }
                      color="green"
                    >
                      Aktifleştir
                    </Button>
                  )
                ) : (
                  "Onay bekliyor"
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
