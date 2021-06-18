import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Button, Card } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function JobAdvertisement() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content>İş İlanları</Header.Content>
      </Header>
      {jobAdvertisements.map((advert) => (
        <Card fluid color="black" header="Option 1">
          <Card.Content>
            <Card.Header>{advert.jobPosition.name}</Card.Header>
            <Card.Meta>
              <strong>Son Başvuru Tarihi:</strong> {advert.applicationDeadline}
            </Card.Meta>
            <Card.Description>
              <strong>Yayınlayan: </strong>{advert.employer.companyName}
            </Card.Description>
          </Card.Content>

          <Card.Content textAlign="right">
            <Button
              as={Link}
              to={`/job-advertisement-detail/${advert.id}`}
              color="black"
            >
              Detayları Gör
            </Button>
          </Card.Content>
        </Card>
      ))}

      {/* <Table celled color="black">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>Lokasyon</Table.HeaderCell>
            <Table.HeaderCell>Yetkili İletişim</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İlan Detayları</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPosition.name}</Table.Cell>
              <Table.Cell>{jobAdvertisement.description}</Table.Cell>
              <Table.Cell>
                {jobAdvertisement.countOfOpenPositions} kişi
              </Table.Cell>
              <Table.Cell>
                {jobAdvertisement.maximumSalary === 0
                  ? "-"
                  : jobAdvertisement.minimumSalary +
                    "-" +
                    jobAdvertisement.maximumSalary}
              </Table.Cell>
              <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.email}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>
                <Button
                  as={Link}
                  to={`/job-advertisement-detail/${jobAdvertisement.id}`}
                  secondary
                >
                  Görüntüle
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}
    </div>
  );
}
