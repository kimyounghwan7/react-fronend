// user detail show component
import React, { useState, useEffect } from 'react';
//import axios from 'axios'

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'

// 사용자 상세
const UserImageShow = (props) => {
  
    const [userImages, setUserImages] = useState(null);

    // user list get axios 통신
    const fetchUsers = async () => {
      try {
        await axios.get(
          '/users/image/?user_id='+props.userId,{
            responseType: "arraybuffer"
          }
        ).then((res)=>{
            const base64 = btoa(
                new Uint8Array(res.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ''
                )
              )
              setUserImages(base64)
        }).catch((err)=>{
          console.log(err);
        });
      } catch (e) {
        console.log('이미지 없어요');
      }
    }; // fetchUsers end
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    return (
        <>
            <img src={`data:image/jpeg;charset=utf-8;base64,${userImages}`} alt='이미지음서요' width='250px'/>
        </>
    );
  }

  export default UserImageShow;