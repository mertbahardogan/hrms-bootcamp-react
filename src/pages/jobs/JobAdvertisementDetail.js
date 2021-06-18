import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Grid, Header, Table, Button, Icon } from "semantic-ui-react";

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
                    <Icon name="building"></Icon>
                    <strong>Şirket Adı</strong>
                  </Table.Cell>
                  <Table.Cell>{advertDetail.employer?.companyName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="mail"></Icon>
                    <strong>Email</strong>
                  </Table.Cell>
                  <Table.Cell>{advertDetail.employer?.email}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="phone"></Icon>
                    <strong>Telefon</strong>
                  </Table.Cell>
                  <Table.Cell>
                    +90{advertDetail.employer?.phoneNumber}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="globe"></Icon>
                    <strong>Web Sitesi</strong>
                  </Table.Cell>
                  <Table.Cell>{advertDetail.employer?.website}</Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan="8">
                    <Button size="mini" color="grey">
                      <Icon name="eye"></Icon>
                      Şirket Profili
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
          <Grid.Column width={10}>
            <Table celled color="black">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>İş İlanı</Table.HeaderCell>
                  <Table.HeaderCell>Detaylar</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <strong>Lokasyon</strong>
                  </Table.Cell>
                  <Table.Cell>{advertDetail.city?.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Çalışma Türü</strong>
                  </Table.Cell>
                  <Table.Cell>{advertDetail.workType?.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Çalışma Zamanı</strong>
                  </Table.Cell>
                  <Table.Cell>{advertDetail.workTime?.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Maaş Aralığı</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {advertDetail.minimumSalary} - {advertDetail.maximumSalary} TL
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Açık Pozisyon Sayısı</strong>
                  </Table.Cell>
                  <Table.Cell>{advertDetail.countOfOpenPositions}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Son Başvuru Tarihi</strong>
                  </Table.Cell>
                  <Table.Cell>{advertDetail.applicationDeadline}</Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan="8">
                    <Button size="small" color="grey">
                      <Icon name="play"></Icon>
                      Başvur
                    </Button>
                    <Button size="small" color="grey">
                      <Icon name="save"></Icon>
                      Kaydet
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
