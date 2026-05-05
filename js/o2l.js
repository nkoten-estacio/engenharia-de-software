

const 
   data = {
      name: "Nome",
      type: "Tipo",
   }
   ,
   _ = ( ...a ) => console.log( ...a )
   ,
   list = () => {
      Object.values( data ).map( v => {
         v;   
      } );
   }
;

function Object2List( object ) {
   return Object.values(  object ).map( v => v );
}

( () => {
   Object.values( data ).map( v => {
      console.log( `Lista: ${ v }` );
   } );
} )();

_( Object2List( data )[0] );
