

const 
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v ),
   _ = ( ...args ) => console.log( ...args ),
   _e = ( ...args ) => console.error( ...args )
;

// window.addEventListener( "load", () => {
addEventListener( "DOMContentLoaded", () => {
   _( "oi" );
   const 
      NavLinks = $$( "navlink" ),
      C = $$( "[c]" ),
      BG = $$( "[bg]" ),
      Pd = $$( "[pd]" ),
      Focus = $$( "img" ),
      tAs = $$( "[t-a]" ),
      OCs = $$( "oc" ),

      W = $$( "[w]" ),
      H = $$( "[h]" ),
      M = $$( "[m]" ),
      P = $$( "[p]" ),
      Fsz = $$( "[fsz]" ),
      Columns = $$( "[columns]" ),
      Rows = $$( "[rows]" ),
      Tabela = $$( "[tabela]" ),

      // DLink = $$( "d-link > a" ),
      start = $( "drawer-logo" )
   ;

   const 
      drawerHomeTemplate = `
      <style>
         drawer-logo {
            width: 100%;
            aspect-ratio: 1/1;
            margin: 2vw auto;
            display: grid;
            place-items: center;
         }
         drawer-logo > img {
            width: 100%;
            border-radius: 55rem;
         }
         drawer-home {
            display: grid;
            gap: 2vw;
            justify-content: center;
            grid-template-rows: repeat( auto-fill, 48px);
         }
         d-link {
            display: grid;
            place-items: center;
            width: 90%;
            margin: 0 auto;
            background-image: radial-gradient(
               circle at center,
               #21232950,
               #313339
            );
            aspect-ratio: 1/1;
            border-radius: 55rem;
            overflow: hidden;
         }
         a {
            text-decoration: none;
            color: #eee;
         }
         sub-menu {
            background: #1d1e27;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            font-weight: bold;
            box-shadow: #00000050 3px 3px 6px;
            position: absolute;
            left: 100%;
            top: -10px;
            margin-top: 0;
            padding: 10px 20px;
            border-radius: 0 6px 6px 0;
            opacity: 0;
            display: block;
            pointer-events: none;
            transition: 0s;
         
         }
         drawer-home > *:hover sub-menu {
            position: absolute;
            top: 2vw; left: 50px;
            width: 100vw;
            padding: 4vw;
            opacity: 1;
            pointer-events: auto;
            transition: all 0.3s ease;
         }
         img {
            display: grid;
            width: 90%;
            margin: 0 auto;
         }
      </style>

      <drawer-logo>
         <img src="../src2/pix/Ceo-logo.svg" alt="">
      </drawer-logo>
      <drawer-home>
         <d-link>
         <a href="./01 - Arquitetura de computadores.html" 
            title="Arquitetura de Computadores" >
            AC
         </a>
         <sub-menu>
            01 - Arquitetura de Computadores
         </sub-menu>
         </d-link>

         <d-link>
            <a href="./02 - Introdução à Segurança da Informação.html"
               title="Introdução à Segurança da Informação" >
               <small>SI</small>
            </a>
            <sub-menu>02 - Introdução à Segurança da Informação</sub-menu>
         </d-link>

         <d-link>
            <a href="./03 - Paradigmas de Linguagens de Programação em Python.html">
               <small>PPy</small>
            </a>
            <sub-menu>03 - Paradigmas de Linguagens de Programação em Python</sub-menu>
         </d-link>

         <d-link>
            <a href="./04 - Pensamento Computacional.html">
               <small>PenC</small>
            </a>
            <sub-menu>04 - Pensamento Computacional</sub-menu>
         </d-link>

         <d-link>
            <a href="./05 - Processos de Desenvolvimento de Software.html">
               <!-- <img src="./src/pix/logic/AND.svg"> -->
               PDS
            </a>
            <sub-menu>05 - Processos de Desenvolvimento de Software</sub-menu>
         </d-link>

         <!-- <d-link>
            <a href="./06 - Tipos de Memória.html">
               <small>MEM</small>
            </a>
            <sub-menu>06 - Tipos de Memória</sub-menu>
         </d-link>

         <d-link>
            <a href="./07 - Organização do Processador.html">
               <small>CPU</small>
            </a>
            <sub-menu>07 - Organização do Processador</sub-menu>
         </d-link>
         
         <d-link>
            <a href="./08 - Tipos de Barramentos.html">
               <img src="./src/pix/icons/bus.png">
            </a>
            <sub-menu>08 - Tipos de Barramentos</sub-menu>
         </d-link> -->
      </drawer-home>
      `
   ;




   NavLinks.forEach( link => link.addEventListener( "click", ev => {
      window.open( link.getAttribute( "to" ), "_blank" );
   } ) );



   C.forEach( c => c.style.color = c.getAttribute( "c" ) );
   BG.forEach( bg => bg.style.backgroundColor = bg.getAttribute( "bg" ) );
   Pd.forEach( pd => pd.style.padding = pd.getAttribute( "pd" ) );
   tAs.forEach( t => t.style.textAlign = t.getAttribute( "t-a" ) );


   /* 
   <oc>
      <>any</>
      <>any</>
   </oc>
   */
   OCs.forEach( o => o.addEventListener(
      "click", ev => {
         if( o.getAttribute( "open" ) == "" ) {
            o.removeAttribute( "open" );
            o.lastElementChild.style.visibility = "collapse";
            o.lastElementChild.style.height = "0";
         } else {
            o.setAttribute( "open", "" );
            o.lastElementChild.style.visibility = "visible";
            o.lastElementChild.style.height = "auto";
         }
      }
   ) );

   W.forEach( v => v.style.width = v.getAttribute( "w" ) );
   H.forEach( v => v.style.height = v.getAttribute( "h" ) );
   M.forEach( v => v.style.margin = v.getAttribute( "m" ) );
   P.forEach( v => v.style.padding = v.getAttribute( "p" ) );
   Fsz.forEach( v => v.style.fontSize = v.getAttribute( "fsz" ) );
   Columns.forEach( v => v.style.gridTemplateColumns = v.getAttribute( "columns" ) );
   Rows.forEach( v => v.style.gridTemplateRows = v.getAttribute( "rows" ) );
   Tabela.forEach( v => v.style.gridTemplateColumns = v.getAttribute( "tabela" ) );

   Focus.forEach( img => img.addEventListener( "click", ev => {
   } ) );

   /* == [ drawer links template ] == == == == == == == == == */
   class AppDrawer extends HTMLElement {
      constructor() {
         super();
         let drawer = document.createElement( "template" );
         drawer.innerHTML = drawerHomeTemplate;
         this.attachShadow( { mode: "open" } );
         this.shadowRoot.append( drawer.content.cloneNode( true ) );
         // this.shadowRoot.querySelector( "img" ).src = this.getAttribute( "src" );
         this.shadowRoot.querySelector( "img" ).alt = this.getAttribute( "alt" );
      } 
      connectedCallback() {
         this.render();
         // let 
         //    btn = this.shadowRoot.querySelector( "button" )
         // ;
         // btn.addEventListener( "click", ev => {
         //    cardBase.style.transform = "rotateY( 180deg )";
         // } );

         let DLink = this.shadowroot.querySelectorAll( "d-link > a" );
         DLink.forEach( d => { 
            // d.addEventListener( "touchstart", ev => {
            d.addEventListener( "dragstart", ev => {
               switch( d.innerText ) {
               case "01": {
                  d.title = "oi";
               }
                  break;
               }
            } );
         } );
      }
      render() {
      }
   }
   window.customElements.define( "app-drawer", AppDrawer );

   // DLink.forEach( d => { 
   //    // d.addEventListener( "touchstart", ev => {
   //    d.addEventListener( "dragstart", ev => {
   //       switch( d.innerText ) {
   //       case "01": {
   //          d.title = "oi";
   //       }
   //          break;
   //       }
   //    } );
   // } );

   start.addEventListener( "click", ev => {
      open( "./index.html", "_self" );
   } );
   start.addEventListener( "contextmenu", ev => {
      open( "https://www.youtube.com/playlist?list=PL866_LrQxNVipiEgWtJMK5Fcgc6IBfVvc", "_self" );
   } );

} );