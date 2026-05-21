// src/components/layout/SavaApp.jsx

export default function SavaApp({ children, ...props }) {
  return (
    <main className="bg-slate-800 flex flex-col w-[calc(100%_-_72px)] ml-[71px]">
      {children}
    </main>
  );
}
