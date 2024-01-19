import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const  {friendId}= useParams()
    const [friend,setFriend] = useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        console.log(url)
        fetch(url)
        .then(res =>res.json())
        .then(data =>setFriend(data))
    },[])
    return (
        <div>
            <h2>dear friend of your detail {friendId}</h2>
            <h3>Name:{friend.name}</h3>
            <h3>Email:{friend.email}</h3>
            <h4>website:{friend.website}</h4>
            <h5>City:{friend.address?.city}</h5>
        </div>
    );
};

export default FriendDetail;