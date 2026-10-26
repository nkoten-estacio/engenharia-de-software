/* c version */
const handleAskGemini = async () => {
  if (!question.trim()) return;

  setIsLoading(true);
  setAnswer('');

  // Ajuste no prompt para garantir JSON puro
  const promptInstructions = `
    Analise o texto abaixo e descubra apenas as respostas corretas das questões.

Retorne SOMENTE neste formato:

1:C, 2:B, 3:D

Sem explicações.
Sem markdown.
Sem texto adicional.

Texto:
${question}
    `;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      // CORREÇÃO: Usando o prompt completo e não apenas a 'question'
      const result = await model.generateContent(promptInstructions);
      const response = await result.response;
      let text = response.text();

      // Limpeza de possíveis blocos de código markdown (```json ... ```)
      const cleanJson = text.replace(/```json|```/g, '').trim();

      setAnswer(cleanJson);

      try {
        const parsedQuestions = JSON.parse(cleanJson);
        console.log('✅ Questões extraídas com sucesso:', parsedQuestions);
        // Aqui você pode salvar no estado: setQuestionsList(parsedQuestions);
      } catch (err) {
        console.warn('⚠️ O Gemini não retornou um JSON válido:', err);
      }

      setIsLoading(false);
      return;
    } catch (error) {
      if (attempt === MAX_RETRIES - 1) {
        console.error('Erro após retentativas:', error);
        setAnswer('Erro na comunicação com a IA.');
        break;
      }
      const delayTime = Math.pow(2, attempt) * 1000;
      await delay(delayTime);
    }
  }
  setIsLoading(false);
};
