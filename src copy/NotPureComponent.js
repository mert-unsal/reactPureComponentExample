export function NotPureComponent({demoState}) {
    console.log("Not Pure Component Rendered");
    // console.log("NotPureComponent state : ", demoState);
    return (
      <div className="App">
        { demoState }
      </div>
    );
  }
  
  export default NotPureComponent;
  