import { NavLink } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";


const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="relative">
                <div className="container">
                    <div className="header-row flex items-center justify-between pt-7 pb-7 md:pt-[45px] md:pb-[45px] lg:pt-[62px] lg:pb-[60px]">
                        <div className="main-logo">
                            <a href="#">
                                <img src="https://i.ibb.co/1fxtKByv/BookVibe.png" alt="" />
                            </a>
                        </div>
                        <div className="navbarr hidden lg:block">
                            <NavLink to='/' className={({isActive}) => `py-[10px] px-[17px] border rounded-lg ${
                                isActive
                                    ? 'text-[#23BE0A] border-[#23BE0A]'
                                    : 'text-[rgba(19,19,19,0.80)] border-transparent'
                            }`}>Home</NavLink>

                            <NavLink to='/dashboard' className={({isActive}) => `py-[10px] px-[17px] border rounded-lg ${
                                isActive
                                    ? 'text-[#23BE0A] border-[#23BE0A]'
                                    : 'text-[rgba(19,19,19,0.80)] border-transparent'
                            }`}>Listed Books</NavLink>

                            <NavLink to='/readgraph' className={({isActive}) => `py-[10px] px-[17px] border rounded-lg ${
                                isActive
                                    ? 'text-[#23BE0A] border-[#23BE0A]'
                                    : 'text-[rgba(19,19,19,0.80)] border-transparent'
                            }`}>Pages to Read</NavLink>

                        </div>
                        <div className="header-btns">
                            <ul className="flex items-center gap-x-4">
                                <li className="hidden md:block">
                                    <a href="#" className="text-[18px] font-semibold md:py-[10px] lg:py-[18px] md:px-[20px] lg:px-[28px] bg-[#23BE0A] text-white rounded-lg">Sign In</a>
                                </li>
                                <li className="hidden md:block">
                                    <a href="#" className="text-[18px] font-semibold md:py-[10px] lg:py-[18px] md:px-[20px] lg:px-[28px] bg-[#59C6D2] text-white rounded-lg">Sign Up</a>
                                </li>
                                <li
                                    id="menu-icon"
                                    className="menu-icon lg:hidden"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    {
                                        mobileMenuOpen === false ? <VscMenu className="text-4xl cursor-pointer"/>
                                        : <HiOutlineXMark className="text-4xl cursor-pointer"/>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <aside id="sideBar" className={`w-80 h-[100vh] p-5 bg-white shadow absolute  duration-200 z-10 top-0 
                    ${
                        mobileMenuOpen === false ? '-left-80' : 'left-0'
                    } 
                `}>

                    <div className="asideheader">
                        <a href="#">
                            <img src="https://i.ibb.co/1fxtKByv/BookVibe.png" alt="" />
                        </a>
                    </div>
                    <div className="aside-items flex flex-col gap-y-3 pt-7">
                        <NavLink to='/' className={({isActive}) => `${
                                isActive
                                    ? 'text-[#23BE0A]'
                                    : 'text-[rgba(19,19,19,0.80)]'
                            }`}>Home</NavLink>

                            <NavLink to='/dashboard' className={({isActive}) => `${
                                isActive
                                    ? 'text-[#23BE0A]'
                                    : 'text-[rgba(19,19,19,0.80)]'
                            }`}>Listed Books</NavLink>

                            <NavLink to='/readgraph' className={({isActive}) => `${
                                isActive
                                    ? 'text-[#23BE0A]'
                                    : 'text-[rgba(19,19,19,0.80)]'
                            }`}>Pages to Read</NavLink>
                    </div>
                    
                </aside>
            </div>
            
        </>
    );
};

export default NavBar;