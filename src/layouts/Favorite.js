import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Rating } from "semantic-ui-react";
import { addToFavorites, deleteFromFavorites } from "../store/actions/favoritesActions";

export const Favorite = ({
  floated,
  size,
  activated,
  willBeDeleted,
  candidateId,
  jobAdvertisement,
}) => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.favorites)
  
  const handleFavorite = (e) => {
    e.preventDefault()
    if (willBeDeleted) {
      //It removes selected favorite
      const favorite = favorites.find(favorite=>favorite.jobPositionAdvertisement.id===jobAdvertisement.id)
     
      dispatch(deleteFromFavorites(favorite.id))
      
    } else {
      //It adds new favorite
  
      dispatch(addToFavorites(candidateId,jobAdvertisement))
    }
    
  };

  
  
  return (
    <Image floated={floated} onClick={(e) =>{ handleFavorite(e)}}>
      <Rating size={size} icon="heart" rating={activated ? 1 : 0} clearable />
    </Image>
  );
};
