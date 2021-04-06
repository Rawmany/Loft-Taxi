import { addCard, getCardSuccess } from "../actions/cardActions";

export const initialState = {
	cardNumber: "",
	expiryDate: "",
	cardName: "",
	cvc: "",
	isSaved: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case addCard.toString(): {
			return {
				...state,
				hasCard: true,
			}
		}

		case getCardSuccess.toString(): {
			return {
				...state,
				...action.payload
			}
		}
		default:
			return state;
	}
}
