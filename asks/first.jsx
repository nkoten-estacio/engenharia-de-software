const handleAskGemini_first = async () => {
  if (!question.trim()) return;

  setIsLoading(true);
  setAnswer('');

  const prompt = `
    Extraia todas as questões e alternativas do texto abaixo.
    Cada questão possui um enunciado e cinco alternativas (A, B, C, D, E).

    Retorne o resultado **somente** como uma constante JavaScript chamada "questions" no formato:

    export const questions = [
      {
        n: 1,
        enunciado: "texto da questão",
        opções: ["A) ...", "B) ...", "C) ...", "D) ...", "E) ..."],
        correta: "A) ..."
      },
      ...
    ];

    Se não houver indicação da resposta correta, deixe o campo "correta" vazio ("").

    Texto a processar:
    """${question}"""

    ⚠️ Importante: Responda SOMENTE com o código da constante "questions", sem comentários ou explicações.
    `;

  // --- Bloco de Retentativa com Backoff Exponencial ---
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const result = await model.generateContent(question);
      const response = await result.response;
      const text = response.text();

      setAnswer(text);
      setIsLoading(false);

      // Interpreta o código JS retornado (opcional)
      try {
        if (text.includes('export const questions')) {
          const jsCode = text
            .replace('export const questions', 'questions =')
            .replace(/```(js|javascript)?/g, '')
            .trim();

          // eslint-disable-next-line no-eval
          eval(jsCode);
          console.log('✅ Questões extraídas:', questions);
        }
      } catch (err) {
        console.warn('⚠️ Não foi possível interpretar o JS retornado:', err);
      }

      return; // Sucesso: Sai da função
    } catch (error) {
      // Verifica se é a última tentativa
      if (attempt === MAX_RETRIES - 1) {
        console.error(
          'Erro final ao se comunicar com o Gemini após retentativas:',
          error,
        );
        setAnswer(
          'Desculpe, não foi possível obter a resposta após várias tentativas. Por favor, tente novamente mais tarde.',
        );
        break; // Sai do loop
      }

      // Calcula o tempo de espera (2^attempt * 1000ms)
      const delayTime = Math.pow(2, attempt) * 1000;
      console.warn(
        `Tentativa ${attempt + 1} falhou. Retentando em ${delayTime / 1000} segundos...`,
      );
      await delay(delayTime);
    }
  }
  // -------------------------------------------------------------
  // Garante que o estado de carregamento seja desativado após todas as tentativas
  setIsLoading(false);
};
