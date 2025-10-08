

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { GoogleGenerativeAI } from "@google/generative-ai";
// import { questions, disciplina } from "questions";

// ⚠️ Substitua 'SUA_CHAVE_DE_API_AQUI' pela sua chave de API do Gemini
const API_KEY = 'AIzaSyBu6byWYbe7RPXN3qHHbkxeZmVpIF5I6Wo';
      
// 🎯 Configuração do Gemini
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      
// 🆕 == [ GeminiChat() ] ==-==-==
function GeminiChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
        
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };
        
  const handleAskGemini = async () => {
    if (!question.trim()) return;
          
    setIsLoading(true);
    setAnswer("");
          
    try {
      const result = await model.generateContent(question);
      const response = await result.response;
      const text = response.text();
            
      setAnswer(text);
    } catch (error) {
      console.error("Erro ao se comunicar com o Gemini:", error);
      setAnswer("Desculpe, houve um erro ao buscar a resposta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-[10px] drop-shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Pergunte ao Gemini</h1>
      <div className="flex w-full max-w-lg mb-4">
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Digite sua pergunta aqui..."
          className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAskGemini}
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Buscando..." : "Perguntar"}
        </button>
      </div>
      <div className="w-full max-w-lg p-4 bg-gray-100 rounded-md">
        <p className="whitespace-pre-wrap">
          {answer ? answer : "A resposta aparecerá aqui."}
        </p>
      </div>
    </div>
  );
}

