// User Register component
import React from 'react';

import { Link } from 'react-router-dom';

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; 

import Form from "react-bootstrap/Form"; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import UserImageShow from './UserImageShow';

const UserForm = (props) => {
    return (
        <div className='UserForm mx-2 my-2'>
          <div className='my-2 mx-2'>
            <div>
                <Container className="panel">
                    <h1>사용자 {props.h1Text}</h1>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm>
                                {
                                    props.h1Text === '등록페이지' ? 
                                    <Form.Control type="text" name='userName' placeholder="성함" onChange={props.changeEvent} /> : 
                                    <Form.Control type="text" name='userName' placeholder="성함" value={props.userName} readOnly/>
                                }
                                <p>{props.nameError}</p>
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} className="mb-3">
                            <Col sm>
                                {
                                    props.h1Text === '등록페이지' ? 
                                    <Form.Control type="number" name='userAge' placeholder="나이" onChange={props.changeEvent} /> : 
                                    <Form.Control type="number" name='userAge' placeholder="나이" value={props.userAge} readOnly/>
                                }
                                <p>{props.ageError}</p>
                            </Col>
                        </Form.Group>
    
                        <div className="my-2">
                            {
                                props.h1Text === '등록페이지' ?
                                <label className='form-label'>이미지 등록</label> : 
                                <label className='form-label'>이미지 목록</label>
                            }
                            <br></br>
                            {
                                props.h1Text === '등록페이지' ?
                                <input 
                                type='file'
                                name='image_url'
                                className='form-control'
                                accept="image/jpeg,image/png,image/gif"
                                onChange={props.imageChangeEvent}
                                /> : 
                                <UserImageShow 
                                    userId={props.userId}
                                />
                            }
                        </div>
    
                        <div className="d-grid gap-1">
                            {
                                props.h1Text === '등록페이지' ? 
                                <Button variant="secondary" type="button" onClick={props.buttonEvent}>
                                    유저 {props.buttonText}
                                </Button> 
                                : 
                                <Button variant="secondary" type="button">
                                    유저 {props.buttonText}
                                </Button> 
                            }
                        </div>
                    </Form>
                </Container>
            </div>
          </div>
    
          <div className='my-2 mx-2'>
            <Link to='/'>
              <Button>목록</Button>
            </Link>
          </div>
        </div>
      ); // return end
}
export default UserForm;