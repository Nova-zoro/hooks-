import React, { useState } from 'react'

function Contacts() {
    const bioData = [
        {
            id:0,
            myName:'vinod',
            age:26
        },
        {
            id:1,
            myName:'Thapa',
            age:27
        },

    ]
    const [myArray , setMyArray] = useState(bioData);
    const clearData = () =>{
        setMyArray([{
            id:10,
            myName:'Cristino',
            age:35
        },
        {
            id:20,
            myName:'Messi',
            age:38
        }
    ]);
    }

  return (
    <>
        {
            myArray.map((curElem ) =>{
                return <h1 className='h1style'>Name: {curElem.myName} & Age : {curElem.age}</h1>
            })
        }
        <button onClick={clearData} className="btn btn-success">Click</button>
    </>
  )
}

export default Contacts;