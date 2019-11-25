import React, { useState, useEffect, useContext } from 'react';

// import { PathName } from '../../routes/PathName'

import style from './HomePage.module.css';

const HomePage = (props) => {

  const [appear, setAppear] = useState(false);
  const [disappear, setDisappear] = useState(false);
  // console.log(appear);

  // useEffect(() => {
  //   if(props.match.isExact) setAppear(true);

  //   return () => {
  //     setDisappear(true);
  //   }
  // }, [])

  console.log(props);

  return (
    <div className={`${style.homePageContainer} `} >
    {/* <div className={`${style.homePageContainer} ${appear ? style.pageActive : ''} ${disappear ? style.pageDisactive : ''}`} > */}
      <h3>home page</h3>
      <p>Nội dung của trang home </p>
    </div>
  )
};

export default HomePage;