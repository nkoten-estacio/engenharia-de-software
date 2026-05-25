// src/pages/login/Page.jsx
import { HelpIcon, AcessibilidadeIcon } from '../assets/Icons.jsx';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Lobby from '../components/layout/Lobby.jsx';
import EngenhariaDeSoftware from './disciplinas/engenharia-de-software/EngenhariaDeSoftware_Page.jsx';

import Text from '../components/ui/Text.jsx';

/**
 * --- default ---------
 */
export default function Semetre2026_1({}) {
  return (
    <>
      <Helmet>
        <title>Sala de Aula | Estacio</title>
      </Helmet>
      <Lobby>
        <header className="">
          <h2 className="">Minhas Disciplinas</h2>
          <btn className="flex">
            <main className="">
              <span className="">Período</span>
              <span className="">2026.1 - Em andamento</span>
            </main>
            <icon className="">v</icon>
          </btn>
        </header>
        {/* <EngenhariaDeSoftware className=""></EngenhariaDeSoftware> */}
        <Page />
      </Lobby>
    </>
  );
}

function Page({ children, ...props }) {
  return (
    <main className="flex flex-col w-full h-full flex-1 m-0 p-0 bg-slate-100">
      <page
        className={`flex flex-col flex-1 w-[100%] max-w-[996px] h-full mx-auto mt-[40px] mb-[32px] px-[102px] py-[40px] bg-white
          border-[2px] border-slate-300 rounded-[9px]
          text-justify
        `}
      >
        <Text type="subtitulo">Verificando o aprendizado</Text>
        <Text type="topico">Questão 2</Text>
        <Text type="texto">
          Um empresário precisa otimizar a produção de sua fábrica para
          maximizar o lucro, considerando diversas restrições de capacidade,
          demanda e matéria-prima. Ele tem à disposição diversos métodos de
          otimização, mas qual deles é mais adequado para essa situação,
          considerando que o problema pode ser modelado como um problema de
          programação linear de grande escala?
        </Text>
      </page>
    </main>
  );
}
