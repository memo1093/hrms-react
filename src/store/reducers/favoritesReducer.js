import { ADD_TO_FAVORITES_FAILURE, ADD_TO_FAVORITES_SUCCESS, DELETE_FROM_FAVORITES_FAILURE, DELETE_FROM_FAVORITES_SUCCESS, GET_FAVORITES_BY_CANDIDATE_ID_FAILURE, GET_FAVORITES_BY_CANDIDATE_ID_SUCCESS } from "../actions/favoritesActions";
import { favorites,message,loading } from "../initialValues/favorites";


const initialState={
    favorites:favorites,
    message:message,
    loading:loading
}

export default function favoritesReducer(state=initialState,{payload,type}) {
    switch (type) {
        
        case GET_FAVORITES_BY_CANDIDATE_ID_SUCCESS:
            return{
                ...state,
                favorites:payload,
                loading:false
            }
            case GET_FAVORITES_BY_CANDIDATE_ID_FAILURE:
                return{
                    ...state,
                    message:payload,
                    loading:false
                }
                case ADD_TO_FAVORITES_SUCCESS:
                    
            return{
                ...state,
                favorites:[...state.favorites,payload],
                loading:false
            }
        case ADD_TO_FAVORITES_FAILURE:
            return{
                ...state,
                message:payload,
                loading:false
            }
        case DELETE_FROM_FAVORITES_SUCCESS:
        
            return{
                ...state,
                favorites:[...state.favorites.filter(favorite=>favorite.id!==payload)],
                loading:false
            }
        case DELETE_FROM_FAVORITES_FAILURE:
            return{
                ...state,
                message:payload,
                loading:false
            }
           
        default:
            return state;
    }
}
