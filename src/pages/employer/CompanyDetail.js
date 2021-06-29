import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Table, Header, Card, Button } from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import UpdateCompany from "./UpdateCompany";

export default function CompanyDetail() {
  let { id } = useParams();
  const [adverts, setAdverts] = useState([]);
  const [employer, setEmployer] = useState({});
  const [oldEmployer, setOldEmployer] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    let employerService = new EmployerService();

    jobAdvertisementService
      .getAdvertsByEmployerId(id)
      .then((result) => setAdverts(result.data.data))
      .then(console.log(adverts.length));

    employerService
      .getEmployerById(id)
      .then((result) => setEmployer(result.data.data[0]))
      .then(console.log("Detail: " + employer.employerCase.caseName, id));

    employer.employerCase.caseName === "Onaylandı"
      ? console.log("ÇALIŞTIM")
      : employerService
          .getOldEmployerById(id)
          .then((result) => setEmployer(result.data.data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div>
      <Header>
        <Card fluid>
          <Card.Content>
            <Card.Header>{employer.companyName}</Card.Header>
            <Card.Meta>{employer.website}</Card.Meta>
            <Card.Meta textAlign="right">
              <Button as={Link} to={"/companies"} secondary>
                Tüm Şirketler
              </Button>
            </Card.Meta>
          </Card.Content>
        </Card>
      </Header>

      <Grid columns="two" divided>
        <Grid.Row>
          <Grid.Column width={6}>
            <Table celled color="black">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>İşveren</Table.HeaderCell>
                  <Table.HeaderCell>Detaylar</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <strong>Email</strong>
                  </Table.Cell>
                  <Table.Cell>{employer.email}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Telefon</strong>
                  </Table.Cell>
                  <Table.Cell>+90{employer.phoneNumber}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <strong>İlan Sayısı</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {adverts?.length > 0 ? adverts.length : 0}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell colSpan="4">
                    <UpdateCompany
                      id={employer.id}
                      companyValue={employer}
                      mert={"mert"}
                    ></UpdateCompany>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>

          <Grid.Column width={10}>
            <Table celled color="black">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Lokasyon</Table.HeaderCell>
                  <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
                  <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                  <Table.HeaderCell>İlan Detayı</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {adverts.length > 0 ? (
                adverts.map((advert) => (
                  <Table.Body key={advert.id}>
                    <Table.Row>
                      <Table.Cell>{advert.jobPosition?.name}</Table.Cell>
                      <Table.Cell>{advert.city?.name}</Table.Cell>
                      <Table.Cell>{advert.countOfOpenPositions}</Table.Cell>
                      <Table.Cell>{advert.applicationDeadline}</Table.Cell>
                      <Table.Cell>
                        <Button
                          as={Link}
                          to={`/job-advertisement/${advert.id}`}
                          secondary
                        >
                          Git
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))
              ) : (
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>İlan Bulunamadı</Table.Cell>
                  </Table.Row>
                </Table.Body>
              )}
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
