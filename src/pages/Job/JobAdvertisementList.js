import React, { useEffect, useState } from "react";
import { mockComponent } from "react-dom/cjs/react-dom-test-utils.production.min";

import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Feed,
  Grid,
  
  Segment,
 
} from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import moment from "moment";
import "moment/locale/tr";
import { Filter } from "../../layouts/Filter";

export const JobAdvertisement = () => {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  moment.locale("tr");

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllSorted()
      .then((result) => setjobAdvertisements(result.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Grid centered padded columns={2}>
      <Grid.Row stretched>
      <Grid.Column width={4} only="computer tablet">
        <Segment>
            <Filter/>

        </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
      {jobAdvertisements.map((jobAdvertisement) => (
        
          <Card fluid color="violet" link as={Link} to={`/jobAdvertisements/${jobAdvertisement.id}`}>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  {jobAdvertisement.employer?.companyPicture ? (
                    <Feed.Label
                    
                      image={jobAdvertisement.employer?.companyPicture}
                    />
                  ):(<Feed.Label
                    icon="globe"
                  />)}
                  <Feed.Content>
                    <Feed.Date
                      content={moment(jobAdvertisement.releaseDate)
                        .startOf("day")
                        .fromNow()}
                    />
                    <Feed.Summary>
                      {jobAdvertisement.jobPosition?.position}
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
              <Card.Meta>{jobAdvertisement.jobTime.type}</Card.Meta>
              <Card.Meta>{jobAdvertisement.jobType.type}</Card.Meta>
              <Card.Description>
               İlan sahibi - {jobAdvertisement.employer?.companyName}
              </Card.Description>
            </Card.Content>
          </Card>
          
          ))}
          </Grid.Column>
          </Grid.Row>

      
    </Grid>
  );
};
