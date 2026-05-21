/* src/components/AppBar.jsx
 */
// import React from 'react';
import Avatar from '../ui/Avatar.jsx';
import { ES_Logo } from '../../assets/Icons.jsx';
// import logoImg from '../../assets/imgs/es-logo.svg';
import { FaChevronDown } from 'react-icons/fa';

export default function AppBar({ children, ...props }) {
  return (
    <>
      <appbar className={`flex w-full h-[80px] bg-white `}>
        <nav className="flex w-full h-full items-center justify-between pr-[44px] pl-0">
          <logo>
            <ES_Logo />
          </logo>
          <main className="flex flex-col">
            <span className="font-poppins text-[#424242] text-[12px]">
              Cursando:
            </span>
            <h2 className="font-montserrat text-[#121212] text-[24px] font-[600] leading-none">
              Engenharia de Software
            </h2>
          </main>
          <profile className="flex h-full items-center gap-4">
            <picture className="flex flex-col items-center justify-center w-[40px] h-[40px] aspect-square">
              <Avatar img="../../../src/assets/imgs/ceo-avatar.png" />
            </picture>
            <name>
              <span className="font-inter text-[1rem] text-[#424242]">
                Anselmo Sammarco
              </span>
            </name>

            <FaChevronDown color="#2277ff" className="" />
          </profile>
        </nav>
      </appbar>
    </>
  );
}
