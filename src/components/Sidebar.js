import React from 'react';
import {Home} from '@material-ui/icons';
import {Queue}from '@material-ui/icons';
import {AcUnit} from '@material-ui/icons';
import {Airplay} from '@material-ui/icons';
import {List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
const Sidebar = () => {
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
            iconName:'Sample Room' 
          },
          {
            id: 1,
            avatarIcon: (<AcUnit style={{color:'whitesmoke'}}/>),
            iconName:'Sample Room' 
          },
          {
            id: 2,
            avatarIcon: (<Airplay style={{color:'whitesmoke'}}/>),
            iconName:'Sample Room' 
          },
          {
            id: 3,
            avatarIcon: (<Queue style={{color:'whitesmoke'}}/>),
            iconName:'Sample Room' 
          },]
    return (
        <div className="flex bg-[#262626] h-full">
            <div className="mx-auto my-4">
                <List >
                    {SidebarEssentials.map((item)=>(
                        <ListItem button key={item.id} style={{color:'#71717a'}}>
                            <ListItemIcon>{item.avatarIcon}</ListItemIcon>
                            <ListItemText style={{color:'whitesmoke'}} primary={item.iconName} />
                        </ListItem>
                    ))}
                </List>
                <div className="mt-4 text-white font-bold text-lg">
                        Recommended Rooms
                </div>
                <div className="mt-2">
                    {recommendedRoom.map((item)=>(
                        <ul key={item.id} >
                            <li className="flex mb-4 justify-between">
                                <div>
                                    {item.avatarIcon}
                                </div>
                                <div className="text-white">
                                    {item.iconName}
                                </div>
                                <button className="bg-blue-700 text-white px-3 font-bold rounded-md">Join</button>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
