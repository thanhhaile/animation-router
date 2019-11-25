import React from 'react';

import sytle from './AboutPage.module.css';
import AnimationComponent from '../../components/AnimationComponent/AnimationComponent';

const AboutPage = () => {

  console.log('ABOUT PAGE');
  
  return (
    <div className={sytle.aboutPageContainer} >
      <h3>About page</h3>
      <p>Nội dung của trang about </p>
    </div>
    // <AnimationComponent className={sytle.aboutPageContainer} >
    //   <h3>About page</h3>
    //   <p>Nội dung của trang about </p>
    // </AnimationComponent>
  )
};

export default AboutPage;