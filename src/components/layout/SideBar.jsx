/* src/components/layout/SideBar.jsx
 */
import { useState, useEffect } from 'react';
import {
  MenuIcon,
  HomeIcon,
  BookIcon,
  ArchiveIcon,
  BooksIcon,
  RocketIcon,
  HelpIcon,
} from '../../assets/Icons.jsx';
import SideBarItem from '../SideBarItem.jsx';

export default function SideBar({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <HomeIcon />, label: 'Início' },
    { icon: <BookIcon />, label: 'Meu curso' },
    { icon: <ArchiveIcon />, label: 'Secretaria digital' },
    { icon: <RocketIcon />, label: 'Minha carreira' },
    { icon: <BooksIcon />, label: 'Biblioteca' },
    { icon: <HelpIcon />, label: 'Ajuda' },
  ];

  return (
    <>
      <sidebar
        className={`flex flex-col fixed top-0 left-0 transition-all duration-300 ease w-[${isOpen ? '280px' : '71px'}] h-[100dvh] bg-white border-r-[1px] border-r-[#44444429]`}
      >
        <header className="flex flex-col w-full h-[61px] p-2 items-center justify-center border-b-[1px] border-b-[#44444429]">
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MenuIcon />
          </span>
        </header>
        <main className="flex flex-col gap-[5px] items-center pt-4">
          {menuItems.map((item) => (
            <SideBarItem icon={item.icon} isOpen={isOpen}>
              {item.label}
            </SideBarItem>
          ))}
        </main>
      </sidebar>
    </>
  );
}
