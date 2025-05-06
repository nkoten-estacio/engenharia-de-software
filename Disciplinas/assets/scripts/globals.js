

"use strict";

const 
   _ = ( ...a ) => console.log( ...a )   
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
;

addEventListener( "load", () => {
   $$( "[link]" ).forEach( link => {
      let state;
      if( link.hasAttribute( "blank" ) ) {
         state = "_blank";
      } else {
         state = "_self";
      }
      link.style.cssText = `cursor: pointer; text-decoration: underline; color: blue;`;
      link.addEventListener( "click", () => {
         window.open( link.getAttribute( "link" ), `${state}` );
         _( `target: ${state}` );
      } );
   } );
} );
