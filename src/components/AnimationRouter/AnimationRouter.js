import React from 'react';
import AnimationProvider from '../../provider/AnimationProvider';


const AnimationRouter = ({ time = 500, ...props}) => {
  
  // console.log('AnimationRouterr Time', time);
  // console.log('AnimationRouterr Propss', props);
  
  return (
    <AnimationProvider time={time} >
      {props.children}
    </AnimationProvider>
  )
};

export default AnimationRouter;

// let current;
// let pre;
// let preChildren;

// const AnimationRouter = ({ time = 500, ...props}) => {

//   const [preComponent, setPreComponent] = useState();

//   if (current !== props.location.pathname ) {
//     pre = current;
//     preChildren = props.children;
//   }

//   current = props.location.pathname;
  

//   console.log('preeeeeeeee', pre);
//   console.log('preeeChildrennnnnn', preChildren);
//   // console.log('current location', props.location.pathname);
//   console.log('Animation Provider', props.children);
//   const components = props.children;

//   useEffect(() => {
//     current = props.location.pathname;
//   }, [props])

//   console.log('AnimationRouterrrr')
//   console.log(time);
//   console.log('animationnnnnnnnn',props);

//   return (
//     <div time={time} componentList={props.children}>
//       {preChildren}
//     </div>
//     // <AnimationProvider time={time} componentList={props.children}>
//     //   {props.children}
//     // </AnimationProvider>
//   )
// };

