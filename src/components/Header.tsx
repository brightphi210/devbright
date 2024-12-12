
import logo from '../assets/logo1.png'
import logoa from '../assets/logo.png'
import { LuSunDim } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";


const Header = ({isDark, setIsDark, isNavOpen, setIsNavOpen, handleLinkClick}:any) => {

    const handleDark = () => {
        setIsDark(!isDark)
    }


    const handleShowNavbar = () => {
        setIsNavOpen(!isNavOpen)
    }



    
  return (
    <div className={`flex justify-center relative z-50 ${isDark === true ? 'text-white' : 'text-black'} `}>
        <div className={`${isDark === true ? 'bg-neutral-800 ': 'bg-white border border-neutral-200'} flex items-center fixed lg:w-[80%] w-[90%] lg:top-10 top-8 lg:py-4 py-3 lg:px-10 px-5 rounded-full backdrop-filter backdrop-blur-3xl bg-opacity-60 `}>
            <div className='block'>
                {isDark === true ?
                    <img src={logo} className='w-20' alt="" /> :
                    <img src={logoa} className='w-20' alt="" />
                }
            </div>

            <ul className='hidden lg:flex items-center gap-10 text-sm ml-auto'>
                <li className='cursor-pointer' onClick={() => handleLinkClick("home")}>Home</li>
                <li className='cursor-pointer' onClick={() => handleLinkClick("about")}>About</li>
                <li className='cursor-pointer' onClick={() => handleLinkClick("skills")}>Skills</li>
                <li className='cursor-pointer' onClick={() => handleLinkClick("projects")}>Projects</li>
                <div className='flex gap-10' onClick={handleDark}>
                    {isDark === true ? 
                        <p className={`${isDark === true ? 'bg-orange-100 text-neutral-900' : 'bg-orange-300 text-white'} cursor-pointer flex rounded-full p-2 text-lg`}><LuSunDim /></p> :
                        <p className={`${isDark === true ? 'bg-orange-100 text-neutral-900' : 'bg-orange-300 text-white'} cursor-pointer flex rounded-full p-2 text-base`}><IoMdMoon /></p>
                    }
                </div>
            </ul>

            <div className='lg:hidden flex items-center gap-3 ml-auto'>
                <div className='flex gap-10' onClick={handleDark}>
                    {isDark === true ? 
                        <p className={`${isDark === true ? 'bg-orange-100 text-neutral-900' : 'bg-neutral-10 text-neutral-900 border border-neutral-200'} cursor-pointer flex rounded-full p-2.5 text-lg`}><LuSunDim /></p> :
                        <p className={`${isDark === true ? 'bg-orange-100 text-neutral-900' : 'bg-neutral-10 text-neutral-900 border border-neutral-200'} cursor-pointer flex rounded-full p-2.5 text-lg`}><IoMdMoon /></p>
                    }
                </div>
                <p className={`text-lg flex items-center ${isDark === true ? 'bg-neutral-800 text-white' : 'bg-neutral-800 text-white'}  rounded-full p-2.5`} 
                    onClick={handleShowNavbar}><RiMenu3Fill />
                </p>
            </div>
        </div>

        {isNavOpen === true && 
                <div className={`lg:hidden block fixed ${isDark === true ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'} left-0 top-0 p-10 pt-14  w-full h-screen`}>
                    <ul className='flex-col items-center text-base ml-auto'>
                        <li className='cursor-pointer mb-8' onClick={() => handleLinkClick("home")}>Home</li>
                        <li className='cursor-pointer mb-8' onClick={() => handleLinkClick("about")}>About</li>
                        <li className='cursor-pointer mb-8' onClick={() => handleLinkClick("skills")}>Skills</li>
                        <li className='cursor-pointer mb-8' onClick={() => handleLinkClick("projects")}>Projects</li>
                    </ul>
                    
                    <p onClick={handleShowNavbar} className={`absolute top-10 right-10 text-lg flex items-center 
                        ${isDark === true ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-neutral-800'}  rounded-full p-2.5`}>
                        <IoCloseSharp />
                    </p>
                </div>
            }
        
    </div>
  )
}

export default Header