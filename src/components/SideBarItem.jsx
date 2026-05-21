/* src/components/SideBarItem.jsx
 */
import { useState } from 'react';

export default function SideBarItem({ icon, isOpen, children }) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <sidebar-item className="flex flex-col px-[8px] w-full">
        <content
          className={`flex items-center gap-0 rounded-[8px] hover:bg-slate-200 active:bg-[#27f7]`}
        >
          {icon && (
            <i className="flex flex-col items-center justify-center w-[55px] h-[55px]">
              {icon}
            </i>
          )}
          {isOpen && (
            <span
              className={`overflow-hidden whitespace-nowrap
            transition-all duration-300 ease ${isOpen ? 'opacity-100' : 'opacity-0'} text-[#181818]`}
            >
              {children}
            </span>
          )}
        </content>
      </sidebar-item>
    </>
  );
}
