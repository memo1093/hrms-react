import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Header, Image } from "semantic-ui-react";
import { getResumeById } from "../../store/actions/resumeActions";
import { ResumeDetailsGraduation } from "./ResumeDetailsGraduation";
import { ResumeDetailsHead } from "./ResumeDetailsHead";

export const ResumeDetails = () => {
  const { id } = useParams();
  const [updateableHead, setUpdateableHead] = useState(false);
  
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResumeById(id));
  }, [dispatch, id, updateableHead,resume.graduations]);
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
        <Header color="violet">Mezuniyet bilgileri</Header>
        
      </Grid>
      {resume.resume.graduations?.map((graduation) => (
        <ResumeDetailsGraduation
          resumeId={resume.resume.id}
          graduation={graduation}
        />
      ))}
    </div>
  );
};
