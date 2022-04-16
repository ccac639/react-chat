import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link,useNavigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {registerRoute} from '../../utils'
import Logo from '../../assets/logo.svg';
import './index.scss'

function Register() {
    const navigate=useNavigate()
    /*hooks*/
    const [Value, setValue] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
    })
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
        if (handleValidate()){
            const {password, username, email} = Value;
            const {data}=await axios.post(registerRoute,{
                username,
                email ,
                password
            })
            if (data.states === false){
                toast.error(data.msg,toastOptions);
            }
            if(data.states ===true){
                localStorage.setItem('chat-app-user',data.user._id)
                navigate('/')
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
        if (password != confirmPassword) {
            toast.error('两次密码不相同', toastOptions)
            return false
        }
        else if (username.length < 3) {
            toast.error('用户名长度不能小于3', toastOptions)
            return false
        }
        else if (password.length < 8) {
            toast.error('密码长度不能小于8', toastOptions)
            return false
        }
        else if(!email.includes('@')){
            toast.error('邮箱格式不正确', toastOptions)
            return false
        }
        else {0
            toast.success('注册成功', toastOptions)
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
                    <input type="text" placeholder="姓名" name='username' onChange={e => handleChange(e)}/>
                    <input type="Email" placeholder="邮箱" name='email' onChange={e => handleChange(e)}/>
                    <input type="password" placeholder="密码" name='password' onChange={e => handleChange(e)}/>
                    <input type="password" placeholder="确认密码" name='confirmPassword' onChange={e => handleChange(e)}/>
                    <button type='submit'>确认注册</button>
                    <span>已经有账户了<Link to='/login'>登录</Link></span>
                </form>
            </div>
            <ToastContainer/>
        </>
    );
}


export default Register;