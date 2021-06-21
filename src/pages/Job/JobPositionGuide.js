import React, { useEffect, useState } from "react";
import { Grid, Image, Table } from "semantic-ui-react";
import JobPositionService from "../../services/JobPositionService";

export const JobPositionGuide = () => {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data))
      .catch(error=>error.message)
  }, []);
  
  return (
    <Grid>
      <Grid.Row centered color="violet">
        <Table stackable selectable padded inverted color="violet">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center"></Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Pozisyon adı</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">İş Sayısı</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Çalışan Sayısı
              </Table.HeaderCell>
             
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {console.log(jobPositions)}
            {jobPositions.map((jobPosition) => (
                <Table.Row key={jobPosition.id}>
                <Table.Cell textAlign="center" singleLine>
                  <Image src="/img/profile-pictures/profile.png" size="mini" />
                </Table.Cell>
                <Table.Cell textAlign="center" singleLine>
                  {jobPosition.position}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Grid.Row>
    </Grid>
  );
};
