import React, { useState, useEffect } from "react";
import {
  Message,
  Icon,
  Header,
  Button,
  Card,
  Divider,
  Modal,
} from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import EmployerService from "../services/employerService";

function exampleReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size, data: action.data };
    default:
      throw new Error("Desteklenmeyen durum.");
  }
}

export default function Home() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
    data: undefined,
  });
  const { open, size, data } = state;
  const [adverts, setAdverts] = useState([]);
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    let employerService = new EmployerService();

    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));

    jobAdvertisementService
      .getAdvertsByIsActiveAndIsApprovedOrdered()
      .then((result) => setAdverts(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="home" circular />
        <Header.Content>Ana Sayfa</Header.Content>
      </Header>

      <Message
        size="big"
        header="Kendine uygun iş mi arıyorsun?"
        content="Şimdi kayıt ol! Tüm işverenlerin buluştuğu platform 'HRMS'."
      />

      <Divider hidden />
      <Divider hidden />
      <Divider horizontal>En Güncel İş İlanları</Divider>
      <Divider hidden />

      <div className="ui stackable two column grid">
        {adverts.map((advert) => (
          <div key={advert.id} className="column">
            <Card color="black" href={`/job-advertisement/${advert.id}`}>
              <Card.Content textAlign="center">
                <Card.Header>{advert.jobPosition.name}</Card.Header>
                <Card.Meta>{advert.employer.companyName}</Card.Meta>
                <Card.Description>
                  <b>Açıklama:</b> {advert.description.substring(0, 25)}...
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>

      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider horizontal>Öne Çıkan İşverenler ile İletişime Geç</Divider>
      <Divider hidden />

      <div className="ui stackable three column grid">
        {employers.map((employer) => (
          <div key={employer.id} className="column">
            <Card color="black">
              <Card.Content textAlign="center">
                <Card.Header>{employer.companyName}</Card.Header>
                <Card.Meta>{employer.website}</Card.Meta>
                <Icon name="building"></Icon>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button
                    onClick={() =>
                      dispatch({
                        type: "open",
                        size: "mini",
                        data: employer.email,
                      })
                    }
                    basic
                    color="black"
                  >
                    <Icon name="mail" />
                    Email
                  </Button>
                  <Button
                    onClick={() =>
                      dispatch({
                        type: "open",
                        size: "mini",
                        data: "+90" + employer.phoneNumber,
                      })
                    }
                    basic
                    color="red"
                  >
                    <Icon name="phone" />
                    Numara
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>

      <Modal
        textAlign="center"
        size={size}
        open={open}
        data={data}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>İletişim Bilgisi</Modal.Header>
        <Modal.Content>
          <p>{data}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "close" })}>
            Kapat
          </Button>
          <Button positive onClick={() => dispatch({ type: "close" })}>
            İletişime Geç
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
