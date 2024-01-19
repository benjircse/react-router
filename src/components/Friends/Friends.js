import React, { useEffect, useState } from 'react';
import Friend from './Friend';

const Friends = () => {
    const [friends,setFriends] = useState([]);
    console.log(friends)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h3>hello friend , how are you????</h3>
            <p>amake gopne kisu taka da amar need</p>
            {
                friends.map(friend=><Friend key={friend.id} friends={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;