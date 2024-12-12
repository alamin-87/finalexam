import React from 'react'
import './Login.css'
import { Link } from 'react-router'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


const Login = () => {
  return (
    <>
       <section className=' w-full'>
        <div className="container">
           <div className="login_row lg:flex justify-between items-center">
            <div className="login_col1 flex flex-col">
                <div className="col1_text">
                    <h2 className=' text-[28px] md:text-[32px] lg:text-black font-overpass font-[900] mb-[21px]'>WELCOME BACK!</h2>
                    <p className=' text-[16px] md:text-[22px] lg:text-black font-nunito font-[300]'>Don't have a account, <span className=' cursor-pointer text-blue-400'>Sign up</span></p>
                </div>
                <form className=' flex flex-col mt-[30px] md:mt-[40px] lg:mt-[64px]'>
                    <label className=' text-[16px] md:text-[18px] lg:text-[28px] text-black font-nunito font-[400] flex left-0 mb-[12px] lg:mb-[16px]'>Username</label>
                    <input className=' w-[300px] h-[40px] md:w-[500px] md:h-[60px] lg:w-[640px] lg:h-[81px] rounded-[80px] border-[2px] border-solid text-[12px] md:text-[18px] lg:text-[24px] text-black font-nunito font-[300] pl-5 outline-none' type="text" placeholder='deniel123@gmail.com' />
                    <label className='text-[16px] md:text-[18px]  lg:text-[28px] text-black font-nunito font-[400] flex left-0 mb-[12px] lg:mb-[16px] mt-[20px] lg:mt-[36px]'>Password</label>
                    <input className=' w-[300px] h-[40px] md:w-[500px] md:h-[60px] lg:w-[640px] lg:h-[81px] rounded-[80px] border-[2px] border-solid text-[12px] md:text-[18px] lg:text-[24px] text-black font-nunito font-[300] pl-5 outline-none mb-5' type="text"  placeholder='Enter your Password'/>
                    <div className=' flex justify-center items-center mb-[20px] md:mb-[26px] lg:mb-[35px]'>
                    <div className=' w-[22px] h-[22px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] rounded-full sm:text-lg lg:text-xl border-[2px] border-solid border-black flex items-center justify-center'>
                        <input className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]' type="checkbox" />
                    </div>
                    <p className=' text-[12px] md:text-[18px] lg:text-[20px] text-black font-nunito font-[300] ml-[4px] md:ml-[8px] lg:ml-[16px]'>Remember me</p>
                    <p className='text-[12px] md:text-[18px] lg:text-[20px] text-blue-500 font-nunito font-[300] ml-[100px] md:ml-[200px] lg:ml-[296px] cursor-pointer'>Forget password?</p>
                    </div>
                    <button className=' tex-[16px] md:text-[22px] lg:text-[28px] text-white font-nunito font-[900] py-[12px] px-[100px] md:py-[16px] md:px-[140px] lg:py-[24px] lg:px-[262px] bg-blue-500 rounded-[80px]' type='submit'>Sign In</button>
                </form>
                <div className="other_login mt-[30px] md:mt-[45] lg:mt-[58px]">
                <div className='flex items-center justify-center gap-1'>
                <span className=' w-[100px] md:w-[120px] lg:w-[240px] h-[1px] bg-blue-400 block'></span>
                <p className=' text-[12px] md:text-[18px] lg:text-[20px] text-black font-nunito font-[300]'>or continue with</p>
                <span className='w-[100px] md:w-[120px] lg:w-[240px] h-[1px] bg-blue-400 block'></span>
                </div>
             <div className=' flex gap-[20px] md:gap-[40px] lg:gap-[60px] justify-center mt-[31px]'>
                <button className='w-[60px] h-[30px] md:w-[80px] md:h-[50px] lg:w-[120px] lg:h-[80px] border-[2px] border-solid border-black rounded-[8px] flex justify-center items-center'>
                 <FaGoogle  className=' w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px]' />
                </button>
                <button className=' w-[60px] h-[30px] md:w-[80px] md:h-[50px]  lg:w-[120px] lg:h-[80px] border-[2px] border-solid border-black rounded-[8px] flex justify-center items-center'>
                <FaFacebook  className=' w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px]'/>
                </button>
                <button className=' w-[60px] h-[30px] md:w-[80px] md:h-[50px] lg:w-[120px] lg:h-[80px] border-[2px] border-solid border-black rounded-[8px] flex justify-center items-center'>
                <FaApple  className='  w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px]lg:h-[50px]'/>
                </button>
             </div>
                </div>
            </div>
            <div className="login_col2 mt-8 md:mt-14 lg:mt-0">
              <img src="img1.png" alt="img" />
            </div>
           </div>
        </div>
       </section>
       
    </>
  )
}

export default Login