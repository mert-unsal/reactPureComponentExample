import React from 'react';
function MyComponent({demonstrationArray}) {
  console.log("Reference Pure Component Rendered");
    return (
      <ol>
        {demonstrationArray.map((eachItem)=> (<li>
        {eachItem}</li>))}
      </ol>
    );
}
export default React.memo(MyComponent);
  