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
import { deleteGraduation } from "../store/actions/resumeActions";
import { UpdateResumeGraduation } from "./UpdateResumeGraduation";

export const ResumeDetailsGraduation = ({ graduation, resumeId }) => {
  const [updateable, setUpdateable] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch()
  const handleRemoveGraduation=()=>{
    setOpen(false)
    dispatch(deleteGraduation(graduation.id))
  }
  return updateable ? (
    <UpdateResumeGraduation
      resumeId={resumeId}
      graduation={graduation}
      setUpdateable={setUpdateable}
    />
  ) : (
    <Grid centered>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                Okul adı - {graduation.schoolName}{" "}
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
                  <Modal.Header>Mezuniyet Bilgisi Silme</Modal.Header>
                  <Modal.Content>
                    <p>
                      Mezuniyet bilgisi silinecektir. Silmek istediğinize emin
                      misiniz?
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button negative onClick={() => setOpen(false)}>
                      Hayır
                    </Button>
                    <Button
                      positive
                      onClick={() => handleRemoveGraduation()}
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
              <Card.Content>Derecesi- {graduation.schoolDegree}</Card.Content>
              <Card.Content>Bölümü- {graduation.schoolDepartment}</Card.Content>
              <Card.Meta>
                {" "}
                Başlangıç Tarihi -{" "}
                {moment(graduation.startDate).format("DD-MM-YYYY")}
              </Card.Meta>
              <Card.Meta>
                {" "}
                Mezuniyet Tarihi -{" "}
                {graduation.stillStudying
                  ? "Devam ediyor"
                  : moment(graduation.endDate).format("DD-MM-YYYY")}
              </Card.Meta>

              <Card.Description>{graduation.department}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
