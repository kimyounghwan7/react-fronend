// User Register component
import React, { useState } from 'react';
import axios from 'axios'

import { useNavigate} from 'react-router-dom';

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './UserForm';
import userRegisterValidation from './UserRegValidation';
import useUserValidation from '../hooks/useUserValidation';

// 사용자 등록
const UserRegister = () => {

  const [imageFileData, setImageFileData] = useState({});

  const handleImageChange = (event) => {
    let newData = {...imageFileData};
    newData['image_url'] = event.target.files[0];
    setImageFileData(newData);
  }

  // router 전환을 위한 navigate
  const navigate = useNavigate();

  // axios 통신을 위한 함수
  const userRegisterAxios = async () => {
    const userData = {
      user_name: userValues.userName,
      user_age: userValues.userAge
    };

    // 유저 등록
    await axios.post(
        '/users/register/',
        userData
    ).then(function(response) {
        // 유저 등록후 이미지 등록
        console.log(response.data.id);

        console.log(userValues.image_url);

        if (!imageFileData.image_url) {
          console.log('not file');
          return;
        }

        const userImageFormData = new FormData();

        console.log(imageFileData.image_url);

        userImageFormData.append('user', response.data.id);
        userImageFormData.append('image_url', imageFileData.image_url, imageFileData.image_url.name)

        axios.post(
          '/users/upload/',
          userImageFormData, {
            headers: {
              'Content-Type': 'mutipart/form-data'
            }
          }
        ) // axios post end
        console.log('file!');
      });

      // 목록으로
      navigate('/');
    }; // userRegisterAxios end

    // custom hook define
    const {
      userValues,
      userValuesError,
      handleUserValuesChange,
      handleSubmit
    } = useUserValidation({
        initialValues: {
          userName: '',
          userAge: '',
        },
        onSubmit: userRegisterAxios,
        validate: userRegisterValidation
    }); // useUserValidation end

    return (
      <UserForm 
        h1Text={'등록페이지'}
        buttonEvent={handleSubmit}
        changeEvent={handleUserValuesChange}
        imageChangeEvent={handleImageChange}
        nameError={userValuesError.userName}
        ageError={userValuesError.userAge}
        buttonText={'등록'}
      />
    ); // return end
} // UserRegister end

export default UserRegister;