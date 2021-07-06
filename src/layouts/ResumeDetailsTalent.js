import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  Grid,
  Card,
  Image,
  Icon,
} from "semantic-ui-react";
import { deleteTalent } from "../store/actions/resumeActions";
import { UpdateResumeTalent } from "./UpdateResumeTalent";

export const ResumeDetailsTalent = ({ talent, resumeId }) => {
  const [updateable, setUpdateable] = useState(false);

  const dispatch = useDispatch();
  const handleRemoveTalent = () => {
    dispatch(deleteTalent(talent.id))
    toast.warn("Yetenek bilgisi kaldırıldı");
  };
  return updateable ? (
    <UpdateResumeTalent
      resumeId={resumeId}
      talent={talent}
      setUpdateable={setUpdateable}
    />
  ) : (
    <Grid centered>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                {talent.name}{" "}
                <Image onClick={() => handleRemoveTalent()} floated="right">
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
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
