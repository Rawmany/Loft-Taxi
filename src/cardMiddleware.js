import { SAVE_CARD_REQUEST, saveCardSuccess, saveCardError  } from './actions';
import {saveCardData} from './api'

export const cardMiddleware = (store) => (next) => async (action) => {
  if (action.type === SAVE_CARD_REQUEST) {
    const { auth: { token }} = store.getState();
    const data = await saveCardData({ ...action.payload, token})

      store.dispatch(saveCardSuccess(data.success))    
  }
    next(action);  
};