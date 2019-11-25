import React, { useState, useContext, useEffect , useRef } from 'react';
import { withRouter } from 'react-router-dom'
import { AnimationContext } from '../../context/AnimationContext';
import _ from 'lodash';

import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ContactPage from '../../pages/ContactPage/ContactPage';

import style from './AnimationComponent.module.css';

let ref = false;

const AnimationComponent = Component => {
  
  const NewComponent = () => {
    
    // let ref = useRef(false).current;
    
    const context = useContext(AnimationContext);
    
    const { time } = context;

    const [preComponent, setPreComponent] = useState();
    
    console.log('Animation Componentttttttttttt',context);
    console.log('prechilddddddd',context.preChild);

    console.log('Animation HOmepageeeee',HomePage);

    useEffect(() => {
      // console.log('unmount');
      if( context.pre === '/') {
        ref = true;
        setPreComponent(<HomePage />);
        setTimeout(() => { ref = false; setPreComponent('')}, time - 100);
      } else if (context.pre === '/about') {
        ref = true;
        setPreComponent(<AboutPage />);
        setTimeout(() => { ref = false; setPreComponent('')}, time - 100);
      } else if (context.pre === '/contact') {
        ref = true;
        setPreComponent(<ContactPage />);
        setTimeout(() => { ref = false; setPreComponent('')}, time - 100);
      }
    }, [])


    return (
      <div className = {`${ref ? style.isOut : style.isIn} `}>
        {
          preComponent || (<Component/>)  
        }
      </div>
    );
  }
  return NewComponent;
};

export default AnimationComponent;



// const AnimationComponent = Component => {

//   const context = useContext(AnimationContext);
//   console.log('111111111111111',Component);
//   console.log('111111111111111',props.children);

//   console.log('Animation Componentttttttttttt',context);

//   const [shouldRender, setShouldRender] = useState(false);
  

//   const time = _.debounce((child) => {
//     console.log('debounce');
//     return child;
//   }, 1000);

//   const handleOut = _.debounce((child) => {
//     console.log('debounce')
//     return (
//       <div className={`${style.isOut}`}>
//         {child}
//       </div>
//     )
//   }, 1000);


//   useEffect(() => {
//     return () => {
//       console.log('2222222222222222',props);

//       return (
//         <div className={`${style.isOut}`}>
//           {props}
//         </div>
//       )
//     }
//   }, []);

//   return (
//     <>
//       <div>
//         <Component />
//       </div>
//       {/* <div className={`${props.className} ${style.isIn}`}>
//         {props.children}
//       </div> */}
//     </>
//   );
// };