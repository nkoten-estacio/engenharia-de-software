import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

document.title = 'oi';

/**
 * --- Prototype Application ---
 * Buildless ESM React Component (N-Koten Pattern)
 */
function App() {
  return (
    <HashRouter>
      <page>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </page>
    </HashRouter>
  );
}

const AppBar = ({ title }) => {
  return (
    <>
      <appbar
        className={`flex items-center justify-center bg-[#13111e] text-indigo-600 w-full h-[81px]`}
      >
        {title}
      </appbar>
    </>
  );
};

function Navbar() {
  return (
    <nav className="p-4 bg-slate-800 flex gap-4">
      {/* O Link substitui o <a href="..."> para evitar o refresh da página */}
      <Link hide-focus="true" to="/" className="text-sky-400 hover:underline">
        Login
      </Link>
      <Link to="/home" className="text-sky-400 hover:underline">
        Home
      </Link>
      <Link to="/sobre" className="text-sky-400 hover:underline">
        Sobre
      </Link>
    </nav>
  );
}

const Home = ({}) => {
  return <>Home</>;
};

const Sobre = ({}) => {
  return <>Sobre</>;
};

const Login = ({}) => {
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
              <btn className="bg-[#144bc8] font-poppins rounded-[.5rem] w-full h-[48px] flex text-white items-center justify-center text-[14px] font-semibold px-[12px] py-[16px] my-[1rem]">
                Entrar
              </btn>
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
};

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

const HelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="help_circle w-[24px] h-[24px]"
    width="24.000em"
    height="24.000em"
    aria-hidden="true"
    focusable="false"
    role="img"
    alt=""
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12.3004 7.77792C11.7767 7.68809 11.2381 7.7865 10.78 8.05573C10.3219 8.32496 9.97383 8.74763 9.7975 9.24888C9.66005 9.63962 9.23186 9.84495 8.84112 9.7075C8.45038 9.57005 8.24505 9.14186 8.3825 8.75112C8.67638 7.9157 9.25644 7.21125 10.0199 6.76253C10.7834 6.31382 11.6811 6.14979 12.554 6.29951C13.4268 6.44922 14.2185 6.90302 14.7888 7.58053C15.359 8.25786 15.6712 9.1151 15.67 10.0005C15.6698 11.3984 14.6312 12.3439 13.836 12.874C13.4156 13.1544 13.0004 13.3614 12.6934 13.4979C12.5388 13.5666 12.4089 13.6186 12.3159 13.654C12.2694 13.6717 12.2319 13.6854 12.2049 13.6949L12.1726 13.7063L12.1627 13.7096L12.1594 13.7108L12.1581 13.7112C12.1579 13.7113 12.1572 13.7115 11.92 13L12.1572 13.7115C11.7642 13.8425 11.3395 13.6301 11.2085 13.2372C11.0776 12.8446 11.2895 12.4203 11.6817 12.2889C11.6818 12.2888 11.6827 12.2885 11.6828 12.2885L11.6846 12.2879L11.7024 12.2816C11.7195 12.2756 11.7464 12.2658 11.7819 12.2523C11.853 12.2252 11.9575 12.1834 12.0841 12.1271C12.3396 12.0136 12.6744 11.8456 13.004 11.626C13.7087 11.1562 14.17 10.6019 14.17 10L14.17 9.99888C14.1708 9.46752 13.9835 8.95303 13.6413 8.54653C13.2991 8.14003 12.8241 7.86775 12.3004 7.77792ZM11.25 17C11.25 16.5858 11.5858 16.25 12 16.25H12.01C12.4242 16.25 12.76 16.5858 12.76 17C12.76 17.4142 12.4242 17.75 12.01 17.75H12C11.5858 17.75 11.25 17.4142 11.25 17Z"
      fill="currentColor"
    ></path>
  </svg>
);

