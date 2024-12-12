
import { GoHomeFill } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { TbBriefcaseFilled } from "react-icons/tb";


const BottomBar = ({isDark}:any) => {
  return (
    <div className="flex justify-left " >
        <div className={`${isDark}bg-neutral-800 text-white flex items-center fixed w-[75%] left-3 lg:hidden bottom-3 py-4 px-6 rounded-full backdrop-filter backdrop-blur-3xl bg-opacity-60 `}>
            <ul className="flex flex-row justify-between items-center w-full">
                <li className="bg-neutral-300 flex items-center p-3.5 rounded-full text-lg text-neutral-600"><GoHomeFill /></li>
                <li className="bg-neutral-300 flex items-center p-3.5 rounded-full text-lg text-neutral-600"><IoMdPerson /></li>
                <li className="bg-neutral-300 flex items-center p-3.5 rounded-full text-lg text-neutral-600"><FaTools /></li>
                <li className="bg-neutral-300 flex items-center p-3.5 rounded-full text-lg text-neutral-600"><TbBriefcaseFilled /></li>
            </ul>
        </div>
    </div>
  )
}

export default BottomBar