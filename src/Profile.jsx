import React from 'react';
import { saveCardRequest } from './actions';
import { connect } from 'react-redux';

const initialState = {
  cardNumber: '',
  expiryDate: '',
  cardName: '',
  cvc: ''
};

const Profile = ({ saveCardRequest, isCardSaved }) => {
  const [ formData, setFormData ] = React.useState(initialState);
  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    saveCardRequest(formData);
  };
  return (
    <>
    {
      isCardSaved ? <p>Данные успешно сохранены</p> :
      <form onSubmit={handleSubmit}>
        <input name="cardNumber" onchange={handleChange} value={formData.cardNumber} placeholder="Номер карты*" />
        <input name="expiryDate" onchange={handleChange} value={formData.expiryDate} defaultValue="01/21" />
        <input name="cardName" onchange={handleChange} value={formData.cardName} placeholder="Имя владельца*" />
        <input name="cvc" onchange={handleChange} value={formData.cvc} placeholder="CVC*" />
        <button type='submit'>Save</button>
      </form>
    }
    </>
  );
};

export const ProfileWithConnect = connect(
  (state) => ({ isCardSaved: state.card.isCardSaved }),
  { saveCardRequest}
)(Profile);