const AcessibilidadeIcon = ({ className }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.4961 25.0001C5.61442 25.0073 -0.0456994 19.3969 0.000278146 12.418C0.0451535 5.60511 5.55742 -0.0469456 12.5981 0.000293989C19.4576 0.0462738 25.0239 5.59535 24.9999 12.5533C24.9761 19.4715 19.3722 25.0018 12.4961 25.0001ZM12.529 24.4853C15.7202 24.4702 18.7427 23.2371 21.0122 20.9252C23.2978 18.5969 24.4776 15.7829 24.4817 12.5243C24.486 9.1887 23.2814 6.30882 20.9001 3.96968C18.5864 1.69698 15.7821 0.551737 12.5258 0.526385C5.98397 0.475524 0.523981 5.83328 0.515951 12.4788C0.507763 19.1167 5.89044 24.4934 12.529 24.4852V24.4853Z"
        fill="#144BC8"
      ></path>
      <path
        d="M23.7936 13.4228C23.7418 15.7096 22.6292 18.398 20.401 20.5818C18.2322 22.7072 15.5885 23.7992 12.5541 23.8079C6.1642 23.8262 1.18823 18.6369 1.19973 12.4721C1.21106 6.32061 6.2541 1.1663 12.5595 1.19544C18.7395 1.22409 23.8553 6.28077 23.7937 13.4228H23.7936ZM15.1981 20.7402C15.3835 20.7542 15.5646 20.7029 15.7204 20.5846C16.0513 20.3334 16.2004 19.9903 16.0546 19.509C15.8491 18.8311 15.6176 18.161 15.3951 17.4885C15.121 16.6595 14.8447 15.8312 14.5693 15.0025C14.5326 14.8921 14.5009 14.7803 14.4882 14.6645C14.4235 14.0762 14.3547 13.4883 14.2972 12.8992C14.235 12.2618 14.158 11.6256 14.1443 10.9836C14.1402 10.7877 14.1421 10.5939 14.1589 10.3999C14.1728 10.2401 14.2156 10.2021 14.3734 10.1802C14.8388 10.1155 15.3044 10.0516 15.7699 9.98624C16.628 9.86547 17.4868 9.74816 18.344 9.62124C18.985 9.52629 19.2624 9.03279 19.1626 8.4941C19.0725 8.00832 18.5885 7.69733 18.0839 7.78504C17.9757 7.80378 17.8689 7.82834 17.7592 7.84047C17.5106 7.86818 17.2627 7.90267 17.015 7.93841C16.5016 8.01242 15.9887 8.09084 15.4751 8.16374C14.9736 8.23492 14.472 8.30609 13.9694 8.36861L12.4893 8.5415C12.4893 8.5415 11.8498 8.48576 11.7284 8.46655C11.228 8.38766 10.7248 8.33034 10.2241 8.2524C9.60306 8.15571 8.97874 8.08107 8.35632 7.994C7.8608 7.92471 7.36607 7.84881 6.87039 7.78031C6.29835 7.70127 5.77984 8.17067 5.80535 8.74006C5.82503 9.18049 6.18844 9.56266 6.6446 9.62344C7.23742 9.70249 7.83057 9.77918 8.42276 9.86263C9.154 9.96562 9.88444 10.0744 10.6154 10.1804C10.7709 10.2029 10.8142 10.2398 10.8435 10.3942C10.856 10.4597 10.8561 10.5276 10.8596 10.5947C10.8797 10.9861 10.8404 11.3762 10.8123 11.7653C10.7971 11.9775 10.7897 12.1914 10.7597 12.4037C10.7213 12.6753 10.7031 12.9499 10.675 13.2229C10.6451 13.5143 10.6069 13.8049 10.585 14.0969C10.547 14.6038 10.3604 15.0706 10.2079 15.5467C10.0235 16.1223 9.83342 16.6962 9.64652 17.2711C9.43128 17.933 9.21509 18.5947 9.00315 19.2578C8.94568 19.4376 8.86301 19.6143 8.85215 19.8036C8.82349 20.3016 9.23508 20.897 9.9712 20.7583C10.3475 20.6873 10.5598 20.4328 10.6755 20.0854C10.801 19.7089 10.9218 19.3309 11.0451 18.9536C11.2616 18.2919 11.479 17.6305 11.695 16.9687C11.8334 16.545 11.9696 16.1206 12.1076 15.6967C12.1586 15.54 12.2101 15.3834 12.2635 15.2275C12.2978 15.127 12.3612 15.0595 12.4754 15.0557C12.59 15.0517 12.6488 15.0941 12.7043 15.2264C12.7256 15.2769 12.7435 15.329 12.7607 15.3812C13.0188 16.1704 13.2756 16.9602 13.5345 17.7491C13.7914 18.5324 14.053 19.314 14.3073 20.0982C14.4047 20.3989 14.7179 20.7736 15.198 20.7403L15.1981 20.7402ZM10.744 5.92301C10.6827 6.85348 11.542 7.70016 12.4957 7.70095C13.4605 7.70158 14.2732 6.87599 14.2756 5.93781C14.2778 5.07065 13.5787 4.14869 12.5006 4.14901C11.4061 4.14932 10.6835 5.10278 10.744 5.92301Z"
        fill="#144BC8"
      ></path>
    </svg>
  );
};

createRoot(document.getElementById('app_root')).render(<App />);
