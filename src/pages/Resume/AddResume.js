import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Grid, Header, Progress } from "semantic-ui-react";
import { AddProfilePicture } from "../../layouts/AddProfilePicture";
import { AddResumeGraduation } from "../../layouts/AddResumeGraduation";
import { AddResumeHead } from "../../layouts/AddResumeHead";
import { AddResumeJobExperience } from "../../layouts/AddResumeJobExperience";
import { AddResumeLanguage } from "../../layouts/AddResumeLanguage";
import { AddResumeTalent } from "../../layouts/AddResumeTalent";
import { AddResumeWebAddress } from "../../layouts/AddResumeWebAddress";
import { ResumeDetailsGraduation } from "../../layouts/ResumeDetailsGraduation";
import { ResumeDetailsJobExperience } from "../../layouts/ResumeDetailsJobExperience";
import { ResumeDetailsLanguage } from "../../layouts/ResumeDetailsLanguage";
import { ResumeDetailsTalent } from "../../layouts/ResumeDetailsTalent";
import { ResumeDetailsWebAddress } from "../../layouts/ResumeDetailsWebAddress";

export const AddResume = () => {
  const [progress, setProgress] = useState(1);

  
  const resume = useSelector(state => state.resume.resume)
  
  const { id } = useParams();
  return (
        
    <Grid padded>
      <Grid.Row>
        <Grid.Column>
          <Progress
            value={progress}
            total={8}
            indicating
            progress="ratio"
            success={progress === 8}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
          <Grid.Column textAlign="center">
              {progress===1&&(<Header>Giriş</Header>)}
              {progress===2&&(<Header>Profil Fotoğrafı</Header>)}
              {progress===3&&(<Header>Mezuniyet bilgisi</Header>)}
              {progress===4&&(<Header>İş Deneyimleri</Header>)}
              {progress===5&&(<Header>Dil Bilgisi</Header>)}
              {progress===6&&(<Header>Yetenekler</Header>)}
              {progress===7&&(<Header>İnternet Adresleri</Header>)}
          </Grid.Column>
      </Grid.Row>
          
          {
              progress===1&&(<Grid.Row>
                <Grid.Column>
      
                <AddResumeHead candidateId={id} progress={progress} setProgress={setProgress}/>
                </Grid.Column>
            </Grid.Row>)
          }
          {progress===2&&(<Grid.Row>
              <Grid.Column textAlign="center">
                  <AddProfilePicture progress={progress} setProgress={setProgress} resumeId={resume.id} />
              </Grid.Column>
          </Grid.Row>)}
          {progress===3&&(<Grid.Row>
              <Grid.Column textAlign="center">{resume.graduations&&resume.graduations.map(graduation=><ResumeDetailsGraduation resumeId={resume.id} graduation={graduation}/>)}
                    <AddResumeGraduation  resumeId={resume.id} progress={progress} setProgress={setProgress} />
              </Grid.Column>
          </Grid.Row>)}
          {progress===4&&(
          <Grid.Row>
              <Grid.Column textAlign="center">{resume.jobExperiences&&resume.jobExperiences.map(jobExperience=><ResumeDetailsJobExperience jobExperience={jobExperience} resumeId={resume.id}/>)}
              <AddResumeJobExperience resumeId={resume.id} progress={progress} setProgress={setProgress}/>
              </Grid.Column>
          </Grid.Row>)}
          {progress===5&&(
          <Grid.Row>
              <Grid.Column textAlign="center">{resume.languages&&resume.languages.map(language=><ResumeDetailsLanguage language={language} resumeId={resume.id}/>)}
              <AddResumeLanguage resumeId={resume.id} progress={progress} setProgress={setProgress}/>
              </Grid.Column>
          </Grid.Row>)}
          {progress===6&&(
          <Grid.Row>
              <Grid.Column textAlign="center">{resume.talents&&resume.talents.map(talent=><ResumeDetailsTalent talent={talent} resumeId={resume.id}/>)}
              <AddResumeTalent resumeId={resume.id} progress={progress} setProgress={setProgress}/>
              </Grid.Column>
          </Grid.Row>)}
          {progress===7&&(
          <Grid.Row>
              <Grid.Column textAlign="center">{resume.webAdresses&&resume.webAdresses.map(webAddress=><ResumeDetailsWebAddress webAddress={webAddress} resumeId={resume.id}/>)}
              <AddResumeWebAddress resumeId={resume.id} progress={progress} setProgress={setProgress}/>
              </Grid.Column>
          </Grid.Row>)}
          {progress===8&&(<Grid.Row>
              <Grid.Column textAlign="center">
                  Özgeçmiş ekleme işlemi tamamlandı. Özgeçmişi düzenlemek yada görmek için <Link to={`/resumes/${id}`}>buraya</Link> tıklayınız.
              </Grid.Column>
          </Grid.Row>)}
      
      
    </Grid>
  );
};
