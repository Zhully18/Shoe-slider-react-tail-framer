import React, { useState } from 'react'
import shoe1 from '../../assets/shoe1.png'
import shoe2 from '../../assets/shoe2.png'
import shoe3 from '../../assets/shoe3.png'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'

const slideIn = (delay) => {
    return {
        hidden :{
            opacity : 0,
            y: -100, 
            scale: 0.5,
        },
        show: {
            opacity:1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: -50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            }
        }
    }
}

const shoe_list = [
    {
        id: 1,
        image: shoe1,
        title: "Centos Black Classic",
        price: "$175",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis ullam expedita ipsa qui sed quidem, debitis porro distinctio quia omnis iusto necessitatibus voluptatum asperiores at nesciunt odio repudiandae optio!",
        name: "Centos Black",
        bgColor: "#ffaa33",
    },
    {
        id: 2,
        image: shoe2,
        title: "Futuristics Blue Sneakers",
        price: "$175",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis ullam expedita ipsa qui sed quidem, debitis porro distinctio quia omnis iusto necessitatibus voluptatum asperiores at nesciunt odio repudiandae optio!",
        name: "Futuristics Blue",
        bgColor: "#1434a4",
    },
    {
        id: 3,
        image: shoe3,
        title: "Futuristic Pink Sneakers",
        price: "$175",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis ullam expedita ipsa qui sed quidem, debitis porro distinctio quia omnis iusto necessitatibus voluptatum asperiores at nesciunt odio repudiandae optio!",
        name: "Futuristic Pink",
        bgColor: "#de3163",
    },
]

const Hero = () => {
    const [activeData, setActiveData] = useState(shoe_list[0]);

    const handleActiveData = (data) => {
        setActiveData(data);
    }
  return (
    <div>
        <section style={{ backgroundColor: activeData.bgColor}} className=' text-white ' >
            <Navbar />
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                {/* Brand Info */}
                <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                    <div className='space-y-5 text-center md:text-left'>
                        {/* Animate H1 tag */}
                        <AnimatePresence mode='wait'>
                            <motion.h1
                            key={activeData.id}
                            variants={slideIn(0.2)}
                            initial= "hidden"
                            animate= "show"
                            exit= "exit"
                            className='text-3xl lg:text-7xl font-bold'>{activeData.title}</motion.h1>
                        </AnimatePresence>
                        <p className='text-sm leading-loose text-white/80'>{activeData.subtitle} </p>
                        <button className='px-8 py-4 inline-block font-normal rounded-full bg-black'>Order Now</button>

                        
                        {/* Headphones list swithers */}
                        <div className='grid grid-cols-3 gap-10'>
                            {shoe_list.map((item) => {
                                return(
                                    <div key={item.id} onClick={() => handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer  backdrop-saturate-200 w-[170px] h-[95px] '>
                                        <div>
                                            <img src={item.image} alt="" className='w-[200px]'/>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className='text-base font-bold'>{item.price} </p>
                                            <p className='text-xs font-normal text-nowrap'>{item.name} </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* Hero Image */}
                <div className='flex flex-col justify-center items-center'>
                    <AnimatePresence mode='wait'>
                        <motion.img
                        key={activeData.id}
                        initial= { {opacity:0, scale: 0.9, x:100, rotate: 180}}
                        animate= {{opacity: 1, scale: 1, x: 0, rotate: 0}}
                        transition={{duration: 0.4, delay: 0.2, ease: easeInOut}}
                        exit={ 
                            {
                                opacity: 0,
                                scale: 0.9,
                                x:100,

                                transition: {
                                    duration: 0.2,
                                }
                            }
                        }
                        src={activeData.image} alt=""className='w-[300px] md:w-[400px] xl:w-[550px]'/>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero