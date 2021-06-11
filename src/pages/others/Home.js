import React from "react";
import {
  Message,
  Icon,
  Header,
  Button,
  Card,
  Image,
  Divider,
} from "semantic-ui-react";

export default function Home() {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="home" circular />
        <Header.Content>Ana Sayfa</Header.Content>
      </Header>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. 
      </p>
      <Message
        size="big"
        header="Kendine uygun iş mi arıyorsun?"
        content="Şimdi kayıt ol! Tüm işverenlerin buluştuğu platform 'HRMS'."
      />

      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider horizontal>İş İlanlarında Öne Çıkanlar</Divider>
      <Divider hidden />

      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="../images/avatar/large/steve.jpg"
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/molly.png"
            />
            <Card.Header>Molly Thomas</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Molly wants to add you to the group <strong>musicians</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>

      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider horizontal>Önerilen Açık Pozisyonlar</Divider>
      <Divider hidden />
      <Card.Group itemsPerRow={4}>
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
      </Card.Group>
    </div>
  );
}
