import React, { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";

export default function JobSeeker() {
  const [jobSeekers, setjobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekers()
      .then((result) => setjobSeekers(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content>İş Arayanlar</Header.Content>
      </Header>
      <Table celled color="black">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>TC No</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Niyet Mektubu</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id}>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.nationalId}</Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
              <Table.Cell>{jobSeeker.birthOfDate}</Table.Cell>
              <Table.Cell>{jobSeeker.coverLetter}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
