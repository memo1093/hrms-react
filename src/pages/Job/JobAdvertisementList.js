import React, { useEffect, useState } from "react";
import { Grid, Header, Image, List, Reveal, Table } from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export const JobAdvertisement = () => {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllSorted()
      .then((result) => setjobAdvertisements(result.data.data))
      .catch((error) => console.log(error.message));

    }, []);
    return (
      <Grid padded>
      <Grid.Row centered color="violet">
      <Table stackable selectable padded inverted color="violet">
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell textAlign="center"></Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Şirket adı</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">İş</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Açık pozisyon</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Son Başvuru Tarihi</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Yayımlanma Tarihi</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

      {console.log(jobAdvertisements)}
    <Table.Body>
        {jobAdvertisements.map(jobadvertisement=>(
             <Table.Row>
             <Table.Cell textAlign="center" singleLine><Image src="/img/profile-pictures/profile.png" size="mini"/></Table.Cell>
             <Table.Cell textAlign="center" singleLine>{jobadvertisement.employer.companyName}</Table.Cell>
             <Table.Cell textAlign="center" singleLine>{jobadvertisement.jobPosition.position}</Table.Cell>
             <Table.Cell singleLine textAlign="center">{jobadvertisement.activePositions}</Table.Cell>
             <Table.Cell singleLine textAlign="center">{jobadvertisement.lastApplicationDate}</Table.Cell>
             <Table.Cell singleLine textAlign="center">{jobadvertisement.releaseDate}</Table.Cell>
            
            
           </Table.Row>
        ))}
       
      
    </Table.Body>
  </Table>
        {/* <Header inverted>
          <Header.Content as="h2">- Güncel İş İlanları -</Header.Content>
          <List>
            {jobAdvertisements.map((jobAdvertisement) => (
              <List.Item key={jobAdvertisement.id}>{jobAdvertisement.jobPosition.position}</List.Item>
            ))}
          </List>
        </Header> */}
      </Grid.Row>
    </Grid>
  );
};
