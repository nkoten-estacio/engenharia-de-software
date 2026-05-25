// src/components/Lobby.js

/**
 * --- default
 */
export default function Lobby({ children, ...props }) {
  return (
    <lobby className="flex flex-col w-full h-[100dvh] bg-[#f5f5f5] text-slate-600 hover:text-indigo-600">
      {children}
    </lobby>
  );
}
