import React, { Component } from 'react';
import { saveCardRequest } from './actions';
import { connect } from 'react-redux';

const Profile = ({ saveCardRequest, isCardSaved }) => {
  const handleSubmit = (data) => {
    saveCardRequest(data);
  }
  return (
    <>
    {
      isCardSaved ? <p>Данные успешно</p> :
      <form>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
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