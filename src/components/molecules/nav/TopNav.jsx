'use client';

import { TopNavLogo } from "@/components/atoms/TopNavLogo";
import { TopNavList } from "@/components/molecules/nav/TopNavList";
import { TopNavButton } from "@/components/atoms/TopNavButton";
import { useState } from "react";
import NavItemCell from "@/components/atoms/NavItemCell";

export const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
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
  ];
  return (
    <>
      <nav id="top-nav" className="flex items-center justify-between bg-white p-2">
        <TopNavLogo/>
        <TopNavButton isMenuOpen={isMenuOpen} onIsMenuOpen={setIsMenuOpen}/>
        <TopNavList />
      </nav>
      { isMenuOpen && (
        <div className={`flex flex-col text-end w-full bg-white p-4 ease-in-out duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navItems.map((i) => {
            return (
              <NavItemCell key={i.id} {...i}/>
            );
          })}
        </div>
      )}
    </>
  );
};