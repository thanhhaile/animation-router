import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import { PathName } from './PathName';
import AnimationRouter from '../components/AnimationRouter/AnimationRouter';
import AnimationComponent from '../components/AnimationComponent/AnimationComponent';

const AnimationHome = AnimationComponent(HomePage, 1000);
const AnimationAbout = AnimationComponent(AboutPage);
const AnimationContact = AnimationComponent(ContactPage);

const Routes = () => {
  
  return(
  <AnimationRouter time={1000}>
    <Switch> 

      <Route exact path={PathName.HomePage} component={AnimationHome} />
      <Route path={PathName.AboutPage} component={AnimationAbout} />
      <Route path={PathName.ContactPage} component={AnimationContact} />
  
      {/* <Route exact path={ComponentNameWithPath.HomePage} component={HomePage} />
      <Route path={ComponentNameWithPath.AboutPage} component={AboutPage} />
      <Route path={ComponentNameWithPath.ContactPage} component={ContactPage} /> */}
    </Switch>
  </AnimationRouter>
)};

export default Routes;