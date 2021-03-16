import { SAVE_CARD_REQUEST, SAVE_CARD_SUCCESS, SAVE_CARD_ERROR } from '../actions'

const initialState = {
    cardData: {},
    isCardSaved: false,
    error: null
  };
  
  export default function cardReducer (state = initialState, action) {
    switch (action.type) {
      case SAVE_CARD_REQUEST: {
        return { 
            ...state,
          cardData: action.payload
         }
      }
      case SAVE_CARD_SUCCESS: {
        return { 
          ...state,
          isCardSaved: action.payload
         }
      }

    case SAVE_CARD_ERROR: {
        return {
            ...state,
            error: action.payload
        }
    }
      default:
        return state;
    }
  }