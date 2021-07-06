import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Grid, Header, Image } from "semantic-ui-react";
import { AddResumeGraduation } from "../../layouts/AddResumeGraduation";
import { ResumeDetailsGraduation } from "../../layouts/ResumeDetailsGraduation";
import { ResumeDetailsHead } from "../../layouts/ResumeDetailsHead";
import { ResumeDetailsTalent } from "../../layouts/ResumeDetailsTalent";
import { getResumeById } from "../../store/actions/resumeActions";
import { AddResumeTalent } from "../../layouts/AddResumeTalent";
import { ResumeDetailsJobExperience } from "../../layouts/ResumeDetailsJobExperience";
import { AddResumeJobExperience } from "../../layouts/AddResumeJobExperience";
import { AddResumeLanguage } from "../../layouts/AddResumeLanguage";
import { ResumeDetailsLanguage } from "../../layouts/ResumeDetailsLanguage";
import { AddResumeWebAddress } from "../../layouts/AddResumeWebAddress";
import { ResumeDetailsWebAddress } from "../../layouts/ResumeDetailsWebAddress";

export const ResumeDetails = () => {
  const { id } = useParams();
  const [updateableHead, setUpdateableHead] = useState(false);
  const [addGraduation, setAddGraduation] = useState(false);
  const [addJobExperience, setAddJobExperience] = useState(false);
  const [addTalent, setAddTalent] = useState(false);
  const [addLanguage, setAddLanguage] = useState(false)
  const [addWebAddress, setAddWebAddress] = useState(false)

  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResumeById(id));
  }, [
    dispatch,
    id,
    updateableHead,
    resume.graduations,
    resume.talents,
    resume.jobExperiences,
    resume.languages,
    resume.webAddresses
  ]);
  return resume.loading ? (
    <Image src={"./img/loading.gif"} />
  ) : (
    <div>
      <Grid centered>
        <Header color="violet">Giriş</Header>
      </Grid>
      <ResumeDetailsHead
        setUpdateable={setUpdateableHead}
        resume={resume}
        updateable={updateableHead}
      />
      <Grid centered>
        <Header color="violet">Mezuniyet Bilgileri</Header>
      </Grid>
      {resume.resume.graduations?.map((graduation) => (
        <ResumeDetailsGraduation
          resumeId={resume.resume.id}
          graduation={graduation}
        />
      ))}
      {addGraduation ? (
        <AddResumeGraduation
          resumeId={resume.resume.id}
          setAdded={setAddGraduation}
        />
      ) : (
        <Grid padded centered>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                onClick={() => setAddGraduation(!addGraduation)}
                icon="plus"
                color="violet"
                content="Mezuniyet bilgisi ekle"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
      <Grid centered>
        <Header color="violet">İş Tecrübesi</Header>
      </Grid>
      {resume.resume.jobExperiences?.map((jobExperience) => (
        <ResumeDetailsJobExperience
          jobExperience={jobExperience}
          resumeId={resume.resume.id}
        />
      ))}
      {addJobExperience ? (
        <AddResumeJobExperience
          setAdded={setAddJobExperience}
          resumeId={resume.resume.id}
        />
      ) : (
        <Grid padded centered>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                onClick={() => setAddJobExperience(!addJobExperience)}
                icon="plus"
                color="violet"
                content="İş tecrübesi ekle"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
      <Grid centered>
        <Header color="violet">Yetenekler</Header>
      </Grid>
      {resume.resume.talents?.map((talent) => (
        <ResumeDetailsTalent resumeId={resume.resume.id} talent={talent} />
      ))}
      {addTalent ? (
        <AddResumeTalent resumeId={resume.resume.id} setAdded={setAddTalent} />
      ) : (
        <Grid padded centered>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                onClick={() => setAddTalent(!addTalent)}
                icon="plus"
                color="violet"
                content="Yetenek bilgisi ekle"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
      <Grid centered>
        <Header color="violet">Dil Bilgisi</Header>
      </Grid>
      {resume.resume.languages?.map((language) => (
        <ResumeDetailsLanguage resumeId={resume.resume.id} language={language} />
      ))}
      {addLanguage?(<AddResumeLanguage resumeId={resume.resume.id} setAdded={setAddLanguage}/>):(<Grid padded centered>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                onClick={() => setAddLanguage(!addLanguage)}
                icon="plus"
                color="violet"
                content="Dil bilgisi ekle"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>)}
        <Grid centered>
        <Header color="violet">İnternet Adresleri</Header>
      </Grid>
      {resume.resume.webAddresses?.map((webAddress) => (
        <ResumeDetailsWebAddress resumeId={resume.resume.id} webAddress={webAddress} />
      ))}
        {addWebAddress?(<AddResumeWebAddress resumeId={resume.resume.id} setAdded={setAddWebAddress}/>):(<Grid padded centered>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                onClick={() => setAddWebAddress(!addWebAddress)}
                icon="plus"
                color="violet"
                content="Web Sitesi ekle"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>)}
    </div>
  );
};
