  import React from 'react';
  import { useState } from 'react';
  import {MenuOpen,Close,Search} from "@material-ui/icons";
  import DD from './Hamburger';
  const Navbar = () => {
    const [isSidebarOpen,setSidebarOpen]=useState(false)
    function handleClick(){
      setSidebarOpen(isSidebarOpen=>!isSidebarOpen);
      console.log('clicked')
      console.log(setSidebarOpen)
    }
    return( 
    <div className="flex bg-[#18181b]  w-full shadow">
      <div className="xl:hidden place-items-center my-auto px-2 mr-4 smx:absolute smx:left-4 smx:py-1">
      <button
        onClick={handleClick}
        className=""
      >
        {isSidebarOpen?<Close style={{color:'white'}}/>:<MenuOpen style={{color:'white'}}/>}
      </button>
        </div>
    <div className="mx-auto place-items-center px-2 py-1">
      <div className="flex sm:flex-row place-items-center m-auto"> 
        <DD handleClick={isSidebarOpen}/>
        <div id="search" className="flex items-center mx-auto ">
          <div className="flex items-center bg-[#3f3f46] rounded-sm">
            <input placeholder="Search" className="py-2 smx:hidden md:pr-40 sm:pr-52 lg:pr-60  pl-3 rounded-sm bg-[#71717a] placeholder-white" />
            <Search style={{ color: 'whitesmoke' }} className="mx-2"/>
          </div>
        </div>
        <div id="cta" className=" smx:hidden xl:ml-32 ml-16 flex place-items-center justify-between m-auto">
          <div></div>
          <div className="flex mx-auto items-center">
              <button className="rounded-md mdx:hidden bg-[#38bdf8] px-5 py-1 font-semibold text-white mr-2">Login</button>
              <button className="rounded-md mdx:hidden bg-[#38bdf8] px-5 py-1 font-semibold text-white ">SignUp</button>
          </div>
        </div>
    </div>
    </div>
    </div>
    )
  };

  export default Navbar;
