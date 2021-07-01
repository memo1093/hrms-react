import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import ResumeService from "../../services/ResumeService";

export const Resumes = () => {
  let { id } = useParams(); //!Session bittiğinde
  const [resumes, setResumes] = useState([]);
  const [showResumes, setShowResumes] = useState(5);
  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
      .getByCandidateId(id)
      .then((result) => setResumes(result.data.data))
      .catch((error) => console.log(error.message));
  }, [id]);
  return (
      <div>
          {resumes.slice(0, showResumes).map((resume) => (
    <Card padded centered key={resume.id} fluid color="violet">
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
        <div className="ui two buttons">

          <Button color="green" as={Link} to={`/resume/${resume.id}`}>
            Görüntüle
          </Button>
          <Button color="red">Sil</Button>
        </div>
      </Card.Content>
    </Card>
  ))}
  <Grid centered padded>
    {resumes.length>5&&showResumes===5&&<Button onClick={()=>setShowResumes(resumes.length)} inverted color="violet" content="Daha fazla göster" />}
    {resumes.length===showResumes&&<Button onClick={()=>setShowResumes(5)} inverted color="violet" content="Daha az göster" />}

  </Grid>
      </div>
      
  )
};
