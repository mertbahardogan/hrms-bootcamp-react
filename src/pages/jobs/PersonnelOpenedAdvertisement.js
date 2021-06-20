import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Header, Icon, Button } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function PersonnelOpenedAdvertisement() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllByIsApproved()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3" floated="left">
        <Icon name="list alternate outline" />
        <Header.Content>Onaylanmış İş İlanları</Header.Content>
      </Header>
      <Header floated="right">
        <Button
          as={Link}
          to="/personnel-not-approved-advertisement"
          color="secondary"
        >
          <Icon name="check circle" /> Onaylanmamış İlanlar
        </Button>
      </Header>
      <Table celled color="black">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İşlem ID</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>Lokasyon</Table.HeaderCell>
            <Table.HeaderCell>Yetkili İletişim</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Aktif Mi?</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.id}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPosition.name}</Table.Cell>
              <Table.Cell singleLine>
                {jobAdvertisement.description.substring(0, 10)}...
              </Table.Cell>
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
                {jobAdvertisement.active ? "Aktif" : "Değil"}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
