// user detail show component
import React, { useState } from 'react';
//import axios from 'axios'

import { useLocation, useParams} from 'react-router-dom';

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

import UserForm from './UserForm';

// 사용자 상세
const UserShowDetail = ({match}) => {
  
    const [userId] = useState(useParams().id);
    const [userName] = useState(useLocation().state.userName);
    const [userAge] = useState(useLocation().state.userAge);

    // const [userId, setUser] = useState(useParams().id);
    // const [userName, setUserName] = useState(useLocation().state.userName);
    // const [userAge, setUserAge] = useState(useLocation().state.userAge);

    return (
      <UserForm 
        h1Text={'상세페이지'}
        userName={userName}
        userAge={userAge}
        userId={userId}
        buttonText={'수정'}
      />
    );
  }

  export default UserShowDetail;