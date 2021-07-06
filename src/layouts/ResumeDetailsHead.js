import React from "react";
import {
  Card,
  Grid,
  Icon,
  Image,

} from "semantic-ui-react";
import { UpdateResumeHead } from "./UpdateResumeHead";


export const ResumeDetailsHead = ({ setUpdateable, resume, updateable }) => {
  
  return updateable ? (
    <UpdateResumeHead
      resume={resume}
      updateable={updateable}
      setUpdateable={setUpdateable}
    />
  ) : (
    <Grid columns={2} centered>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header textAlign="center">
                {resume.resume.title}{" "}
                <Image
                  onClick={() => setUpdateable(!updateable)}
                  floated="right"
                  
                >
                  <Icon name="edit" />{" "}
                </Image>{" "}
              </Card.Header>
              
                <Image src={resume.resume.profilePicture} size="tiny" circular />
              

              <Card.Meta>{resume.resume.createdAt}</Card.Meta>
              <Card.Description>{resume.resume.coverLetter}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
