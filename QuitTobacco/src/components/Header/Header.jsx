import React from 'react'
import {Container,Logo,LogoutBtn}from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../../App.css'
import logo from './logoqv.png'

function Header() {
    const authStatus = useSelector((state) => {
        return state.auth.status
    })
    const navigate = useNavigate()
    
    const navItems = [
      {
        name:"Home",
        slug:"/",
        active:true,
        className:"rightcomp"
      },
      {
        name:"Login",
        slug:"/login",
        active: !authStatus,
        className:"rightcomp"
      },
      {
        name:"Signup",
        slug:"/signup",
        active: !authStatus,
        className:"rightcomp"
      },
      {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
        className:"rightcomp"
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
        className:"rightcomp"
    },
    {
        name: "Quit",
        slug: "/quiz",
        active: authStatus,
        className:"rightcomp"
    },
    ]

    return (
      <div>
         <div className='nav'>
            <div className='left'>
             <Link to={'/'}>
             <img src={logo} alt="" className="logo"/>
             </Link>
            </div>

            <div className='right'>
             {
                navItems.map((item) => 
                    item.active ? (
                      <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                    
                            <button
                            onClick={() => navigate(item.slug)}
                            className='navtext'>
                                {item.name}
                            </button>
                        </div>
                    ) : null
                 )

             }

             {authStatus ? 
             <div className='rightcomp'>
               <LogoutBtn className={"navtext"}/>
             </div> : null}

            </div>
            </div>
     
         </div>
    )
}

export default Header
