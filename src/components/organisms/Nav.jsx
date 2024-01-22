'use client';

import { NavLogo } from "@/components/atoms/nav/NavLogo";
import { NavList } from "@/components/molecules/NavList";
import { NavButton } from "@/components/atoms/nav/NavButton";
import { NavItemCell } from "@/components/atoms/nav/NavItemCell";
import { useState } from "react";
import { motion } from "framer-motion";


export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    {
      id: 'home',
      title: 'HOME',
      linkTo: '/'

    },
    {
      id: 'when-and-where',
      title: 'WHEN AND WHERE',
      linkTo: 'when-and-where'

    },
    {
      id: 'stay-nearby',
      title: 'STAY NEARBY',
      linkTo: 'stay-nearby'

    },
    {
      id: 'rsvp',
      title: 'RSVP',
      linkTo: 'rsvp'
    },
    {
      id: 'registry',
      title: 'REGISTRY',
      linkTo: 'https://www.honeyfund.com/site/oshita-vanbilliard-10-05-2024'
    },
  ];

  const variants = {
    open: { opacity: 1, x: 0, },
    closed: { opacity: 0, x: "-100%", },
  };
  
  return (
    <>
      <nav id="top-nav" className="flex items-center justify-between bg-white p-2 md:h-1/6">
        <div id="top-nav-logo-container">
          <NavLogo/>
        </div>
        <div id="top-nav-items-container">
          <NavButton isMenuOpen={isMenuOpen} onIsMenuOpen={setIsMenuOpen}/>
          <NavList navItems={navItems} />
        </div>
      </nav>
      {/* TODO: REFACTOR AND CLEANUP */}
      <motion.nav
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={variants}
        className={ isMenuOpen
          ? 'flex flex-col text-end w-full h-auto bg-white p-4'
          : 'hidden'
        }>
        {isMenuOpen && navItems.map((i) => {
          return (
            <NavItemCell key={i.id} {...i}/>
          );
        })}
      </motion.nav>
    </>
  );
};