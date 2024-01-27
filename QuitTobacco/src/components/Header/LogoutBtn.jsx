import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import '../../App.css'

function LogoutBtn({className}) {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
    return (
     <button className={` ${className}`}
     onClick={logoutHandler}>LogOut</button>
    )
}

export default LogoutBtn
