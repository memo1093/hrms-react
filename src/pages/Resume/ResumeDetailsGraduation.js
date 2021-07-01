import moment from 'moment';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid,Card, Image, Icon, Header } from 'semantic-ui-react';
import { UpdateResumeGraduation } from './UpdateResumeGraduation';

export const ResumeDetailsGraduation = ({graduation,resumeId}) => {
    const [updateable, setUpdateable] = useState(false);
   
    return (
      updateable?(<UpdateResumeGraduation resumeId={resumeId} graduation={graduation} setUpdateable={setUpdateable}/>):(
        <Grid centered>
            <Grid.Row centered columns={2}>
                
              <Grid.Column>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>
                      Okul adı - {graduation.schoolName}{" "}
                      <Image
                        onClick={()=>setUpdateable(!updateable)}
                        floated="right"
                      >
                        <Icon corner name="edit" />{" "}
                      </Image>{" "}
                    </Card.Header>
                    <Card.Content>
                      Derecesi- {graduation.schoolDegree}
                    </Card.Content>
                    <Card.Content>
                      Bölümü- {graduation.schoolDepartment}
                    </Card.Content>
                    <Card.Meta> Başlangıç Tarihi - {moment(graduation.startDate).format("DD-MM-YYYY") }</Card.Meta>
                    <Card.Meta> Mezuniyet Tarihi - {graduation.stillStudying?"Devam ediyor":moment(graduation.endDate).format("DD-MM-YYYY")}</Card.Meta>
                    
                    <Card.Description>{graduation.department}</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>)
      );
}
