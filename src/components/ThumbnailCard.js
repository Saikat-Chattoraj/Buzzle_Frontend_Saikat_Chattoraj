import React from 'react';
import data from "../utils/data"
import {WatchLater,MoreVert} from "@material-ui/icons"
const ThumbnailCard = () => {
  return (
    <div className="flex mt-6 mx-auto">
    <div className="sm:ml-8">
        <div className="flex smx:place-items-center smx:px-5">
            <div className="text-2xl text-gray-400 font-extrabold">TOP <span className="text-zinc-50">LIVE EVENTS</span> FROM <span className="text-zinc-50 underline">DATA SCIENCE</span> WORLD</div>
        </div>
        {/* First */}
        <div className="flex mdx:flex-wrap smx:gap-y-4 sm:gap-y-4 gap-x-6 mt-2 ">
            {data.Thumbnail.map((item)=>(
                <div key={item.name} className="flex xxsmx:min-w-screen mdx:w-80 smx:w-96 xsmx:flex-shrink container m-auto relative flex-col bg-zinc-800 rounded-lg">
                    <img src={item.thumbnailImage} alt="No pic" className="lg:w-72 mdx:h-56 smx:h-64 xxsmx:w-78 opacity-60"/>
                    <div className="absolute text-white ml-2 mt-2 bg-red-500 rounded-md px-2">{item.liveNow}</div>
                    <div className="absolute text-white lg:bottom-24 md:bottom-32 sm:bottom-24 smx:bottom-24 bg-black bg-opacity-50 text-sm ml-2 rounded-sm py-0.5 px-0.5">{item.viewerCount}</div>
                    <div className="absolute right-2 top-2">
                      <img src={item.thumbnailImage} alt="" className="rounded-full w-12 h-12"/>
                    </div>
                    <div className="flex justify-between">
                        <div className="ml-2 text-white font-semibold mt-1">{item.name}</div>
                        <div><MoreVert style={{color:'white'}}/></div>
                    </div>
                    <h3 className="ml-2 text-white font-semibold text-sm mt-1">{item.communityName}</h3>
                    <h4 className="ml-2 text-white font-semibold text-sm pb-2 "><WatchLater/> {item.timeCount}</h4>
                </div>
            ))}
        </div>
        <div className="mt-2 mb-2">
            <a className="text-purple-600 font-semibold" href="/">SHOW MORE</a>
        </div>
        {/* second */}
        <div>
            <div className="text-2xl text-gray-400 font-extrabold">TOP <span className="text-zinc-50">LIVE EVENTS</span> FROM <span className="text-zinc-50 underline">DATA SCIENCE</span> WORLD</div>
        </div>
        
        <div className="flex mdx:flex-wrap smx:gap-y-4 sm:gap-y-4 gap-x-6 mt-2 ">
            {data.Thumbnail.map((item)=>(
                <div key={item.name} className="flex mdx:w-80 smx:w-96 container m-auto relative flex-col bg-zinc-800 rounded-lg">
                    <img src={item.thumbnailImage} alt="No pic" className="lg:w-72 mdx:h-56 smx:h-64 opacity-60"/>
                    <div className="absolute text-white ml-2 mt-2 bg-red-500 rounded-md px-2">{item.liveNow}</div>
                    <div className="absolute text-white lg:bottom-24 md:bottom-28 sm:bottom-24 smx:bottom-24 bg-black bg-opacity-50 text-sm ml-2 rounded-sm py-0.5 px-0.5">{item.viewerCount}</div>
                    <div className="absolute right-2 top-2">
                      <img src={item.thumbnailImage} alt="" className="rounded-full w-12 h-12"/>
                    </div>
                    <div className="flex justify-between">
                        <div className="ml-2 text-white font-semibold mt-1">{item.name}</div>
                        <div><MoreVert style={{color:'white'}}/></div>
                    </div>
                    <h3 className="ml-2 text-white font-semibold text-sm mt-1">{item.communityName}</h3>
                    <h4 className="ml-2 text-white font-semibold text-sm pb-2 "><WatchLater/> {item.timeCount}</h4>
                </div>
            ))}
        </div>
        <div className="mt-2 mb-2">
            <a className="text-purple-600 font-semibold" href="/">SHOW MORE</a>
        </div>
        {/* third*/}
        <div>
            <div className="text-2xl text-gray-400 font-extrabold">TOP <span className="text-zinc-50">LIVE EVENTS</span> FROM <span className="text-zinc-50 underline">DATA SCIENCE</span> WORLD</div>
        </div>
       
        <div className="flex mdx:flex-wrap smx:gap-y-4 sm:gap-y-4 gap-x-6 mt-2 ">
            {data.Thumbnail.map((item)=>(
                <div key={item.name} className="flex mdx:w-80 smx:w-96 container m-auto relative flex-col bg-zinc-800 rounded-lg">
                    <img src={item.thumbnailImage} alt="No pic" className="lg:w-72 mdx:h-56 smx:h-64 opacity-60"/>
                    <div className="absolute text-white ml-2 mt-2 bg-red-500 rounded-md px-2">{item.liveNow}</div>
                    <div className="absolute text-white lg:bottom-24 md:bottom-28 sm:bottom-24 smx:bottom-24 bg-black bg-opacity-50 text-sm ml-2 rounded-sm py-0.5 px-0.5">{item.viewerCount}</div>
                    <div className="absolute right-2 top-2">
                      <img src={item.thumbnailImage} alt="" className="rounded-full w-12 h-12"/>
                    </div>
                    <div className="flex justify-between">
                        <div className="ml-2 text-white font-semibold mt-1">{item.name}</div>
                        <div><MoreVert style={{color:'white'}}/></div>
                    </div>
                    <h3 className="ml-2 text-white font-semibold text-sm mt-1">{item.communityName}</h3>
                    <h4 className="ml-2 text-white font-semibold text-sm pb-2 "><WatchLater/> {item.timeCount}</h4>
                </div>
            ))}
        </div>
        <div className="mt-2 mb-2">
            <a className="text-purple-600 font-semibold" href="/">SHOW MORE</a>
        </div>
        {/* fourth */}
        <div>
            <div className="text-2xl text-gray-400 font-extrabold">TOP <span className="text-zinc-50">LIVE EVENTS</span> FROM <span className="text-zinc-50 underline">DATA SCIENCE</span> WORLD</div>
        </div>
        
        <div className="flex mdx:flex-wrap smx:gap-y-4 sm:gap-y-4 gap-x-6 mt-2 ">
            {data.Thumbnail.map((item)=>(
                <div key={item.name} className="flex mdx:w-80 smx:w-96 container m-auto relative flex-col bg-zinc-800 rounded-lg">
                    <img src={item.thumbnailImage} alt="No pic" className="lg:w-72 mdx:h-56 smx:h-64 opacity-60"/>
                    <div className="absolute text-white ml-2 mt-2 bg-red-500 rounded-md px-2">{item.liveNow}</div>
                    <div className="absolute text-white lg:bottom-24 md:bottom-28 sm:bottom-24 smx:bottom-24 bg-black bg-opacity-50 text-sm ml-2 rounded-sm py-0.5 px-0.5">{item.viewerCount}</div>
                    <div className="absolute right-2 top-2">
                      <img src={item.thumbnailImage} alt="" className="rounded-full w-12 h-12"/>
                    </div>
                    <div className="flex justify-between">
                        <div className="ml-2 text-white font-semibold mt-1">{item.name}</div>
                        <div><MoreVert style={{color:'white'}}/></div>
                    </div>
                    <h3 className="ml-2 text-white font-semibold text-sm mt-1">{item.communityName}</h3>
                    <h4 className="ml-2 text-white font-semibold text-sm pb-2 "><WatchLater/> {item.timeCount}</h4>
                </div>
            ))}
        </div>
        <div className="mt-2 mb-2">
            <a className="text-purple-600 font-semibold" href="/">SHOW MORE</a>
        </div>
    </div>
</div>
  );
};

export default ThumbnailCard;
