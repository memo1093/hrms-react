import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  Card,
  Image,
  Icon,
  Modal,
  Button,
 
} from "semantic-ui-react";
import { deleteJobExperience } from "../store/actions/resumeActions";
import { UpdateResumeJobExperience } from "./UpdateResumeJobExperience";

export const ResumeDetailsJobExperience = ({ jobExperience, resumeId }) => {
    const [updateable, setUpdateable] = useState(false);
    const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleRemoveJobExperience = () => {

    dispatch(deleteJobExperience(jobExperience.id))
    setOpen(false)
  };
  return updateable ? (
    <UpdateResumeJobExperience
      resumeId={resumeId}
      jobExperience={jobExperience}
      setUpdateable={setUpdateable}
    />
  ) : (
    <Grid centered>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header>
               Şirket adı - {jobExperience.companyName}{" "}
               <Modal
                  size="mini"
                  open={open}
                  trigger={
                    <Image floated="right">
                      <Icon corner name="trash" />
                    </Image>
                  }
                  onOpen={() => setOpen(true)}
                  onClose={() => setOpen(false)}
                >
                  <Modal.Header>İş Deneyimi Bilgisi Silme</Modal.Header>
                  <Modal.Content>
                    <p>
                    İş Deneyimi bilgisi silinecektir. Silmek istediğinize emin
                      misiniz?
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button negative onClick={() => setOpen(false)}>
                      Hayır
                    </Button>
                    <Button
                      positive
                      onClick={() => handleRemoveJobExperience()}
                    >
                      Evet
                    </Button>
                  </Modal.Actions>
                </Modal>
                <Image
                  onClick={() => setUpdateable(!updateable)}
                  floated="right"
                >
                  <Icon corner name="edit" />{" "}
                </Image>{" "}
              </Card.Header>
            </Card.Content>
            <Card.Content>
                Pozisyon - {jobExperience.position}
            <Card.Meta>
                Çalışma Durumu - {jobExperience.stillWorking?"Devam ediyor":"Ayrıldı"}
            </Card.Meta>
            <Card.Meta>
                Başlangıç Tarihi - {moment(jobExperience.startDate).format("DD-MM-YYYY") }
            </Card.Meta>
            <Card.Meta>
                Bitiş Tarihi - {moment(jobExperience.endDate).format("DD-MM-YYYY") }
            </Card.Meta>
            </Card.Content>
            
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
