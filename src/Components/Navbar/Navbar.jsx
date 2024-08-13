import React from 'react'
import { MdMenu } from 'react-icons/md'
import { motion } from 'framer-motion'
import { BiCart, BiSearch } from 'react-icons/bi'

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "Men",
        link: "#",
    },
    {
        id: 3,
        title: "Women",
        link: "#",
    },
]

const Navbar = () => {
  return (
    <>  
        <div className=' text-white py-8 '>
            <motion.nav
            initial= {{ opacity: 0}}
            animate= {{opacity: 1}}
            transition={{duration: 1, delay: 0.5}}
            className='container flex justify-between items-center'
            >
            {/* logo section */}
                <div>
                    <a href="#" className='text-xl font-bold uppercase'>Shoe Central</a>
                </div>
            {/* menu section */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 '>
                        {
                            NavbarMenu.map((item) => (
                                <li key={item.id}>
                                    <a href={item.link} className='inline-block text-sm py-2 px-2 uppercase hover:text-black'>{item.title}</a>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
                {/* Nav icons */}
                <div className='flex gap-4'>
                    <BiSearch className='text-3xl'/>
                    <BiCart  className='text-3xl'/>
                </div >
                {/* mobile hambuger section */}
                <div className='md:hidden'>
                    <MdMenu className='text-4xl'/>
                </div>
            </motion.nav>
            </div>
    </> 
    
  )
}

export default Navbar