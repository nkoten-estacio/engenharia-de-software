Projeto de Extensão Chrome: Ocultar Seção de Disciplinas na Estácio
Nome do Projeto: Estácio Mais Limpo

Objetivo: Desenvolver uma extensão para o Google Chrome que oculta automaticamente a seção de disciplinas na página inicial do ambiente virtual de aprendizagem da Estácio (https://estudante.estacio.br/disciplinas/*), proporcionando uma experiência mais focada e limpa para o usuário.

Justificativa:

Ao acessar a página inicial do ambiente virtual da Estácio, a seção de disciplinas pode ocupar um espaço considerável, especialmente para alunos com muitas matérias matriculadas. Ocultar essa seção pode auxiliar o usuário a:

Focar em informações mais relevantes: Como avisos, calendário ou atividades pendentes, que podem estar localizadas em outras áreas da página.
Reduzir a poluição visual: Tornando a página mais limpa e organizada, facilitando a navegação.
Personalizar a experiência: Permitindo que o aluno escolha o que deseja visualizar ao acessar a plataforma.
Público-Alvo: Estudantes da Estácio que utilizam o Google Chrome como navegador principal para acessar o ambiente virtual de aprendizagem.

Recursos Necessários:

Computador com acesso à internet.
Google Chrome instalado.
Editor de texto para criar os arquivos da extensão (ex: VS Code, Sublime Text, Bloco de Notas).
Etapas de Desenvolvimento:

Criação do Arquivo Manifest:

Crie um arquivo chamado manifest.json na raiz do seu projeto.
Adicione o seguinte código a este arquivo:
JSON

{
  "manifest_version": 3,
  "name": "Estácio Mais Limpo",
  "version": "1.0",
  "description": "Oculta a seção de disciplinas na página inicial da Estácio.",
  "content_scripts": [
    {
      "matches": ["https://estudante.estacio.br/disciplinas/*"],
      "js": ["content.js"]
    }
  ]
}
manifest_version: Especifica a versão do formato do arquivo de manifesto.
name: Nome da sua extensão.
version: Versão da sua extensão.
description: Uma breve descrição da funcionalidade da extensão.
content_scripts: Define scripts que serão injetados em páginas da web que correspondam aos padrões especificados em matches.
matches: Um array de padrões de URL para os quais o script de conteúdo será injetado. Neste caso, todas as páginas sob https://estudante.estacio.br/disciplinas/.
js: Um array de arquivos JavaScript a serem injetados na página. Aqui, referenciamos o arquivo content.js.
Criação do Arquivo de Script de Conteúdo:

Crie um arquivo chamado content.js na mesma pasta do manifest.json.
Adicione o seguinte código JavaScript a este arquivo:
JavaScript

const secaoDisciplinas = document.querySelector("section.css-1lkavpq");

if (secaoDisciplinas) {
  secaoDisciplinas.style.display = "none !important";
}
Este script aguarda o carregamento do DOM (Document Object Model) e então tenta selecionar o elemento HTML com a classe CSS section.css-1lkavpq.
Se o elemento for encontrado, a propriedade display do seu estilo é definida como none !important, o que efetivamente oculta a seção na página. O !important garante que essa regra de estilo tenha precedência sobre outras regras que possam estar definidas para esse elemento.
Instalação da Extensão no Chrome (Modo de Desenvolvedor):

Abra o Google Chrome.
Na barra de endereços, digite chrome://extensions/ e pressione Enter.
No canto superior direito da página, ative a opção "Modo de desenvolvedor".
No canto superior esquerdo, clique em "Carregar sem compactação".
Selecione a pasta onde você salvou os arquivos manifest.json e content.js.
A extensão "Estácio Mais Limpo" será instalada e ativada automaticamente para o site da Estácio.
Testes e Validação:

Acesse o site https://estudante.estacio.br/disciplinas/ no seu navegador Chrome.
Verifique se a seção de disciplinas está oculta.
Navegue por outras páginas do site da Estácio (se houver) para garantir que a extensão não interfere em outras funcionalidades.
Possíveis Melhorias Futuras:

Opção de Ativar/Desativar: Adicionar um ícone e uma interface para permitir que o usuário ative ou desative a ocultação da seção de disciplinas conforme sua preferência.
Persistência da Preferência: Salvar a preferência do usuário (ativado ou desativado) para que a configuração seja mantida entre as sessões do navegador.
Ocultar Outras Seções: Permitir que o usuário personalize quais outras seções da página inicial deseja ocultar.
Este projeto de extensão oferece uma solução simples e eficaz para personalizar a experiência de acesso ao ambiente virtual da Estácio, focando no conteúdo mais relevante para o estudante. Ao utilizar seletores CSS e JavaScript, a extensão opera de forma eficiente e discreta no navegador do usuário.
