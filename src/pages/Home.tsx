import heroimage from '../assets/image.png'
import fade from '../assets/fade.png'
import {Button,  Button2, Button3 } from '../components/Button';
import { StackIcon } from '../components/StackIcons';
import { WorksData } from '../components/Works';
// import { Link } from 'react-router-dom';


const Home = ({isDark}:any) => {

    const about = '</AboutMe >'
    const skills = '</Skills >'

    const dark = 'bg-gradient-to-r from-stone-950 to-neutral-950 text-white '
    const light = 'bg-gradient-to-r from-white to-pink-50 text-black'

    const dark2 = 'bg-neutral-950 text-white'
    const light2 = 'bg-white text-neutral-900'

    const handleMail = () => {
        window.open('mailto:pbright103@gmail.com', '_blank')
    }

    
  return (
    <div>
        <section className={`flex relative overflow-hidden lg:pt-[20rem] pt-[13rem] 2xl:px-[20rem] xl:px-[10rem] lg:px-[8rem] px-5 ${isDark === true ? dark : light}  2xl:h-[95vh] `}>
            <div className='w-full' data-aos="fade-up" data-aos-duration="1000">
                <p className='special'>Hello👋; </p>
                <h2 className='special 2xl:text-6xl xl:text-4xl lg:text-3xl text-2xl font-bold lg:py-5 py-3'>I'm Bright Philip</h2>
                <h2 className=' 2xl:text-6xl xl:text-4xl lg:text-3xl text-4xl lg:pt-3 pt-0 font-extrabold bg-gradient-to-l from-yellow-200 to-pink-400 bg-clip-text text-transparent'>I Build for Web & Mobile.</h2>
                <p className='lg:w-[65%] w-full pt-6 2xl:text-lg xl:text-base lg:text-sm text-sm  font-light leading-[30px]'>
                    I build, reusable components, design intuitive user interfaces, 
                    and develop scalable web and mobile apps. Inlove 😊 with TypeScript and 
                    TanStack Query.
                </p>
                <Button title='Lets Chat' action={handleMail}/>
            </div>
            
            <div>
                <img className='absolute right-[-45rem] bottom-[-17rem] w-[120%]' src={fade} alt="" />
            </div>
        </section>

        
        
        <section className={`lg:flex lg:flex-row flex flex-col-reverse lg:py-[10rem] py-[5rem] items-center text-base 2xl:px-[20rem] xl:px-[10rem] lg:px-[8rem] px-5 w-full lg:gap-[5rem] gap-[3rem] ${isDark === true ? dark2 : light2} `}>
            <div className='w-[full]' data-aos="fade-up" data-aos-duration="1000">
                <p className='special text-2xl bg-gradient-to-r from-orange-300 to-pink-600 bg-clip-text text-transparent'>{about}</p>
                <p className='lg:w-[80%] 2xl:text-lg xl:text-base lg:text-sm text-sm  w-full font-light text-left mt-10 leading-[1.8rem]'>
                    Hi, I'm Bright Philip A passionate Software Developer specializing in building 
                    reusable components, designing intuitive user interfaces, and developing scalable web 
                    and mobile applications. <br /><br />

                    I’m deeply in love with (TypeScript) and (TanStack Query), 
                    and I thrive on crafting seamless user experiences with modern technologies e.g
                    React JS, React Native, Next.js, TypeScript, Python and More.
                    Let’s create something extraordinary! 🌟
                </p>
                <Button2 title='Resume' action={handleMail}/>
            </div>

            <div className='w-[90%] ml-auto' data-aos="fade-up" data-aos-duration="1000">
                <img className='w-full' src={heroimage} alt="" />
            </div>
        </section>


        <section className={` lg:py-[10rem] py-[5rem] 2xl:px-[20rem] xl:px-[10rem] lg:px-[8rem] px-5 ${isDark === true ? dark : light2}`}>
            <p className='special text-center text-2xl bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text text-transparent'>{skills}</p>
            <div className='flex flex-wrap gap-8 items-center justify-center pt-14'>
                {StackIcon.map((stack) =>(
                    <div data-aos="fade-up" data-aos-duration="1000" className='flex-col justify-center'>
                        <div className={`${isDark === true ? 'bg-neutral-800 text-white border border-neutral-700' : 'bg-neutral-100 border border-neutral-200 text-neutral-950'} rounded-full `}>
                            <div className='flex-col gap-2 items-center '>
                                <p className='text-center 2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl 2xl:p-8 xl:p-5 lg:p-5 md:p-4 text-5xl p-6'>{stack.icon}</p>
                            </div>
                        </div>
                        <p className='text-xs m-auto flex justify-center pt-4'>{stack.name}</p>
                    </div>
                ))}
            </div>
        </section>


        <section className={` lg:py-[7rem] py-[5rem] 2xl:px-[20rem] xl:px-[10rem] lg:px-[8rem] px-5 ${isDark === true ? dark : light2}`}>
            <p className='special text-2xl bg-gradient-to-r from-orange-300 to-pink-600 bg-clip-text text-transparent'>{'</Projects >'}</p>
            
            <div className='grid lg:grid-cols-2 gap-6  grid-cols-1 items-center mt-10'>
                {WorksData.map((data, index)=>(
                    <div data-aos="fade-up" data-aos-duration="1000" key={index} className={`${isDark === true ? 'bg-neutral-800 border border-neutral-700 text-white' : 'bg-neutral-100  text-neutral-800'} p-3 rounded-2xl`}>
                        <div className='overflow-hidden rounded-xl bg-white'>
                            <img src={data.image} alt=""  className='w-full h-full object-cover'/>
                        </div>

                        <div className='pt-8 pb-5'>
                            <div className='flex items-center'>
                                <h2>{data.name}</h2>
                                <a href={data.url} className='ml-auto'>
                                    <Button3 title='View Product' />
                                </a>
                            </div>
                            <p className='text-neutral-400 py-3 text-sm'>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Home