import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Feed, Grid, Segment } from "semantic-ui-react";
import moment from "moment";
import "moment/locale/tr";
import { Filter } from "../../layouts/Filter";
import { Paginate } from "../../layouts/Paginate";
import { Favorite } from "../../layouts/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesByCandidateId } from "../../store/actions/favoritesActions";
import { getByFilterWithPages } from "../../store/actions/jobAdvertisementActions";

export const JobAdvertisement = () => {
  const jobAdvertisements = useSelector(state => state.jobAdvertisements.jobAdvertisements)
  const [page, setPage] = useState(1);
  const [pageSize, setpageSize] = useState(10);
  const [candidateId, setCandidateId] = useState(26); //! Session tamamlandığında

  const favorites = useSelector(state => state.favorites)
  const filters = useSelector(state => state.filters.filters)
  const dispatch = useDispatch()
  
  moment.locale("tr");

  useEffect(() => {
    dispatch(getByFilterWithPages(filters,page,pageSize))
      
    dispatch(getFavoritesByCandidateId(candidateId))
  }, [candidateId, dispatch, favorites.favorites.id, page, pageSize,filters]);
  const isFavorite = (id) => {
    return favorites.favorites?.find(
      (favorite) => favorite.jobPositionAdvertisement.id === id
    );
  };
  return (
    
    <Grid centered padded columns={2}>
      <Grid.Row stretched>
        <Grid.Column width={4} only="computer tablet">
          <Segment>
            <Filter/>
            
          </Segment>
        </Grid.Column>
        <Grid.Column width={12}>

          {jobAdvertisements.content?.map((jobAdvertisement) => (
            <Card
            raised
            key={jobAdvertisement.id}
            fluid
            color="violet"
            
            as={Link}
            to={`/jobAdvertisements/${jobAdvertisement.id}`}
            
            >
              <Card.Content>
                <Feed>
                  <Feed.Event>
                    {jobAdvertisement.employer?.companyPicture ? (
                      <Feed.Label
                      image={jobAdvertisement.employer?.companyPicture}
                      />
                      ) : (
                        <Feed.Label icon="globe" />
                        )}
                    <Feed.Content>
                      <Feed.Date
                        content={moment(jobAdvertisement.releaseDate)
                          .startOf("day")
                          .fromNow()}
                          />
                      <Feed.Summary>
                        {jobAdvertisement.jobPosition?.position}
                        <Favorite
                          floated="right"
                          size="large"
                          activated={isFavorite(jobAdvertisement.id)}
                          candidateId={26}
                          jobAdvertisement={jobAdvertisement}
                          willBeDeleted={isFavorite(jobAdvertisement.id)}
                          />
                        {/* //!Session candidateId */}
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
                <Card.Meta>{jobAdvertisement.jobTime.type}</Card.Meta>
                <Card.Meta>{jobAdvertisement.jobType.type}</Card.Meta>
                <Card.Description>
                  İlan sahibi - {jobAdvertisement.employer?.companyName}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Grid.Column>
      </Grid.Row>
      <Paginate
        page={page}
        setPage={setPage}
        setpageSize={setpageSize}
        totalPages={jobAdvertisements.totalPages}
        />
    </Grid>
  );
};
