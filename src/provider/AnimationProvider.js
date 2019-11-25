import React from 'react';
import { withRouter } from 'react-router-dom';
import { AnimationContext } from '../context/AnimationContext';

const AnimationProvider = (props) => {

  const { time } = props;
  
  const contextValue = {
    time,
  }

  return (
    <AnimationContext.Provider value={contextValue}>
      {props.children}
    </AnimationContext.Provider>
  )
};

// let current;
// let pre;

// const AnimationProvider = (props) => {

//   const { time } = props;
  
//   if (current !== props.location.pathname ) {
//     pre = current;
//   }

//   // const ref = useRef(props.location.pathname).current;
//   current = props.location.pathname;
//   // ref = useRef(props.location.pathname).current;
  

//   // console.log('preeeeeeeee', pre);
//   // console.log('current location', props.location.pathname);
//   console.log('Animation Provider', props.children);
//   const components = props.children;

//   useEffect(() => {
//     current = props.location.pathname;
//   }, [props])

  
//   const contextValue = {
//     time,
//     current,
//     pre,
//     components,
//   }

//   return (
//     <AnimationContext.Provider value={contextValue}>
//       {props.children}
//     </AnimationContext.Provider>
//   )
// };

export default withRouter(AnimationProvider);
