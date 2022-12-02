import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';
import Main from './components/main/Main';
import Autorization from './components/autorize/Autorization';
import Cabinet from './components/cabinet/Cabinet';
import Header from './components/main/Header/Header';
import Footer from './components/main/Footer/Footer';
import { addAut, addUsers, updateNot } from './Redux/reesterReducer';

const App = (props) => {
  const [select, setSelect] = useState('Мои данные');

  return (
    <>
      <Header setSelect={setSelect} reester={props.reester} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/autorize"
          element={
            <Autorization
              users={props.reester.users}
              updateNot={props.updateNot}
              addAut={props.addAut}
            />
          }
        />
        <Route
          path="/cabinet/*"
          element={
            <Cabinet
              updateNot={props.updateNot}
              notifications={props.reester.notifications}
              addUsers={props.addUsers}
              users={props.reester.users}
              foto={props.reester.foto}
              addAut={props.addAut}
              setSelect={setSelect}
              select={select}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    reester: state.reester,
  };
};

export default connect(mapStateToProps, { addAut, addUsers, updateNot })(App);
