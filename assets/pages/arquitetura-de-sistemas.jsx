import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
} from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { data } from 'data';
import { questions } from 'arquitetura-de-sistemas';
// import { questions, disciplina } from "questions";

/**
 * == [ theme switcher ]
 * */
// Cria o Contexto com um valor padrão
const ThemeContext = createContext();

// Cria um Provider para envolver sua aplicação
export const ThemeProvider = ({ children }) => {
  // 1. Defina o estado do tema. Use o localStorage para persistir a escolha do usuário.
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // 2. Use useEffect para atualizar a classe do body
  useEffect(() => {
    document.body.className = theme;
    // Salve a preferência do usuário no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Este efeito roda sempre que o 'theme' muda

  // 3. Crie a função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 4. Forneça o estado e a função para os componentes filhos
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Cria um hook customizado para facilitar o uso
export const useTheme = () => {
  return useContext(ThemeContext);
};

export function ThemeSwitch() {
  // Obtenha o estado do tema e a função para alterná-lo do contexto
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-switch-btn"
      style={{
        // Estilos básicos, você pode usar Tailwind ou CSS classes aqui
        background: 'transparent',
        border: '1px solid #ccc',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
        color: theme === 'light' ? '#333' : '#eee',
        backgroundColor: theme === 'light' ? '#fff' : '#444',
      }}
    >
      {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
    </button>
  );
}
/* -- theme switcher */

// ⚠️ Substitua 'SUA_CHAVE_DE_API_AQUI' pela sua chave de API do Gemini
const API_KEY = 'AIzaSyBu6byWYbe7RPXN3qHHbkxeZmVpIF5I6Wo';

// 🎯 Configuração do Gemini
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// 🆕 == [ GeminiChat() ] ==-==-==
function GeminiChat() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskGemini = async () => {
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');

    try {
      const result = await model.generateContent(question);
      const response = await result.response;
      const text = response.text();

      setAnswer(text);
    } catch (error) {
      console.error('Erro ao se comunicar com o Gemini:', error);
      setAnswer(
        'Desculpe, houve um erro ao buscar a resposta. Tente novamente.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center p-8 bg-white rounded-[10px] drop-shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{data.gemchat.title}</h1>
      <div className="flex w-full max-w-lg mb-4">
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="..."
          className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAskGemini}
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Buscando...' : 'Perguntar'}
        </button>
      </div>
      <div className="w-full max-w-lg p-4 bg-gray-100 rounded-md">
        <p className="whitespace-pre-wrap">
          {answer ? answer : 'A resposta aparecerá aqui.'}
        </p>
      </div>
    </div>
  );
}

function AppBar({ ...props }) {
  return (
    <div className="appbar main">
      <div className="left">
        {/* { props?.left || '<-' } */}
        <Text as="button" onClick={() => props.act(!props.actvalue)}>
          oi
        </Text>
      </div>
      <div className="center">{props?.title || 'titulo'}</div>
      <div className="right">{props?.label || 'label'}</div>
    </div>
  );
}

function SideBar({ ...props }) {
  return (
    <>
      <View as="sidebar">
        <header onClick={() => props.act(!props.actvalue)}>
          <img src={data.logo} />
        </header>
        <main>
          <Text children="text" as="Text" />
        </main>
        <footer>
          <ThemeSwitch />
        </footer>
      </View>
    </>
  );
}

function Page({ ...props }) {
  return (
    <>
      <main className="page">
        <article className="content">{props.children}</article>
      </main>
    </>
  );
}

function View({ children, as = 'div', ...props }) {
  const Element = as;
  return <Element {...props}>{children}</Element>;
}

function Text({ children, as = 'span', ...props }) {
  const Element = as;
  return <Element {...props}>{children}</Element>;
}

function Pressable({ onPress, style, children, ...props }) {
  const [pressed, setPressed] = useState(false);

  // Se style for função, chamamos com { pressed }
  const resolvedStyle =
    typeof style === 'function' ? style({ pressed }) : style;

  return (
    <button
      onClick={onPress}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        opacity: pressed ? 0.6 : 1,
        transition: 'opacity 0.15s, background-color 0.15s',
        ...resolvedStyle,
      }}
      {...props}
    >
      {typeof children === 'function' ? children({ pressed }) : children}
    </button>
  );
}

const TextInput = ({ value, onChangeText, style, ...props }) => (
  <input
    value={value}
    onChange={(e) => onChangeText && onChangeText(e.target.value)}
    style={{ padding: '6px 8px', ...style }}
    {...props}
  />
);

const Switch = ({ value, onValueChange, style, ...props }) => (
  <input
    type="checkbox"
    checked={value}
    onChange={(e) => onValueChange && onValueChange(e.target.checked)}
    style={style}
    {...props}
  />
);

function QuestionArea({ ...props }) {
  return (
    <>
      <div className="lg:col-span-3 bg-[#212329]">{props.children}</div>
    </>
  );
}

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

              <div className="bg-white flex items-center flex-col gap-[.0em]">
                {Q.opções.map((O, i) => (
                  <>
                    <button
                      className={
                        Q.correta === O
                          ? 'qbtn w-full bg-[#c2d4ff] border-[#144bc8] text-center text-[#525968] border-[2px] py-3 px-4 rounded-[10px] text-left'
                          : 'qbtn w-full text-center text-[#5a5a5a] py-3 px-4 rounded-[10px] text-left'
                      }
                    >
                      <div
                        className={
                          O === Q.correta
                            ? 'qbtnns text-[.8em] text-white bg-[#144bc8]'
                            : 'qbtnn grid place-items-center p-0 rounded-full h-[2em] aspect-square border-[1px] border-[#e0e0e0]  text-[.9em] text-black bg-[#f5f5f5]'
                        }
                      >
                        {i == 0
                          ? 'A'
                          : i == 1
                            ? 'B'
                            : i == 2
                              ? 'C'
                              : i == 3
                                ? 'D'
                                : 'E'}
                      </div>
                      {O[0] === '|' && (
                        <>
                          <pre>{O.replace('|', '')}</pre>
                        </>
                      )}
                      {O[0] !== '|' && <>{O}</>}
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

// == [ App() ] ==-==-==
function App() {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  const sectionRefs = useRef([]);
  /* Criar as refs para 10 sections */
  useEffect(() => {
    sectionRefs.current = Array(10)
      .fill()
      .map((_, i) => sectionRefs.current[i] || React.createRef());
  }, []);

  return (
    <ThemeProvider>
      <AppBar
        title={data?.appbar?.title || 'titulo'}
        label="Prova AV"
        left={`<-`}
        act={setIsSideBarActive}
        actvalue={isSideBarActive}
      />
      {isSideBarActive && (
        <SideBar act={setIsSideBarActive} actvalue={isSideBarActive} />
      )}
      <Page>
        <QuestionArea>
          {questions && <Questions questions={questions} />}
          <GeminiChat />
          <Pressable onClick={() => prompt('oi')}>oi</Pressable>
          <Switch />
          <TextInput />
        </QuestionArea>
      </Page>
    </ThemeProvider>
  );
}

createRoot(document.querySelector('#app')).render(<App />);
