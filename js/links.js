

const 
   links = {
      sia: "https://sia.estacio.br/sianet/Logon",
      sava: "https://estudante.estacio.br/login",
      simulados: "https://simulado.estacio.br/alunos/",
   }
;
( GetLinks = () => {
   Object.values( 
      links 
   ).map(
      ( v, i, l ) => console.log( `links: ${ v }` ) 
   );
} )();
