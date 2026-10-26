

const _ = ( ...args ) => console.log( ...args );

let 
   a = 586.33,       // Valor da Mensalidade integral
   b = 3,            // Quantidade de mensalidades com oferta
   c = a * b,        // Valor da Mensalidade integral x 3
   d = 49.00 * b,    // Valor pago com a oferta DIS 3:
   e = c - d,        // Valor diluído pela oferta
   f = 48,           // Duração do curso
   g = f - b,        // Meses restantes para quitar a diluição
   h = e / g,        // Valor da parcela diluída
   i = g * h,        // Saldo Futuro Pendente
   j = 0.75,         // % de Bolsa/desconto
   k = a * j,        // Valor da Bolsa/desconto
   mensalidade = a,
   bolsa = k,
   parcelaDis = h,
   res = mensalidade - bolsa + parcelaDis
;

_(
   `mensalidade: ${a}
valor da dis completa: ${e}
valor da dis mensal: ${h}
bolsa de desconto: ${k}
valor descontado: ${a * .25}
valor das mensalidades: ${res}
   `
);


// const print = ( ...v ) => console.log( ...v );

// V=1980;
// print(V);
// print("O valor da variável V é:",V);

// N="Guilherme";
// print(N,N,N);
// print("Eu conheço um amigo chamado",N);

// N = "j";
// print(N);