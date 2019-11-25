import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import { ComponentNameWithPath } from './ComponentNameWithPath';
import AnimationRouter from '../components/AnimationRouter/AnimationRouter';
import AnimationComponent from '../components/AnimationComponent/AnimationComponent';

const DelayHome = AnimationComponent(HomePage);
const DelayAbout = AnimationComponent(AboutPage);
const DelayContact = AnimationComponent(ContactPage);

const Routes = () => {
  
  return(
  <AnimationRouter time={1000}>
    <Switch> 
      <Route exact path={ComponentNameWithPath.HomePage} component={DelayHome} />
      <Route path={ComponentNameWithPath.AboutPage} component={DelayAbout} />
      <Route path={ComponentNameWithPath.ContactPage} component={DelayContact} />
    </Switch>
  </AnimationRouter>
)};

export default Routes;