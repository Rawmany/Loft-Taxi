import { logIn, AUTHENTICATE } from './actions';
import {serverLogIn} from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const data = await serverLogIn(email, password)
    if (data.success) {
      store.dispatch(logIn(data.token));      
    }
  }
    next(action);  
};