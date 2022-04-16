import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {loginRoute} from '../../utils';
import Logo from '../../assets/logo.svg';
import './index.scss'

function Login() {
    const navigate = useNavigate()
    /*hooks*/
    const [Value, setValue] = useState({
        username: '',
        password: '',
    })
    useEffect(() => {
            if (localStorage.getItem('chat-app-user')) {
                navigate('/')
            }
        }, []
    )
    /*密码不相同后的报错*/
    const toastOptions = {
        position: 'bottom-right',
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark'
    }
    /*提交输入内容*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidate()) {
            const {password, username,} = Value;
            const {data} = await axios.post(loginRoute, {
                username,
                password
            })
            if (data.states === false) {
                toast.error(data.msg, toastOptions);
            }

        }
    }
    /*获取输入框输入内容*/
    const handleChange = (e) => {
        let {name, value} = e.target;
        setValue({...Value, [name]: value})
    }
    /*对输入的内容进行判断*/
    const handleValidate = (e) => {
        const {password, username, email, confirmPassword} = Value;
        if (password === '') {
            toast.error('密码禁止为空', toastOptions)
            return false
        }
        else if (username.length === '') {
            toast.error('用户名禁止为空', toastOptions)
            return false
        }
        else if (!localStorage.getItem('chat-app-user')) {
            toast.error('请注册用户', toastOptions)
            return false
        }
        else {
            toast.success('登录成功', toastOptions)
            return true
        }
    }
    return (
        <>
            <div className='login-form'>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src={Logo} alt=""/>
                        <h1>snapp</h1>
                    </div>
                    <input type="text" placeholder="账户名" name='username' onChange={e => handleChange(e)} min='3'/>
                    <input type="password" placeholder="密码" name='password' onChange={e => handleChange(e)}/>
                    <button type='submit'>确认注册</button>
                    <span>还没有账户？<Link to='/register'>注册</Link></span>
                </form>
            </div>
            <ToastContainer/>
        </>
    );
}


export default Login;