import React from 'react';
import {Home} from '@material-ui/icons';
import {Queue}from '@material-ui/icons';
import {AcUnit} from '@material-ui/icons';
import {Airplay} from '@material-ui/icons';
import {List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
const DD = ({handleClick}) => {
  const SidebarEssentials=[
    {
        id: 0,
        avatarIcon: (<Home style={{color:'whitesmoke'}}/>),
        iconName: "Home"
      },
      {
        id: 1,
        avatarIcon: (<AcUnit style={{color:'whitesmoke'}}/>),
        iconName: 'Cultures'
      },
      {
        id: 2,
        avatarIcon: (<Airplay style={{color:'whitesmoke'}}/>),
        iconName: 'Rooms'
      },
      {
        id: 3,
        avatarIcon: (<Queue style={{color:'whitesmoke'}}/>),
        iconName: 'Playlist'
      },]
      const recommendedRoom=[
        {
            id: 0,
            avatarIcon: (<Home style={{color:'whitesmoke'}}/>),
            iconName:'Sample Room',
            thumbnailImage: '/assets/1.jpeg'
          },
          {
            id: 1,
            avatarIcon: (<AcUnit style={{color:'whitesmoke'}}/>),
            iconName:'Sample Room',
            thumbnailImage: '/assets/1.jpeg' 
          },
          ]
          const recommendedCreators=[
            {
                id: 0,
                avatarIcon: (<Home style={{color:'whitesmoke'}}/>),
                iconName:'Sample Creator',
                thumbnailImage: '/assets/1.jpeg'
              },
              {
                id: 1,
                avatarIcon: (<AcUnit style={{color:'whitesmoke'}}/>),
                iconName:'Sample Creator',
                thumbnailImage: '/assets/1.jpeg' 
              },
              ]
  console.log(handleClick)
  console.log(handleClick?"bg-white ":"bg-white")
  return (
    <div className={`bg-theme-bg px-5 bg-opacity-50 hadow-inset transform transition-all duration-600 ease-in-out backdrop-filter backdrop-blur-lg w-[300px] h-full xl:hidden absolute top-12 left-0 z-50 ${handleClick?"translate-x-0":"-translate-x-full"}`} >
            <div className="mx-auto my-4">
                <List >
                    {SidebarEssentials.map((item)=>(
                        <ListItem button key={item.id} style={{color:'#71717a'}}>
                            <ListItemIcon>{item.avatarIcon}</ListItemIcon>
                            <ListItemText style={{color:'whitesmoke'}} primary={item.iconName} />
                        </ListItem>
                    ))}              
                </List>
                {/* Recommeded Rooms */}
                <div className="mt-4 text-white font-bold text-lg">
                        Recommended Rooms
                </div>
                <div className="mt-2">
                    {recommendedRoom.map((item)=>(
                        <ul key={item.id} >
                            <li className="flex mb-6 items-center ">
                                <div className="mr-2">
                                <img src={item.thumbnailImage} alt="" className="rounded-full w-8 h-8"/>
                                </div>
                                <div className="text-white">
                                    {item.iconName}
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="mt-2">
                  <a className="text-purple-600 font-semibold" href="/">Show More</a>
                </div>

                <div className="mt-4 text-white font-bold text-lg">
                        Recommended Creators
                </div>
                <div className="mt-2">
                    {recommendedCreators.map((item)=>(
                        <ul key={item.id} >
                            <li className="flex mb-6 items-center">
                                <div className="mr-2">
                                <img src={item.thumbnailImage} alt="" className="rounded-full w-8 h-8"/>
                                </div>
                                <div className="text-white">
                                    {item.iconName}
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="mt-2">
                  <a className="text-purple-600 font-semibold" href="/">Show More</a>
                </div>
            </div>
            
            <div>
            <button className="rounded-md md:hidden bg-gradient-to-tr from-transparent to-slate-700 transform transition duration-300 hover:scale-110 px-6 py-1 font-semibold text-white mr-2">Login</button></div>
            <div className="mt-4 ">
            <button className="rounded-md md:hidden bg-gradient-to-tr from-transparent to-slate-700 bg-transparent transform transition duration-300 hover:scale-110 px-5 py-1 font-semibold text-white ">SignUp</button></div>       
    </div>
  )
};

export default DD;
