import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Feed, Grid, Card, Message } from "semantic-ui-react";
import { Favorite } from "../../layouts/Favorite";
import { getFavoritesByCandidateId } from "../../store/actions/favoritesActions";

export const FavoriteAdvertisementList = () => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.favorites)
  const { id } = useParams();
  const isFavorite = (id) => {
    return favorites.find(
      (favorite) => favorite.jobPositionAdvertisement.id === id
    );
  };
  useEffect(() => {
   
    dispatch(getFavoritesByCandidateId(id))
    
  }, [dispatch,id]);
  return favorites.length === 0 ? (
    <Grid centered padded columns={2}>
      <Grid.Row stretched>
        <Grid.Column width={12}>
            <Message color="violet">Favorilerinizde henüz ilan bulunmamaktadır.</Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ) : (
    <Grid centered padded columns={2}>
      <Grid.Row stretched>
        <Grid.Column width={12}>
          {favorites.map((favorite) => (
            <Card
              key={favorite.jobPositionAdvertisement.id}
              fluid
              color="violet"
              link
              as={Link}
              target="_blank"
              to={`/jobAdvertisements/${favorite.jobPositionAdvertisement.id}`}
              
            >
              
              <Card.Content>
                <Feed>
                  <Feed.Event>
                    {favorite.jobPositionAdvertisement.employer
                      ?.companyPicture ? (
                      <Feed.Label
                        image={
                          favorite.jobPositionAdvertisement.employer
                            ?.companyPicture
                        }
                      />
                    ) : (
                      <Feed.Label icon="globe" />
                    )}
                    <Feed.Content>
                      <Feed.Date
                        content={moment(
                          favorite.jobPositionAdvertisement.releaseDate
                        )
                          .startOf("day")
                          .fromNow()}
                      />
                      <Feed.Summary>
                        {
                          favorite.jobPositionAdvertisement.jobPosition
                            ?.position
                        }
                        <Favorite
                        
                          floated="right"
                          size="large"
                          activated={isFavorite(
                            favorite.jobPositionAdvertisement.id
                          )}
                          jobAdvertisement={favorite.jobPositionAdvertisement}
                          willBeDeleted={true}
                          
                        />
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
                <Card.Meta>
                  {favorite.jobPositionAdvertisement.jobTime.type}
                </Card.Meta>
                <Card.Meta>
                  {favorite.jobPositionAdvertisement.jobType.type}
                </Card.Meta>
                <Card.Description>
                  İlan sahibi -{" "}
                  {favorite.jobPositionAdvertisement.employer?.companyName}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Grid.Column>
      </Grid.Row>
      
    </Grid>
  );
};
