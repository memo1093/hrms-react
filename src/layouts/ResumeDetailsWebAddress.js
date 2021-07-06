import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Grid, Icon, Image,Card } from 'semantic-ui-react';
import { deleteWebAdresses } from '../store/actions/resumeActions';
import { UpdateResumeWebAddress } from './UpdateResumeWebAddress';

export const ResumeDetailsWebAddress = ({webAddress,resumeId}) => {
  const dispatch = useDispatch();

    const [updateable, setUpdateable] = useState(false);
    const handleRemoveWebAddress = () => {
        dispatch(deleteWebAdresses(webAddress.id))
        toast.warn("İnternet siteleri kaldırıldı");
      };
    return updateable?(
        <UpdateResumeWebAddress
      resumeId={resumeId}
      webAddress={webAddress}
      setUpdateable={setUpdateable}
    />
    ):(<Grid centered>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Card.Content>{webAddress.linkedInAddress&&<span><strong>
                    LinkedIn Adresi :
                </strong> {webAddress.linkedInAddress}{" "}</span>}
                  <Image onClick={() => handleRemoveWebAddress()} floated="right">
                    <Icon corner name="trash" />{" "}
                  </Image>{" "}
                  <Image
                    onClick={() => setUpdateable(!updateable)}
                    floated="right"
                  >
                    <Icon corner name="edit" />{" "}
                  </Image>{" "}
                </Card.Content>
                {webAddress.githubAddress&&(<Card.Content><strong>
                    Github Adresi :
                </strong> {webAddress.githubAddress}{" "}</Card.Content>)}
                
                {webAddress.twitterAddress&&(<Card.Content><strong>
                    Twitter Adresi :
                </strong> {webAddress.twitterAddress}{" "}</Card.Content>)}
                {webAddress.anotherAddress&&(<Card.Content><strong>
                    İnternet Adresi :
                </strong> {webAddress.anotherAddress}{" "}</Card.Content>)}
                {webAddress.anotherAddress2&&(<Card.Content><strong>
                    İnternet Adresi 2:
                </strong> {webAddress.anotherAddress2}{" "}</Card.Content>)}
                
              
              </Card.Content>
              
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>)
}
