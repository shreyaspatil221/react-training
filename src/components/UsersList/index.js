import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [userList, setUserList] = useState(null);
    const yourDomain = 'http://localhost:3000'

    const getUserList = async () => {
        try {
            const response = await axios.get(`${yourDomain}/users`);
            response && setUserList(response.data);
        } catch (error) {
            console.log("Error", error)
        }
    }

    useEffect(() => {
        getUserList()
        return () => { }
    }, [])


    return (
        <div className='container m-2'>
            {userList?.map((user) => (
                <div key={user.id} className='d-flex space-between'>
                    <div className='p-2'>UserName - {user.username}</div>
                    <div className='p-2'>UserId - {user.id}</div>
                </div>
            ))}
        </div>
    );
};

export default UserList;