

// App.jsx
import React from "react";
import { createRoot } from "react-dom/client";

function LoadingSol() {
   return( <>
      <section className="flex gap-[10%] bg-[#992277] rounded-full w-[50px] h-[50px]">
         <section className="bg-white width-[20%]"></section>
         <section className="bg-white width-[20%]"></section>
         <section className="bg-white width-[20%]"></section>
      </section>
   </> );
}

function BasicAnimations() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      {/* Animação de Spin */}
      <div className="flex items-center space-x-2">
        <div className="w-16 h-16 aspect-square border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        <p>animate-spin</p>
      </div>

      {/* Animação de Ping */}
      <div className="flex items-center space-x-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <p>animate-ping</p>
      </div>

      {/* Animação de Pulse */}
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
        <p className="text-center mt-2">animate-pulse</p>
      </div>


      {/* Animação de Bounce */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
        <p>animate-bounce</p>
      </div>
    </div>
  );
}

function App() {
   return( <>
      <section>
         <article>here</article>
      </section>
      <section>
         <section>here</section>
      </section>
      <main className="flex items-center justify-center h-full bg-blue-200 text-4xl">
         <spin className="bg-purple-300 w-8 h-8 animate-spin rounded-md"></spin>
         <section className="flex w-full bg-orange-100">
            <LoadingSol />
            <loading-star className="flex items-center w-[50px] h-[50px]" animate-spin>
               <svg animate-spin xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" class="loader" width="24.000em" height="25.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.76758C12.4142 1.76758 12.75 2.10336 12.75 2.51758V6.51758C12.75 6.93179 12.4142 7.26758 12 7.26758C11.5858 7.26758 11.25 6.93179 11.25 6.51758V2.51758C11.25 2.10336 11.5858 1.76758 12 1.76758ZM4.39967 4.91725C4.69256 4.62435 5.16744 4.62435 5.46033 4.91725L8.29033 7.74725C8.58322 8.04014 8.58322 8.51502 8.29033 8.80791C7.99744 9.1008 7.52256 9.1008 7.22967 8.80791L4.39967 5.97791C4.10678 5.68501 4.10678 5.21014 4.39967 4.91725ZM19.6003 4.91725C19.8932 5.21014 19.8932 5.68501 19.6003 5.97791L16.7703 8.80791C16.4774 9.1008 16.0026 9.1008 15.7097 8.80791C15.4168 8.51502 15.4168 8.04014 15.7097 7.74725L18.5397 4.91725C18.8326 4.62435 19.3074 4.62435 19.6003 4.91725ZM1.25 12.5176C1.25 12.1034 1.58579 11.7676 2 11.7676H6C6.41421 11.7676 6.75 12.1034 6.75 12.5176C6.75 12.9318 6.41421 13.2676 6 13.2676H2C1.58579 13.2676 1.25 12.9318 1.25 12.5176ZM17.25 12.5176C17.25 12.1034 17.5858 11.7676 18 11.7676H22C22.4142 11.7676 22.75 12.1034 22.75 12.5176C22.75 12.9318 22.4142 13.2676 22 13.2676H18C17.5858 13.2676 17.25 12.9318 17.25 12.5176ZM8.29033 16.2272C8.58322 16.5201 8.58322 16.995 8.29033 17.2879L5.46033 20.1179C5.16744 20.4108 4.69256 20.4108 4.39967 20.1179C4.10678 19.825 4.10678 19.3501 4.39967 19.0572L7.22967 16.2272C7.52256 15.9344 7.99744 15.9344 8.29033 16.2272ZM15.7097 16.2272C16.0026 15.9344 16.4774 15.9344 16.7703 16.2272L19.6003 19.0572C19.8932 19.3501 19.8932 19.825 19.6003 20.1179C19.3074 20.4108 18.8326 20.4108 18.5397 20.1179L15.7097 17.2879C15.4168 16.995 15.4168 16.5201 15.7097 16.2272ZM12 17.7676C12.4142 17.7676 12.75 18.1034 12.75 18.5176V22.5176C12.75 22.9318 12.4142 23.2676 12 23.2676C11.5858 23.2676 11.25 22.9318 11.25 22.5176V18.5176C11.25 18.1034 11.5858 17.7676 12 17.7676Z" fill="currentColor"></path></svg>
            </loading-star>
         </section>
         <BasicAnimations />
      </main>
   </> );
}

createRoot( document.querySelector( "app" ) ).render( <App /> );

