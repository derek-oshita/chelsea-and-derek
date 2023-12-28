'use client';

import { NavLogo } from "@/components/atoms/nav/NavLogo";
import { NavList } from "@/components/molecules/NavList";
import { NavButton } from "@/components/atoms/nav/NavButton";
import { useState } from "react";
import { NavItemCell } from "@/components/atoms/nav/NavItemCell";

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
      id: 'rsvp',
      title: 'RSVP',
      linkTo: 'rsvp'
    },
  ];
  
  return (
    <>
      <nav id="top-nav" className="flex items-center justify-between bg-white p-2 md:h-1/6">
        <NavLogo/>
        <NavButton isMenuOpen={isMenuOpen} onIsMenuOpen={setIsMenuOpen}/>
        <NavList navItems={navItems} />
      </nav>
      {/* TODO: REFACTOR AND CLEANUP */}
      <div className={`${isMenuOpen 
        ? 'flex flex-col text-end w-full h-auto bg-white p-4 transition ease-in duration-300' 
        : 'h-0 transition-all ease-out duration-300'}`
      }>
        {isMenuOpen && navItems.map((i) => {
          return (
            <NavItemCell key={i.id} {...i}/>
          );
        })}
      </div>
    </>
  );
};