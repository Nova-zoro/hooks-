import React , { useState } from 'react';
import "./component/style.css";
import Contacts from './component/Contacts';

function App() {
  let [myName , setMyName] = useState('initial value issued at useState and held by val')


  const onChange = ()=> {
    if(myName === 'initial value issued at useState and held by val'){
      setMyName('myname got updated to this') 
    }else{
      setMyName('initial value issued at useState and held by val') 
    }
  }
  console.log(myName)
  return(
    <>
      <div>
        <h1>{myName}</h1>
        <button className="btn btn-success" onClick={onChange}>Click</button>
        <Contacts/>

      </div>
    </>
  )
}
export default App;