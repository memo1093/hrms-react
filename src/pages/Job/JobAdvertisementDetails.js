import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Button, Icon, Grid, Card, Image } from "semantic-ui-react";
import { getJobAdvertisementById } from "../../store/actions/jobAdvertisementActions";
import { Favorite } from "../../layouts/Favorite";
import { getFavoritesByCandidateId } from "../../store/actions/favoritesActions";

export const JobAdvertisementDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const jobAdvertisementLoading = useSelector(
    (state) => state.jobAdvertisements.loading
  );
  const jobAdvertisement = useSelector(
    (state) => state.jobAdvertisements.jobAdvertisement
  );
  const favorites = useSelector((state) => state.favorites);
  useEffect(() => {
    dispatch(getJobAdvertisementById(id));
    dispatch(getFavoritesByCandidateId(26))
    //!Session tamamlanınca
  }, [id, dispatch]);
  const application = () => {
    toast.info(
      `${jobAdvertisement.jobPosition?.position} pozisyonuna başvuru yapıldı`
    );
  };
  const isFavorite = (id) => {
    return favorites.favorites?.find(
      (favorite) => favorite.jobPositionAdvertisement.id === id
    );
  };
  return jobAdvertisementLoading ? (
    <Image centered src="/img/loading.gif" />
  ) : (
    <Grid padded centered columns={2}>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Card fluid centered>
            <Card.Content>
              <Card.Header>
                {jobAdvertisement.employer?.companyPicture ? (
                  <Image
                    floated="left"
                    avatar
                    centered
                    src={jobAdvertisement.employer?.companyPicture}
                  />
                ) : (
                  <Image floated="left" centered>
                    <Icon name="globe" />
                  </Image>
                )}
                {jobAdvertisement.jobPosition?.position}

                <Favorite
                  floated="right"
                  size="huge"
                  candidateId={26}
                  activated={isFavorite(jobAdvertisement.id)}
                />
                {/* //! Session tamamlandığında */}
              </Card.Header>
              <Card.Meta>
                {jobAdvertisement.employer?.companyName}
              </Card.Meta>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                {jobAdvertisement.description}
              </Card.Description>
              
             
            </Card.Content>
            <Card.Content textAlign="left">
            
              <Card.Description>
                <strong>Yer :</strong>{jobAdvertisement.city?.city}
              </Card.Description>
              <Card.Description>
                <strong>Açık pozisyon sayısı :</strong>{jobAdvertisement.activePositions}
              </Card.Description>
              <Card.Description>
                <strong>Çalışma tipi :</strong>{jobAdvertisement.jobType?.type}
              </Card.Description>
              <Card.Description>
                <strong>Çalışma zamanı :</strong>{jobAdvertisement.jobTime?.type}
              </Card.Description>
              {jobAdvertisement.minSalary && jobAdvertisement.maxSalary ? (
                <Card.Description>
                  <strong>Maaş aralığı :</strong>{jobAdvertisement.minSalary} TL - {jobAdvertisement.maxSalary} TL
                </Card.Description>
              ):("")}
            </Card.Content>
            <Card.Content>
                <Button content="Başvur" color="violet" icon="check" onClick={()=>application()}/>
            </Card.Content>
          </Card>
         
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
