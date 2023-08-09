import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const links=[
        {
            id:1, 
            name:"About",
            link:"about",
        },
        {
            id:2, 
            name:"Projects",
            link:"projects",
        },
        {
            id:3, 
            name:"Resume",
            link:"resume",
        },
        {
            id:4, 
            name:"Contact",
            link:"contact",
        },
    ]
  return (
    <div className="flex justify-evenly text-xl">
        <div>heisdinesh</div>
        <div className='flex gap-6'>
            {
                links.map((x)=>(
                    <a key={x.id} href={`/${x.link}`} >{x.name}</a>
                    
                ))
            }
        </div>
    </div>
  )
}

export default Navbar