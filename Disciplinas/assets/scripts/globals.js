

"use strict";

//import * from "../../../js/browser.js"
const 
   _ = ( ...a ) => console.log( ...a )   
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
;

addEventListener( "load", () => {
   $$( "[link]" ).forEach( link => {
      link.style.cssText = `cursor: pointer; text-decoration: underline; color: #2277ff;`;
      link.addEventListener( "click", () => {
         window.open( 
            link.getAttribute( "link" ), 
            link.hasAttribute( "blank" ) ? "_blank" : "_self" 
         );
      } );
   } );
} );
