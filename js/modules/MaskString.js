

export MaskString( data, pattern ) {
   if( !data || !pattern ) {
      return "___";
   }
   let i = 0;
   const texto = data.toString();
   return pattern.replace( /#/g, _ => texto[i++].replace( /undefined/g, "" ) );   
}

export const Mask = {
   rg: ( data ) => {
      return MaskString( data, "###.###.###-##" );
   },
   cpf: ( data ) => {
      return MaskString( data, "##.###.###-#" );
   },
   cnpj: ( data ) => {
      return MaskString( data, "##.###.###/###-##" );
   },
   celular: ( data ) => {
      return MaskString( data, "(##) #####-####" );
   },
   
};
