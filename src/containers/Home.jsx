import React from 'react';
import { connect } from 'react-redux'; 
import Container from 'react-bootstrap/Container';

import Signin from '../components/signUp/Signin';

const Home = ({user}) => {
  return (
    <Container >
      {localStorage.getItem('user_id') ? <p>Greetings!</p> : <Signin />}
    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.authReducer.user
})

export default connect(mapStateToProps, null)(Home);