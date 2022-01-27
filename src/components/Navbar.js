  import React from 'react';
  import {Search} from "@material-ui/icons";
  const Navbar = () => {
    return( 
    <div className="flex bg-[#18181b]  w-full shadow">
    <div className="container mx-auto place-items-center px-2 py-1">
      <div className="flex sm:flex-row justify-between place-items-center m-auto">  
        <div id="search" className="flex items-center mx-auto ">
          <div className="flex items-center bg-[#3f3f46] rounded-sm">
            <input placeholder="Search" className="py-2 smx:hidden md:pr-56  pl-3 rounded-sm bg-[#71717a] placeholder-white" />
            <Search style={{ color: 'whitesmoke' }} className="mx-2"/>
          </div>
        </div>
        <div id="cta" className=" smx:hidden flex place-items-center justify-between m-auto">
          <div></div>
          <div className="flex mx-auto items-center">
              <button className="rounded-md bg-[#38bdf8] px-5 py-1 font-semibold text-white mr-2">Login</button>
              <button className="rounded-md bg-[#38bdf8] px-5 py-1 font-semibold text-white ">SignUp</button>
          </div>
        </div>
    </div>
    </div>
    </div>
    )
  };

  export default Navbar;
