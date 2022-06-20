import React, { useState, useEffect } from 'react';
import useService from '../../service/Service';




const UserList = () => {
    const [users, setUsers] = useState([]);
    const {getAllUser} = useService();
  
    useEffect(() => {
        onRequest();
    }, [])  

    const onRequest = () =>{
        getAllUser()
            .then(onUserListLoaded)
    }
    
    const onUserListLoaded = (item) => {
        setUsers([...item]);
    }
    console.log(users)
    return(
        <div>
            
        </div>
    )
}

export default UserList;