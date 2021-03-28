import {logIn, logOut} from "../actions/authActions";

let key = localStorage.getItem('isLoggedIn');

if(key === "false") {
	key = false
} else if(key === "true") {
	key = true
}

export const initialState = {
	isLoggedIn: false,
	token: null
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case logIn.toString(): {
			return {
				isLoggedIn: true.valueOf,
				token: action.payload
			}
		}

		case logOut.toString(): {
			return {
				isLoggedIn: false,
				token: null
			}
		}

		default:
			return state;
	}
}
