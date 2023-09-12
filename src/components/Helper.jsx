import React, { useReducer, useState } from 'react'

const arr =[2,4,6];
// let sum =0;

let cho=arr.reduce((sum,i)=>{
return sum+i
},0)

console.log(cho)

const Helper = () => {
    const [state, dispatch]=useReducer((state,action)=>{
        switch(action.type){
            case "SET_NAME" :
                return {...state,name:action.payload}
            
            case "ADD": return (
                ()=>{
                    const apple= {
                        ...state,
                        studentList: [...state.studentList, state.name] // Add state.name to studentList
                    
                }
                return apple
                }
            )()
        //     case "ADD":
        // return (() => ({
        //     ...state,
        //     studentList: [...state.studentList, state.name]
        // }))();
                
           
        }
          
    },{
        name:"",
        studentList:["dinesh"]
    })
   
  return (
    <div>
        {/* <p>{state.name}</p> */}
        <ul>
            {
                state.studentList.map((x)=>(
                    <li>{x}</li>
                ))
            }
        </ul>
        <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch({type:"ADD"})}}>
            <input className="border-2" type="text" onChange={(e)=>dispatch({type:"SET_NAME",payload:e.target.value})}  />
            <button type="submit">submit</button>
        </form>
        <button>remove</button>
    </div>
  )
}

export default Helper