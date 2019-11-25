import React, { useState, useContext, useEffect } from 'react';
import classnames from 'classnames';

import { AnimationContext } from '../../context/AnimationContext';

import style from './AnimationComponent.module.css';

let out = false;
let preComponent;

const AnimationComponent = Component => {
  
  const NewComponent = () => {
    console.log('render');
    let { time } = useContext(AnimationContext);

    const [render, setRender] = useState(false);
    
    let customStyle = {
      // var(--timeAnimation): 1,
      // animation: `slideOut 1` ,
    };

    // console.log('prechilddddddd',preComponent);
    // console.log('currentchilddddddd',currentComponent);

    useEffect(() => {
      if (preComponent !== undefined) {
        out = true;

        setRender(true);
      }
      setTimeout(() => { 
        out = false; 
        preComponent = false; 
        setRender(false);
      }, time - 100);

    }, [])

    useEffect(() => {
      console.log('re render');
      return () => {
        preComponent = (<Component />);
      }
    });

    return (
      <div
      className = {classnames({
        [style.isOut] : out,
        [style.isIn]: !out })} 
        style = {customStyle} >
        {
          preComponent
        }

        <Component />
      </div>
    );
  }
  return NewComponent;

};

export default AnimationComponent;



// let ref = false;

// const AnimationComponent = Component => {
  
//   const NewComponent = () => {
    
//     // let ref = useRef(false).current;
    
//     const context = useContext(AnimationContext);
    
//     const { time } = context;

//     const [preComponent, setPreComponent] = useState();
    
//     console.log('Animation Componentttttttttttt',context);
//     console.log('prechilddddddd',context.preChild);

//     useEffect(() => {
//       // console.log('unmount');
//       if( context.pre === '/') {
//         ref = true;
//         setPreComponent(<HomePage />);
//         setTimeout(() => { ref = false; setPreComponent('')}, time - 100);
//       } else if (context.pre === '/about') {
//         ref = true;
//         setPreComponent(<AboutPage />);
//         setTimeout(() => { ref = false; setPreComponent('')}, time - 100);
//       } else if (context.pre === '/contact') {
//         ref = true;
//         setPreComponent(<ContactPage />);
//         setTimeout(() => { ref = false; setPreComponent('')}, time - 100);
//       }
//     }, [])


//     return (
//       <div className = {`${ref ? style.isOut : style.isIn} `}>
//         {
//           preComponent || (<Component/>)  
//         }
//       </div>
//     );
//   }
//   return NewComponent;
// };

// export default AnimationComponent;
