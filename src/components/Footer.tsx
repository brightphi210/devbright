import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Footer = ({isDark}:any) => {

  const dark2 = 'text-white bg-gradient-to-b from-neutral-900 to-black'
  const light2 = 'bg-white text-neutral-900'


  return (
    <div className={` lg:py-[10rem] py-[5rem] pb-[10rem] lg:px-[25rem] px-5 ${isDark === true ? dark2 : light2}`}>
      <h2 className='special text-xl text-center  flex items-center gap-4 m-auto justify-center'>
        Breathing, Building, and Brainstorming.
      </h2>

      <p className="text-center text-sm pt-10 text-neutral-400">Get in touch</p>
      <ul className="lg:w-full w-[90%] px-5 m-auto justify-center flex items-center gap-10 mt-10">
        <li className="flex rounded-full lg:p-5 p-3 lg:text-xl text-base bg-none border border-neutral-400"><FaLinkedin /></li>
        <li className="flex rounded-full lg:p-5 p-3 lg:text-xl text-base bg-none border border-neutral-400"><FaXTwitter /></li>
        <li className="flex rounded-full lg:p-5 p-3 lg:text-xl text-base bg-none border border-neutral-400"><RiTelegram2Line /></li>
        <li className="flex rounded-full lg:p-5 p-3 lg:text-xl text-base bg-none border border-neutral-400"><FaGithub /></li>
      </ul>
    </div>
  )
}

export default Footer