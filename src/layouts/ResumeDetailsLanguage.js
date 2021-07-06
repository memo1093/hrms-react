import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Grid, Icon, Image,Card, Rating } from 'semantic-ui-react';
import { deleteLanguage } from '../store/actions/resumeActions';
import { UpdateResumeLanguage } from './UpdateResumeLanguage';

export const ResumeDetailsLanguage = ({language,resumeId}) => {
    const [updateable, setUpdateable] = useState(false);
    const dispatch = useDispatch();
    const handleRemoveLanguage = () => {
        dispatch(deleteLanguage(language.id))
        toast.warn("Dil bilgisi kaldırıldı");
      };
    return updateable?(
        <UpdateResumeLanguage
      resumeId={resumeId}
      language={language}
      setUpdateable={setUpdateable}
    />
    ):(<Grid centered>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Card.Header>
                  {language.language}{" "}
                  
                  <Image onClick={() => handleRemoveLanguage()} floated="right">
                    <Icon corner name="trash" />{" "}
                  </Image>{" "}
                  <Image
                    onClick={() => setUpdateable(!updateable)}
                    floated="right"
                  >
                    <Icon corner name="edit" />{" "}
                  </Image>{" "}
                </Card.Header>
              </Card.Content>
              <Card.Content>
              <Rating disabled icon="star" rating={language.rate} maxRating={5}/>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>)
}
