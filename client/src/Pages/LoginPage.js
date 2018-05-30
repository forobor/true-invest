import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Loader from '../Shared/Atoms/Loader';
import { fetchAdminAuth } from '../redux/reducers/login_reducer'
import { colors, fonts } from "../styles/theme";



const LoginPageWrap = styled.div`
    margin: 25px;
    background-color: ${colors.white};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    min-width: 200px;
    font-family: "Alice", serif;
    
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
`
const Button = styled.button`
    border: 4px solid ${colors.blue_trans};
    width: 100px;
    height: 40px;
    background: none;
    cursor: pointer;
    font-family: "Forum", serif;    
`
const Input = styled.input`
    height: 25px;
    border: none;
    border-bottom: 1px solid ${colors.light_gray};
    padding: 0 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    &:hover,
    &:focus,
    &:active {
        border-bottom: 4px solid ${colors.blue_trans};
    }
`

const Title = styled.h1``

class LoginPage extends React.Component {

    state = {
        login: '',
        password: ''
    }

    handleSubmit = (event) => {
        const { login, password } = this.state
        this.props.fetchAdminAuth({
            login,
            password
        })
    }

    handleChange = (value, type) => {
        this.setState({[type]: value})
    }

    render() {
        const { isLoading, isLogged } = this.props;
        if (isLoading) {
            return <Loader />;
        }
        if (isLogged) {
           return <Redirect to="/dashboard"/>
        }
        if (!isLogged) {
            return (
                <LoginPageWrap>
                    <Form>
                        <Title>Sign in</Title>
                        {isLogged === false &&
                            <div>WRONG LOGIN OR PASSWORD</div>
                        }
                        <label>Login: <br />
                            <Input onChange={(event) => {this.handleChange(event.target.value,'login')}} />
                        </label>
                        <label>Password: <br />
                            <Input type="password" onChange={(event) => 
                                {this.handleChange(event.target.value, 'password')}
                            }/>
                        </label>
                    </Form>
                    <Button onClick={(event) => {this.handleSubmit(event)}}>Enter</Button>
                </LoginPageWrap>
            )
        }
    }
}

export default connect(
    ({adminAuth}) => ({
        isLoading: adminAuth.isLoading,
        isLogged: adminAuth.isLogged
    }),
    { fetchAdminAuth }
)(LoginPage);