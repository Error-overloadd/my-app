'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import path from 'path';

const navLinks = [
  {title: 'About', path: '/about'},
  {title: 'Skill', path: '/skill'},
  {title: 'Portfolio', path: '/portfolio'},
  {title: 'Conect', path: '/conect'},
];


const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
  setIsOpen(!isOpen);
};
const closeMenu = () => {
  setIsOpen(false);
};
  return <>
     <div className= "text-white pt-6">
        <div className = "hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px] justify-between">
            <ul>
                {navLinks.map((link,index)=>(
                    <li key={index}>
                        <Link href={link.path} onClick={closeMenu}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
     </div>
    </>;
};

export default Navbar;
