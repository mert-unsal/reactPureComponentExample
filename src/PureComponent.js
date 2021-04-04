import React from 'react';
function MyComponent({demoState}) {
  console.log("Pure Component Rendered");
    return (
      <div className="App">
      { demoState }
    </div>
    );
}
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
 
 if(nextProps.demoState.length > 5) {
   return false;
 } else { 
   return true;
 }
}
export default React.memo(MyComponent, areEqual);

// function PureComponent({demoState}) {
//     console.log("Pure Component Rendered");
//     return (
//       <div className="App">
//       { demoState }
//     </div>
//     );
//   }
  
  // export default PureComponent;
  