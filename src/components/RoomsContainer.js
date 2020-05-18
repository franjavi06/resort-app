import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomsContainer({context}){
    const {loading, sortedRooms, rooms} = context;
    if(loading){
        return <Loading/>;
    }
    
    return (
        <div>
            <RoomsFilter rooms={rooms}></RoomsFilter>
            <RoomsList rooms={sortedRooms}></RoomsList>
        </div>                    
    );    
}

export default withRoomConsumer(RoomsContainer)

/* export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {(value)=>{
                const {loading, sortedRooms,rooms} =value;
                if(loading){
                    return <Loading/>;
                }
                
                return (
                    <div>
                        Hello From Rooms Container
                        <RoomsFilter rooms={rooms}></RoomsFilter>
                        <RoomsList rooms={sortedRooms}></RoomsList>
                    </div>                    
                )
            }}
        </RoomConsumer>

    )
}
 */