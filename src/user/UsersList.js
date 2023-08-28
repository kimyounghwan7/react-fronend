// user list show component
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; 
import { Search } from "react-bootstrap-icons";

// 사용자 목록 조회
const UsersList = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [keyword, setKeyword] = useState('');

    const handleChange = (event) => {
      setKeyword(event.target.value);
    }

    // user list get axios 통신
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);

        console.log(keyword);

        if (!keyword || keyword.length <= 0) {
          const response = await axios.get(
            '/users/list/'
          );
          setUsers(response.data); 
        } else {
          const response = await axios.get(
            '/users/list/?keyword='+keyword
          );
          setUsers(response.data);
        }
      } catch (e) {
        setError(e);
      }
      setLoading(false);
      setKeyword('');
    }; // fetchUsers end
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    if (loading) return <div>로딩중..</div>; 
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
  
    return (
      <div className="UsersList mx-2 my-2">
        <div className="my-2 mx-2">
          <div className="input-group mb-3">
            <input type="text" onChange={handleChange} className="form-control" placeholder="Username Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={fetchUsers}><Search/></button>
            </div>
          </div>
        </div>
  
        <div className='my-2 mx-2'>
          <Link to='/register'>
            <Button variant='primary'>유저 등록</Button>
          </Link>
        </div>
  
        <div className="my-2 mx-2">
          {users.map(user => (
            <div key={user.id} className='card my-2 mx-2'>
              <div className='my-2 mx-2'>
                유저 이름: {user.user_name}
              </div>            
              <div className='my-2 mx-2'>
                유저 나이: {user.user_age}
              </div>
              <div className='my-2 mx-2'>
                <Link 
                  to={'/detail/'+user.id}
                  state={{
                    userName: user.user_name,
                    userAge: user.user_age
                  }}
                >
                  <Button variant='primary'>유저 상세</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
  
      </div>
    ); // return end
} // UsersList end


export default UsersList;