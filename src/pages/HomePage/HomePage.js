import React from 'react';

import style from './HomePage.module.css';

const HomePage = () => {

  // console.log(props);

  return (
    <div className={`${style.homePageContainer} `} >
      <h3>home page</h3>
      <p>Nội dung của trang home </p>
    </div>
  )
};

export default HomePage;