import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="bg-primary border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex gap-2">
                        <Link to="/" className="flex items-center">
                            <img
                                src="logoqv.png"
                                className="mt-1 h-24 w-24  rounded-full"
                                alt="Logo"
                            />
                        </Link>
                        <div className='text-white mt-8'>
                            <h1 className='font-bold text-xl'>Rise Above the Smoke</h1>
                            <h4>Ignite your Quit journey.</h4>
                        </div>
                    </div>

                    <div>
                        <div className=' mr-16 mt-6 md:mr-8 flex items-center justify-center w-full'>
                            <ul className="text-gray-500 font-medium flex justify-between items-center gap-8 ">
                                <li >
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-100" : "text-gray-500"}  
                                        transition-all duration-2000 hover:underline
                                        lg:hover:bg-transparent lg:border-0  lg:p-0 `
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-100" : "text-gray-500"}  
                                        transition-all duration-2000 hover:underline 
                                        lg:hover:bg-transparent lg:border-0  lg:p-0 `
                                        }
                                    >
                                        Login
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to="/signup"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-100" : "text-gray-500"}  
                                        transition-all duration-2000 hover:underline
                                        lg:hover:bg-transparent lg:border-0  lg:p-0 `
                                        }
                                    >
                                        Signup
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className=' mr-16 mt-6 md:mr-8 flex items-center justify-center w-full '>
                            <ul className="text-gray-500 font-medium flex justify-between items-center gap-8">
                                <li >
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-100" : "text-gray-500"}  
                                    transition-all duration-2000 hover:underline
                                    lg:hover:bg-transparent lg:border-0  lg:p-0 `
                                        }
                                    >
                                       About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/testimonials"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-100" : "text-gray-500"}  
                                        transition-all duration-2000 hover:underline
                                        lg:hover:bg-transparent lg:border-0  lg:p-0 `
                                        }
                                    >
                                        Testimonials
                                    </NavLink>
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="flex items-center justify-between flex-col-reverse gap-4 sm:flex-row">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024 Designed by ByteBusters
                    </span>

                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

                        <Link to="https://www.instagram.com/ietetsec/" className="text-white hover:text-gray-900 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0,0,256,256"
                                className="fill-current w-5 h-5"
                            >
                                <g fill="#ffffff" fill-rule="nonzero">
                                    <g transform="scale(10.66667,10.66667)">
                                        <path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.346,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path>
                                    </g>
                                </g>
                            </svg>
                            <span className="sr-only">Insta page</span>
                        </Link>

                        <Link to="https://www.linkedin.com/company/iete-tsec" className="text-white w-5 h-5 fill-current">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                            <span className="sr-only">LinkedIn page</span>
                        </Link>
                        <Link to="https://www.youtube.com/@iete-tsec" className="text-white w-5 h-5 fill-current">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" >
                                <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"></path>
                            </svg>
                            <span className="sr-only">Youtube</span>
                        </Link>
                        <Link to="mailto:test@ietetsec.in" className='w-5 h-5 fill-current text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path d="M384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.63 419.4 32 384 32zM384 336c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V225.9l138.5 69.27C209.3 298.5 216.6 300.2 224 300.2s14.75-1.688 21.47-5.047L384 225.9V336zM384 190.1l-152.8 76.42c-4.5 2.25-9.812 2.25-14.31 0L64 190.1V176c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32V190.1z" /></svg>
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}