import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import {
  deleteResumeCompletely,
  getResumesByCandidateId,
} from "../../store/actions/resumeActions";

export const Resumes = () => {
  let { id } = useParams(); //!Session bittiğinde
  const resumes = useSelector((state) => state.resume.resumes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResumesByCandidateId(id));
  }, [dispatch, id]);
  const handleRemoveResume = (resumeId, title) => {
    dispatch(deleteResumeCompletely(resumeId));
    toast.warn(`${title} adlı özgeçmiş silindi`);
  };
  return (
    <div>
      <Grid padded>
        <Grid.Row>
          <Grid.Column textAlign="center">
      <Button labelPosition="left" color="violet" content="Özgeçmiş ekle" as={Link} to={`/addResume/${id}`} icon="plus"  />

          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid centered padded>
        
        <Card.Group itemsPerRow={2} fluid>
          {resumes.map((resume) => (
            <Card fluid key={resume.id} color="violet">
              <Card.Content>
                {resume.profilePicture && (
                  <Image floated="right" avatar src={resume.profilePicture} />
                )}
                <Card.Header>{resume.title}</Card.Header>
                <Card.Meta>
                  Son güncelleme tarihi -{" "}
                  {moment(resume.createdAt).format("DD-MM-YYYY")}
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Grid>
                  <Grid.Row>
                    <Grid.Column textAlign="center">
                      <Button
                        color="green"
                        as={Link}
                        to={`/resume/${resume.id}`}
                      >
                        Görüntüle
                      </Button>
                      <Button
                        color="red"
                        onClick={() =>
                          handleRemoveResume(resume.id, resume.title)
                        }
                      >
                        Sil
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Grid>
      
    </div>
  );
};
