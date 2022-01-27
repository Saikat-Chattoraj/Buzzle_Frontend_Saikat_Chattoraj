  import React from 'react';
  import {Search} from "@material-ui/icons";
  const Navbar = () => {
    return( 
    <div className="flex bg-[#18181b] shadow">
    <div className="grid grid-cols-3 py-2 ">
        <div className="">
            
        </div>
        <div id="search" className="flex items-center mx-auto ">
          <div className="flex items-center bg-[#3f3f46] rounded-sm">
            <input placeholder="Search" className="py-2 pr-56 pl-3 rounded-sm bg-[#71717a] placeholder-white" />
            <Search style={{ color: 'whitesmoke' }} className="mx-2"/>
          </div>
        </div>
        <div id="cta" className=" grid grid-cols-2">
          <div></div>
          <div className="flex mx-auto items-center">
              <button className="rounded-md bg-[#38bdf8] px-5 py-1 font-semibold text-white mr-2">Login</button>
              <button className="rounded-md bg-[#38bdf8] px-5 py-1 font-semibold text-white ">SignUp</button>
          </div>
        </div>
    </div>
    </div>
    )
  };

  export default Navbar;
