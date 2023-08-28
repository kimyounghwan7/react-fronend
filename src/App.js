import React from 'react';
//import axios from 'axios'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

// custom component
import UsersList from './user/UsersList';
import UserRegister from "./user/UserRegister";
import UserShowDetail from "./user/UserShowDetail";

// 사용자 이미지 등록

// 사용자 이미지 조회

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={UsersList}/>
          <Route path='/register' Component={UserRegister}/>
          <Route path='/detail/:id' Component={UserShowDetail}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
