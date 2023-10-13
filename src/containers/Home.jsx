import React from 'react';
import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

import { getUser } from '../actions/userActions';
import { signOutUser } from '../actions/authActions';

import Signin from '../components/signUp/Signin';

const Home = ({user, fetchUser, logOutUser}) => {
  const sessionUserId = localStorage.getItem('user_id');
  const fetchUserProfile = useCallback((id) => {
    if (sessionUserId !== null) {
      fetchUser(id);
    }
  }, [fetchUser, sessionUserId]);

  useEffect(() => {
    if (sessionUserId !== null) {
      fetchUserProfile(sessionUserId);
    }
  }, [fetchUserProfile, sessionUserId]);

  return (
    <Container >
      {localStorage.getItem('user_id') ? <>
        <p>{`Greetings ${user.first_name}!`}</p>
        <button onClick={logOutUser}>Sign out</button>
      </> : <Signin />}
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (payload) => {
    dispatch(getUser(payload));
  },
  logOutUser: () => {
    dispatch(signOutUser());
  }
})
const mapStateToProps = state => ({
  user: state.userReducer.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
