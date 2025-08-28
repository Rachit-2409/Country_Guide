import React, { useEffect, useState } from 'react'
import getData from '../Apis/API'
import { NavLink } from 'react-router-dom'
const Country = () => {
      const [Countries, setCountries] = useState(null)
      useEffect(
        ()=>{
          const fetchData = async ()=>{
              const response = await getData();
              setCountries(response.data);
          }
          fetchData()
        },[]
      )


      console.log(Countries)
      
  return (



    <div>
      {Countries && Countries.map(Element=>{
        return (
          <>
          <div className='w-70 bg-gradient-to-r from-neutral-800 to-transparent text-white p-5 rounded-lg'>
          <h3 className='text-xl text-neutral-300'>{Element.name.common}</h3>
          <p>Population : {Element.population}</p>
          <p>Language : {Object.keys(Element.languages).map((ele)=>Element.languages[ele] + " ")}</p>
       <NavLink to={`/detail/${Element.name.common}`}> <button>Know More</button></NavLink>  
          </div>
</>
        )
      })}
    </div>
  )
}

export default Country