function AppBar({ title, label }) {
  return (
    <div className="appbar sticky top-0 left-0 h-[64px] bg-white py-[.5em] px-[5em] z-40 flex items-center justify-between">
      <div className="appbar-l flex items-center h-full gap-[1.5rem]">
        <span className="title text-[24px] font-semibold text-[#121212]">
          {label}
        </span>
        <span className="divv grid items-center my-0 w-[2px] h-full bg-[#efefef] "></span>
        <span className="subt text-[#444444]">{title}</span>
      </div>
      <div className="appbar-right flex items-center">
        <button className="css-13yrnvg">
          <svg
            viewBox="0 0 24 24"
            className="type"
            width="26"
            height="26"
            aria-hidden="true"
            focusable="false"
            role="button"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4V7C20.75 7.41421 20.4142 7.75 20 7.75C19.5858 7.75 19.25 7.41421 19.25 7V4.75H12.75V19.25H15C15.4142 19.25 15.75 19.5858 15.75 20C15.75 20.4142 15.4142 20.75 15 20.75H9C8.58579 20.75 8.25 20.4142 8.25 20C8.25 19.5858 8.58579 19.25 9 19.25H11.25V4.75H4.75V7C4.75 7.41421 4.41421 7.75 4 7.75C3.58579 7.75 3.25 7.41421 3.25 7V4Z"
              fill="#121212"
            ></path>
          </svg>
        </button>

        <button className="w-8 h-8 css-13yrnvg">
          <svg
            viewBox="0 0 24 24"
            class="target"
            width="26"
            height="26"
            aria-hidden="true"
            focusable="false"
            role="button"
            alt="Icone de modo foco"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.75C9.1005 6.75 6.75 9.1005 6.75 12C6.75 14.8995 9.1005 17.25 12 17.25C14.8995 17.25 17.25 14.8995 17.25 12C17.25 9.1005 14.8995 6.75 12 6.75ZM5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 15.7279 15.7279 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12ZM12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75ZM9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12Z"
              fill="#121212"
            ></path>
          </svg>
        </button>
        <button aria-disabled="false" className="w-8 h-8 css-13yrnvg">
          <svg
            width="26"
            height="26"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            role="button"
            alt="Icone de alto contraste"
          >
            <path
              className="st0"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 1.75C11 1.75 11 5.89137 11 11C11 16.1086 11 20.25 11 20.25C16.1086 20.25 20.25 16.1086 20.25 11C20.25 5.89137 16.1086 1.75 11 1.75ZM0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11Z"
              fill="#121212"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

/*function RX( props ) {
   if( typeof props === "string" ) return ;
   return( "isn't string!" );
}*/

function Questions({ ...props }) {
  function EnunciadoRenderer({ textoEnunciado }) {
    // É crucial sanitizar o HTML se o textoEnunciado vier de uma fonte não confiável.
    // Para este exemplo, assumimos que o conteúdo é seguro.
    return (
      <div
        className="pt-[.5rem] pb-[1.5rem]"
        dangerouslySetInnerHTML={{ __html: textoEnunciado }}
      />
    );
  }

  return (
    <>
      {props.questions &&
        props.questions.map((Q, i) => (
          <>
            <div className="qstcard quest bg-white rounded-[10px] drop-shadow-lg text-[1em] p-6 mt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="rounded-[10px] bg-gray-100 border-[1px] border-[#e0e0e0] w-8 h-8 flex items-center justify-center">
                  <span className="text-[14px]">
                    {(i + 1) % 10 == 1
                      ? 1
                      : (i + 1) % 10 == 2
                        ? 2
                        : (i + 1) % 10 == 3
                          ? 3
                          : (i + 1) % 10 == 4
                            ? 4
                            : (i + 1) % 10 == 5
                              ? 5
                              : (i + 1) % 10 == 6
                                ? 6
                                : (i + 1) % 10 == 7
                                  ? 7
                                  : (i + 1) % 10 == 8
                                    ? 8
                                    : (i + 1) % 10 == 9
                                      ? 9
                                      : 10}
                  </span>
                </div>
                <button className=" text-black py-[2px] px-4 rounded-full font-normal text-[.8em] border-black border-[2px] border">
                  Marcar para revisão
                </button>
              </div>
              <EnunciadoRenderer textoEnunciado={Q.enunciado} />
              {/*
                        !Q.epic ? <p className="mb-4 text-[16px]">Q.enunciado</p> : <>
                           <p className="mb-4 text-[16px]">
                              Q.enunciado
                              <img src="{ Q.epic }" />
                           </p>
                        </>
                     */}

              <div className="bg-white flex items-center flex-col gap-[.0em]">
                {Q.opções.map((O, i) => (
                  <>
                    <button
                      className={
                        Q.correta === O
                          ? "qbtn w-full bg-[#c2d4ff] border-[#144bc8] text-center text-[#525968] border-[2px] py-3 px-4 rounded-[10px] text-left"
                          : "qbtn w-full text-center text-[#5a5a5a] py-3 px-4 rounded-[10px] text-left"
                      }
                    >
                      <div
                        className={
                          O === Q.correta
                            ? "qbtnns text-[.8em] text-white bg-[#144bc8]"
                            : "qbtnn grid place-items-center p-0 rounded-full h-[2em] aspect-square border-[1px] border-[#e0e0e0]  text-[.9em] text-black bg-[#f5f5f5]"
                        }
                      >
                        {i == 0
                          ? "A"
                          : i == 1
                            ? "B"
                            : i == 2
                              ? "C"
                              : i == 3
                                ? "D"
                                : "E"}
                      </div>
                      {O[0] === "|" && (
                        <>
                          <pre>{O.replace("|", "")}</pre>
                        </>
                      )}
                      {O[0] !== "|" && <>{O}</>}
                    </button>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
    </>
  );
}

function ExtraBtns() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(time);
  }, []);

  return isVisible ? (
    <>
      <button className="feedback-btn">
        <div className="feedback-btn-icon">
          <svg width="24" height="22" fill="none" viewBox="0 0 24 22">
            <path
              fill="#fdfdfe"
              fill-rule="evenodd"
              d="M22.362.827C21.72.5 20.88.5 19.2.5H3.3C1.755.5.983.5.575.819A1.5 1.5 0 000 1.969c-.01.517.453 1.135 1.38 2.371l1.14 1.52c.178.237.267.356.33.487a1.5 1.5 0 01.122.365C3 6.855 3 7.003 3 7.3v9.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311c.642.327 1.482.327 3.162.327h11.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C24 19.22 24 18.38 24 16.7V5.3c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.31-1.311zM9.277 11.937a1.125 1.125 0 00-1.948 1.126 7.123 7.123 0 006.171 3.562 7.123 7.123 0 006.171-3.562 1.125 1.125 0 10-1.947-1.126 4.872 4.872 0 01-4.224 2.438 4.873 4.873 0 01-4.223-2.438zM10.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM18 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span className="feedback-text">Feedback</span>
      </button>
      <section className="libras-btn">
        <img
          src="https://cdn.jsdelivr.net/gh/spbgovbr-vlibras/vlibras-portal@dev/app/assets/access_icon.svg"
          alt=""
        />
      </section>
    </>
  ) : null;
}

function QuestionArea({ ...props }) {
  return (
    <>
      <div className="lg:col-span-3 bg-[#f5f5f5]">{props.children}</div>
    </>
  );
}

function RightBar() {
  const [clock, setClock] = useState({
    h: 0,
    m: 0,
    s: 0,
    isCounting: false,
    hasEnded: false,
  }),
    oneHourLater = new Date().getTime() + 60 * 60 * 1000,
    fortyFiveMinutesLater = new Date().getTime() + 45 * 60 * 1000;
  const totalDuration = 45 * 60 * 1000; // 45 minutos em ms
  const targetTime = useRef(new Date().getTime() + totalDuration); // 45 minutos

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetTime.current - now;
    const timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      milliseconds: difference > 0 ? difference : 0,
    };
    // return difference > 0 ? timeLeft : {hours: 0, minutes: 0, seconds: 0};
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const formatTime = (num) => String(num).padStart(2, "0");
  // const progressPercent = 100 - (timeLeft.milliseconds / totalDuration) * 100;
  const progressPercent =
    100 + 2 - (timeLeft.milliseconds / totalDuration) * 100;

  return (
    <article className="fixed bg-white rounded-[10px] drop-shadow-lg pt-4 mt-4">
      <header className="flex-col bg-[#f5f5f5] text-[#121212] p-4">
        <section className="up flex items-center justify-between">
          <div className="left flex items-center gap-[.5rem]">
            <div className="hora flex-col ">
              {formatTime(timeLeft.hours)}
              <div className="horas">hora</div>
            </div>
            <div className="clock-div">:</div>
            <div className="minuto">
              {formatTime(timeLeft.minutes)}
              <div className="minutos">min</div>
            </div>
            <div className="clock-div h-full">:</div>
            <div className="segundo">
              {formatTime(timeLeft.seconds)}
              <div className="segundos">seg</div>
            </div>
          </div>
          <div className="right flex items-center gap-[.5rem]">
            <div className="">
              <img src="./eyeslash.svg" width="30" height="30" alt="" />
            </div>
            <div className="text-[.9rem] font-light">Ocultar</div>
          </div>
        </section>

        {/* 🎯 Barra de Progresso */}
        <section className="down flex bg-[#cacaca] w-full h-[4px] overflow-hidden rounded-md my-[.5rem] mx-0 p-0">
          <div
            className={`bg-[#121212] w-[${progressPercent}%] h-full transition-all duration-1000 ease-linear`}
          ></div>
        </section>
      </header>
      <section className="p-4">
        <div className="numberOfQuestions flex items-center justify-between mb-4">
          <div>
            <span className="font-normal">Questão</span>{" "}
            <span className="text-gray-600">
              <span className="font-bold text-[1.2rem]">{6}</span>
              {` de ${10}`}
            </span>
          </div>
          <button className="flex items-center text-gray-600"></button>
        </div>
        <div className="grid grid-cols-5 gap-2 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <button
              key={number}
              className={`btnc rounded-md w-full h-10 flex items-center justify-center text-[.9rem] ${number === 9 ||
                number === 3 ||
                number === 4 ||
                number === 5 ||
                number == 6 ||
                number === 8
                ? "bg-[#c2d4ff] border-[1px] border-[#144bc8] text-[#424242] text-[14px] aspect-square"
                : "bg-[#f5f5f5] border-[1px] border-[#e0e0e0] text-[#424242] text-[14px] aspect-square "
                }`}
            >
              {number}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-4 gap-[.5em]">
          <span className="flex items-center gap-[.4rem]">
            <div className="grid w-[8px] h-[8px] aspect-square rounded-full border border-[1px] border-black bg-[#144fbc]"></div>
            Respondidas <span className="font-bold">({6}) </span>
          </span>
          <span className="flex items-center gap-[.4rem]">
            <div className="grid w-[8px] h-[8px] aspect-square rounded-full border border-[1px] border-[#9a9a9a] bg-[#d5d5d5]"></div>
            Em branco <span className="font-bold">({4}) </span>
          </span>
        </div>
        <button className="submit text-white py-3 rounded-md w-full">
          Finalizar prova
        </button>
      </section>
    </article>
  );
}

function RightBarArea({ ...props }) {
  return (
    <>
      <div className="lg:col-span-1 bg-[#f5f5f5]">{props.children}</div>
    </>
  );
}

// == [ App() ] ==-==-==
function App() {
  const sectionRefs = useRef([]);
  /* Criar as refs para 10 sections */
  useEffect(() => {
    sectionRefs.current = Array(10)
      .fill()
      .map((_, i) => sectionRefs.current[i] || React.createRef());
  }, []);

  return (
    <>
      {/* <AppBar title={ disciplina.name || 'c' } label="Prova AV" /> */}
      <AppBar title={ 'c' } label="Prova AV" />
      <div className="app mx-auto min-h-screen bg-[#f5f5f5]">
        <div className="container mx-auto py-8 px-[1.5rem] grid grid-cols-1 lg:grid-cols-4 gap-8">
          <QuestionArea>
            {/* {questions && <Questions questions={questions} />} */}
            <GeminiChat />
          </QuestionArea>

          <RightBarArea>
            {/* <RightBar /> */}
          </RightBarArea>

        </div>
        <ExtraBtns />
      </div>
    </>
  );
}

      
createRoot(document.querySelector("app")).render(<App />);
