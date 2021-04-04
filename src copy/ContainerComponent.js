import { useState } from 'react';
import NotPureComponent from './NotPureComponent';
import PureComponent from './PureComponent';

function ContainerComponent() {
  const [demoState,setDemoState] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <input placeHolder="Please Input" onChange={(event)=>{setDemoState(event.target.value)}}/>
        <NotPureComponent demoState={demoState}/>
        <PureComponent demoState={demoState}/>
      </header>
    </div>
  );
}

export default ContainerComponent;
