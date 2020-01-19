import React, {useState} from 'react';
import Login from 'components/Login';

//components
import Header from 'common/components/Header';
import Footer from 'common/components/Footer';

//styles
import classes from './styles.module.scss';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleShowLogin = () => setShowLogin(!showLogin)

  return(
    <>
      <Header onClickSignInUp={toggleShowLogin}/>
      <Login show={showLogin} handleClose={toggleShowLogin}/>
      <div className={classes.wrapper}>
        dsa
      </div>
      <Footer />
    </>
  );
}

export default Home;