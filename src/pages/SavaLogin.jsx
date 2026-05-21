// src/pages/login/Page.jsx
import { HelpIcon, AcessibilidadeIcon } from '../assets/Icons.jsx';
import { Link } from 'react-router-dom';

/**
 * --- default ---------
 */
export default function SavaLogin({}) {
  return (
    <>
      <page className="flex flex-row w-full h-[100dvh] bg-white">
        <left className="flex-1 flex flex-col h-[100dvh] relative">
          <AcessibilidadeIcon className="absolute top-[1rem] right-[1rem] cursor-pointer" />
          <main className="flex-1 flex flex-col items-center justify-center text-[#424242] w-full h-full font-inter">
            <content className="flex-1 flex flex-col text-[#424242] w-[400px] max-h-[455px] m-[auto]">
              <img
                src="./assets/img/Estacio.svg"
                width="232"
                hight="75"
                className="ml-[-30px]"
              />
              <t className="mt-4">Olá, Aluno.</t>
              <t className="text-[#121212] text-[32px] font-[600] font-montserrat">
                Que bom ter você de volta!
              </t>
              <t className="my-[.5rem]">Clique abaixo para acessar.</t>
              <t>Seu e-mail de acesso é:</t>
              <t className="font-semibold">suamatricula@alunos.estacio.br</t>
              <Link
                to="/2026-1"
                className="bg-[#144bc8] font-poppins rounded-[.5rem] w-full h-[48px] flex text-white items-center justify-center text-[14px] font-semibold px-[12px] py-[16px] my-[1rem]"
              >
                Entrar
              </Link>
              <TextBtn txt="Esqueci minha senha" />
              <TextBtn txt="Alterar para Educador" />
            </content>
          </main>
          <footer className="flex flex-col items-center justify-center w-full h-[104px] bg-[#c2d4ff] text-[#424242] text-[1rem] gap-2">
            <t>Está com dúvidas para fazer o login?</t>
            <t className="text-[#121212] flex gap-[5px] items-center">
              <HelpIcon />
              <TextBtn txt="Acessar Ajuda" />
            </t>
          </footer>
        </left>
        <right className="flex-1 flex flex-col">
          <img src="./assets/img/img-aluno.webp" />
        </right>
      </page>
    </>
  );
}

/**
 * helpers
 * */
const TextBtn = ({ txt }) => {
  return (
    <t className="relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:w-[30%] before:bg-[#121212] text-[#121212] font-[500] cursor-pointer my-[.5rem] font-inter">
      {txt}
    </t>
  );
};
