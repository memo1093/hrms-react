import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Item, Button, Icon, Grid } from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export const JobAdvertisementDetails = () => {
  let { id } = useParams();
  const [jobAdvertisement, setJobAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getById(id)
      .then((result) => setJobAdvertisement(result.data.data))
      .catch((error) => console.log(error.message));
  }, [id]);
  const application = () => {
    
    toast.info(
      `${jobAdvertisement.jobPosition?.position} pozisyonuna başvuru işlemi başarılı`
    );
  };
  return (
    <Grid padded columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Item.Group relaxed>
            <Item>
              {jobAdvertisement.employer?.companyPicture ? (<Item.Image
                  size="small"
                  src={jobAdvertisement.employer?.companyPicture}
                />
                
              ) : (
                
                <Icon size="huge" name="globe"/>
              )}
              <Item.Content verticalAlign="middle">
                <Item.Header>
                  {jobAdvertisement.jobPosition?.position}
                </Item.Header>
                <Item.Description>
                  {jobAdvertisement.description}
                </Item.Description>
                <Item.Extra>
                  <Button
                    content="Başvur"
                    labelPosition="right"
                    icon="checkmark"
                    color="violet"
                    floated="right"
                    onClick={() => application()}
                 />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
