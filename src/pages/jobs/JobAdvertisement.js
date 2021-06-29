import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Header, Icon, Button, Card, Pagination } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { addToFav } from "../../store/actions/favouriteActions";

export default function JobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    jobAdvertisementService
      .getAdvertsIsActiveAndApprovedByPage(activePage, 5)
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  const handlePaginationChanging = (e, { activePage }) => {
    setActivePage(activePage);
    jobAdvertisementService
      .getAdvertsIsActiveAndApprovedByPage(activePage, 5)
      .then((result) => setJobAdvertisements(result.data.data));
  };

  const handleAddToFav = (advertisement) => {
    dispatch(addToFav(advertisement));
    toast.success(`${advertisement.jobPosition.name} favorilere eklendi!`);
  };

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
              <b>Son Başvuru Tarihi:</b> {advert.applicationDeadline}
            </Card.Meta>
            <Card.Description>
              <b>{advert.employer.companyName} </b>
            </Card.Description>
          </Card.Content>

          <Card.Content textAlign="center">
            <Button onClick={() => handleAddToFav(advert)} color="red">
              <Icon name="like" />
              Fav
            </Button>
            <Button
              as={Link}
              to={`/job-advertisement/${advert.id}`}
              color="black"
            >
              Detayları Gör
            </Button>
          </Card.Content>
        </Card>
      ))}
      <Pagination
        defaultActivePage={1}
        totalPages={2}
        onPageChange={handlePaginationChanging}
      />
    </div>
  );
}
