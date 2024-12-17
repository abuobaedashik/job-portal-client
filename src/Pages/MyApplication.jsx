import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { data } from 'react-router-dom';

const MyApplication = () => {
    const {user}=useAuth()
    console.log(user.email);
    const [application,setapplication]=useState([])
    useEffect (()=>{
        fetch(`http://localhost:3000/job_application?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setapplication(data)
            // console.log(data);
            })
    },[user.email])
    return (
        <div>
            application{application.length}
        </div>
    );
};

export default MyApplication;