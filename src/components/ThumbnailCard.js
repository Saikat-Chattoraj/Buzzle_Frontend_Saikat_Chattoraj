import React from 'react';
import data from "../utils/data"
import {WatchLater} from "@material-ui/icons"
const ThumbnailCard = () => {
  return (
    <div className="flex mt-6 mx-auto">
    <div className="ml-8">
        <div>
            <div className="text-2xl text-gray-400 font-extrabold">TOP <span className="text-zinc-50">LIVE EVENTS</span> FROM <span className="text-zinc-50 underline">DATA SCIENCE</span> WORLD</div>
        </div>
        <div className="flex gap-x-6 mt-2 ">
            {data.Thumbnail.map((item)=>(
                <div key={item.name} className="flex container relative flex-col bg-zinc-800 rounded-lg">
                    <img src={item.thumbnailImage} alt="No pic" className="w-72 opacity-60"/>
                    <div className="absolute text-white ml-2 mt-2 bg-red-500 rounded-md px-2">{item.liveNow}</div>
                    <div className="absolute text-white bottom-24 bg-black bg-opacity-50 text-sm ml-2 rounded-sm py-0.5 px-0.5">{item.viewerCount}</div>
                    <div className="absolute right-2 top-2">
                      <img src={item.thumbnailImage} alt="" className="rounded-full w-12 h-12"/>
                    </div>
                    <h2 className="ml-2 text-white font-semibold mt-1">{item.name}</h2>
                    <h3 className="ml-2 text-white font-semibold text-sm mt-1">{item.communityName}</h3>
                    <h4 className="ml-2 text-white font-semibold text-sm pb-2 "><WatchLater/> {item.timeCount}</h4>
                </div>
            ))}
        </div>
        <div className="mt-2">
            <a className="text-purple-600 font-semibold" href="/">SHOW MORE</a>
        </div>
        {/* second */}
        <div className="mt-12">
            <div className="text-2xl text-gray-400 font-extrabold">TOP <span className="text-zinc-50">LIVE EVENTS</span> FROM <span className="text-zinc-50 underline">SOFTWARE ENGINEERING</span> WORLD</div>
        </div>
        <div className="flex gap-x-6 mt-2">
            {data.Thumbnail.map((item)=>(
                <div key={item.name} className="flex container relative flex-col bg-zinc-800 rounded-lg">
                    <img src={item.thumbnailImage} alt="No pic" className="w-72 opacity-60"/>
                    <div className="absolute text-white ml-2 mt-2 bg-red-500 rounded-md px-2">{item.liveNow}</div>
                    <div className="absolute text-white bottom-24 bg-black bg-opacity-50 text-sm ml-2 rounded-sm py-0.5 px-0.5">{item.viewerCount}</div>
                    <div className="absolute right-2 top-2">
                      <img src={item.thumbnailImage} alt="" className="rounded-full w-12 h-12"/>
                    </div>
                    <h2 className="ml-2 text-white font-semibold mt-1">{item.name}</h2>
                    <h3 className="ml-2 text-white font-semibold text-sm mt-1">{item.communityName}</h3>
                    <h4 className="ml-2 text-white font-semibold text-sm pb-2"><WatchLater/> {item.timeCount}</h4>
                </div>
            ))}
        </div>
        <div className="mt-2">
            <a className="text-purple-600 font-semibold" href="/">SHOW MORE</a>
        </div>
        {/* second */}
        <div className="mt-12">
            <div className="text-2xl text-gray-400 font-extrabold">TOP <span className="text-zinc-50">LIVE EVENTS</span> FROM <span className="text-zinc-50 underline">FINANCE & INVESTMENT</span> WORLD</div>
        </div>
        <div className="flex gap-x-6 mt-2">
            {data.Thumbnail.map((item)=>(
                <div key={item.name} className="flex container relative flex-col bg-zinc-800 rounded-lg">
                    <img src={item.thumbnailImage} alt="No pic" className="w-72 opacity-60"/>
                    <div className="absolute text-white ml-2 mt-2 bg-red-500 rounded-md px-2">{item.liveNow}</div>
                    <div className="absolute text-white bottom-24 bg-black bg-opacity-50 text-sm ml-2 rounded-sm py-0.5 px-0.5">{item.viewerCount}</div>
                    <div className="absolute right-2 top-2">
                      <img src={item.thumbnailImage} alt="" className="rounded-full w-12 h-12"/>
                    </div>
                    <h2 className="ml-2 text-white font-semibold mt-1">{item.name}</h2>
                    <h3 className="ml-2 text-white font-semibold text-sm mt-1">{item.communityName}</h3>
                    <h4 className="ml-2 text-white font-semibold text-sm pb-2"><WatchLater/> {item.timeCount}</h4>
                </div>
            ))}
        </div >
        <div className="mt-2">
            <a className="text-purple-600 font-semibold" href="/">SHOW MORE</a>
        </div>
        {/* second */}
        <div className="mt-12">
            <div className="text-2xl text-gray-400 font-extrabold">TOP <span className="text-zinc-50">LIVE EVENTS</span> FROM <span className="text-zinc-50 underline">ENTREPRENUERSHIP</span> WORLD</div>
        </div>
        <div className="flex gap-x-6 mt-2">
            {data.Thumbnail.map((item)=>(
                <div key={item.name} className="flex container relative flex-col bg-zinc-800 rounded-lg">
                    <img src={item.thumbnailImage} alt="No pic" className="w-72 opacity-60"/>
                    <div className="absolute text-white ml-2 mt-2 bg-red-500 rounded-md px-2">{item.liveNow}</div>
                    <div className="absolute text-white bottom-24 bg-black bg-opacity-50 text-sm ml-2 rounded-sm py-0.5 px-0.5">{item.viewerCount}</div>
                    <div className="absolute right-2 top-2">
                      <img src={item.thumbnailImage} alt="" className="rounded-full w-12 h-12"/>
                    </div>
                    <h2 className="ml-2 text-white font-semibold mt-1">{item.name}</h2>
                    <h3 className="ml-2 text-white font-semibold text-sm mt-1">{item.communityName}</h3>
                    <h4 className="ml-2 text-white font-semibold text-sm pb-2"><WatchLater/> {item.timeCount}</h4>
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
