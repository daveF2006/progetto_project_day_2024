import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCGPW64MYc8P2bzp7_G7WtiE-bdmYjxCsM";

const AI = new GoogleGenerativeAI(API_KEY);

// COME FUNZIONA E ACCORTEZZE NELLA CHIAMATA:
// alla funzione va passato un array contenente l'intera cronologia dei messaggi
// incluso l'ultimo messaggio(quello di cui si vuole una risposta). l'array va
// salvato in locale nel jsx della pagina del chatbot tramite usestate
// ogni messaggio nell'array è un oggetto di questo tipo:
// {
//   role: "user",
//   parts: [{text: "testo di questo messaggio"}]
// }
// dunque ogni volta, prima di chiamare la funzione va aggiornato l'array
// messageHistory aggiungendo l'ultimo inviato dall'utente, e al termine della funzione
// oltre a mostrare nella pagina la risposta, questa va anche inserita in un oggetto
// del formato sopra citato e salvata nell'array messageHistory
// ATTENZIONE: la proprietà role va valorizzata ad user per i messaggi dell'utente e
// a model per le risposte del modello (ritornate dalla funzione)

const fetchResponse = async (messageHistory, messageSent) => {
  
  try {

    const model = AI.getGenerativeModel({ model: "gemini-1.5-pro"});

    const chat = model.startChat({
      temperature: 0.7,
      history: messageHistory,
      generationConfig: {maxOutputTokens: 4000},
      safetySettings: [
        {
          "category": "HARM_CATEGORY_HARASSMENT",
          "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          "category": "HARM_CATEGORY_HATE_SPEECH",
          "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
          "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    });

    const result = await chat.sendMessage(messageSent);
    const response = result.response;

    return response.text();
    
  } catch(error) {
    console.error("MANNAGGIAAA ", error);
  }

}

export default fetchResponse;