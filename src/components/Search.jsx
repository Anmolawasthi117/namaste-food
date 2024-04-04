// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
 
 
const Search = () => {
  function filterData  (searchText,listres) {
    const filteredData = listres.filter((listres) => {
    listres.resName.include(searchText);
  })}
   const [searchText,setSearchText] = useState("")
  return (
    <div>
       <input className=" w-[100%]  block  rounded border border-solid bg-slate-400 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-black focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-black dark:placeholder:text-black dark:autofill:shadow-autofill dark:focus:border-primary m-5 " placeholder="search" type="text" value={searchText}
       onChange={
        ()=>{
          const data = filterData (searchText,resName);
          setSearchText(data);
        }

       }
        />
    </div>
  )
}

export default Search
