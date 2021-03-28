import {addCard, getCardSuccess} from "../actions/cardActions";

export const initialState = {
	card: {
		cardNumber: "", 
		expiryDate: "", 
		cardName: "", 
		cvc: ""
	}	
}

export default function (state = initialState, action) {
	switch (action.type) {
		case addCard.toString(): {
			return Object.assign({}, state, action.payload)
		}

		case getCardSuccess.toString() : {
			return {
				...state,
				card: action.payload
			}
		}
		default:
			return state;
	}
}
