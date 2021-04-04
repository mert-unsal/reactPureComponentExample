import { useState } from 'react';
import NotPureComponent from './NotPureComponent';
import PureComponent from './PureComponent';
import ReferenceComponent from './PureComponentReference';

function ContainerComponent() {
  const [inputState,setInputState] = useState("");
  const [demonstrationArray,setDemonstrationArray]= useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <input placeHolder="Please Input" onChange={(event)=>{setInputState(event.target.value)}}/>
        <button onClick={()=>{
          // demonstrationArray.push(inputState);
          setDemonstrationArray([...demonstrationArray,inputState]);
          // Object.assign(demonstrationArray,inputState)
          }}>add element</button>
        <NotPureComponent demoState={inputState}/>
        <PureComponent demoState={inputState}/>
        <ReferenceComponent demonstrationArray={demonstrationArray}/>
      </header>
    </div>
  );
}

export default ContainerComponent;
