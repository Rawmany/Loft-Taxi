import React, { Component } from 'react';
import { saveCardRequest } from './actions';
import { connect } from 'react-redux';

const Profile = ({ saveCardRequest, isCardSaved }) => {
  const handleSubmit = (cardnumber, carddate, cardusername, cvc) => {
    saveCardRequest(cardnumber, carddate, cardusername, cvc);
  }
  return (
    <>
    {
      isCardSaved ? <p>Данные успешно сохранены</p> :
      <form onSubmit={handleSubmit}>
        <input name="cardnumber" placeholder="Номер карты*"></input>
        <input name="carddate" defaultValue="01/21"></input>
        <input name="cardusername" placeholder="Имя владельца*"></input>
        <input name="cvc" placeholder="CVC*"></input>
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