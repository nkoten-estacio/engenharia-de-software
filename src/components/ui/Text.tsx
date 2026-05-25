import React from 'react';
import PropTypes from 'prop-types';

// 1. Mapeamento padrão: Associa o tipo de texto à tag HTML mais semântica por padrão
const DEFAULT_TAGS = {
  'titulo': 'h1',
  'subtitulo': 'h2',
  'subtopico': 'h3',
  'topico-miudo': 'h4',
  'rotulo-secao': 'h5',
  'texto-destaque': 'p',
  'texto': 'p',
  'texto-pequeno': 'span',
  'legenda': 'figcaption',
  'acao': 'span'
};

/**
 * --- Componente de Tipografia NK-Text ---
 * Centraliza e padroniza o uso do mini-framework de texto do projeto.
 */
export default function Text({ 
  children, 
  type = 'texto', 
  tag, 
  className = '', 
  ...props 
}) {
  // 2. Define a tag final: usa a informada explicitamente, ou busca a padrão do tipo, ou cai em 'span'
  const Component = tag || DEFAULT_TAGS[type] || 'span';

  // 3. Monta a classe do framework (.nk-*) combinada com eventuais classes extras do usuário
  const combinedClassName = `nk-${type} ${className}`.trim();

  return (
    <Component className={combinedClassName} ...props>
      {children}
    </Component>
  );
}

// 4. Validação de propriedades com PropTypes (opcional, remova se usar TypeScript)
Text.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    'titulo', 'subtitulo', 'subtopico', 'topico-miudo', 'rotulo-secao',
    'texto-destaque', 'texto', 'texto-pequeno', 'legenda', 'acao'
  ]),
  tag: PropTypes.string,
  className: PropTypes.string,
};

