import React, {useState} from 'react';
import AnimationProvider from '../../provider/AnimationProvider';

const AnimationRouter = ({ time = 500, ...props}) => {

  console.log('AnimationRouterrrr')
  console.log(time);
  console.log('animationnnnnnnnn',props);

  return (
    <AnimationProvider time={time} componentList={props.children}>
      {props.children}
    </AnimationProvider>
  )
};

export default AnimationRouter;