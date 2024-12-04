import React, { useEffect, useState } from 'react';
import Side_bar from './Side_bar/Side_bar';
import './Chat_bot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import fetchResponse from '../../api/api';
import list_prompt from '../../list_prompt.json'
import 'bootstrap'
import { Link } from 'react-router-dom';
import formatMessage from './Format_response';

const Chat_bot = () => {

  const[isLoged, setIsLoged] = useState(true)

  const selectPrompt = (id) =>{
    let prompt;

    if (localStorage.getItem("singUp") === "true"){
      if(id == 1){
        prompt = list_prompt[0].prompt
      }else if(id == 2){
        prompt = list_prompt[1].prompt
      }else if(id ==3){
        prompt = list_prompt[2].prompt
      }

      let promptModified = prompt.replace("<classe>", localStorage.getItem('classe'));
      promptModified = promptModified.replace("<scuola>",localStorage.getItem('istituto'));
      setPrompt({val: "prompt " + id});
      sendMessage(promptModified);
    }else{
      setIsLoged(false);
    }
    
  }

  const firstChat = {
    id: 1,
    title: "Chat n. 1",
    messageHistory: [
      {
        role: "model",
        parts: [{text: "Ciao! Sono School Bot. Come posso aiutarti?"}]
      }
    ] 
  }

  const [currentChat, setCurrentChat] = useState(firstChat);
  const [chatList, setChatList] = useState([currentChat]);
  const [message, setMessage] = useState("");
  const [prompt, setPrompt] = useState({val: "no"});

  useEffect(() => {
    setChatList(prevChatList => {
      const newChatList = [currentChat, ...prevChatList.slice(1)];
      return newChatList;
    });
  }, [currentChat]);

  const apiCall = async (messageSent) => {
    setCurrentChat(prevChat => ({
      ...prevChat,
      messageHistory: [
        ...prevChat.messageHistory,
        {
          role: "model",
          parts: [{ text: "Sto elaborando la richiesta..." }]
        }
      ]
    }));
    let historyToSend = [];
    if(currentChat.messageHistory.length > 2) {
      historyToSend = currentChat.messageHistory.slice(1, -1);
    }
    const answer = await fetchResponse(historyToSend, messageSent);
    setCurrentChat(prevChat => ({
      ...prevChat,
      messageHistory: [
        ...prevChat.messageHistory.slice(0, prevChat.messageHistory.length-1),
        {
          role: "model",
          parts: [{ text: formatMessage(answer) }]
        }
      ]
    }));
  }

  const sendMessage = (messageSent) => {
    setCurrentChat(prevChat => ({
      ...prevChat,
      messageHistory: [
        ...prevChat.messageHistory,
        {
          role: "user",
          parts: [{ text: messageSent }]
        }
      ]
    }));
    setChatList(prevChatList => {
      return [currentChat, ...prevChatList.slice(1)];
    });
    setMessage("");
    apiCall(messageSent);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage(message);
    }
  }

  return (
    <div className='main-chat-bot'>
      <Side_bar
      chatList={chatList} setChatList={setChatList}
      currentChat={currentChat} setCurrentChat={setCurrentChat}
      />
      <div className='chat-bot-stream'>
        <div className='response-parts'>
          <div className="messages">
            {
              currentChat.messageHistory.map((msg, index) => (
                <div key={index} className='msg' id={msg.role}>
                  <h2>{msg.role === "model" ? "School Bot" : "Utente"}</h2>
                  { index !==1 || prompt.val === "no" ?
                    <p dangerouslySetInnerHTML={{ __html: formatMessage(msg.parts[0].text) }} />
                    : <p> {prompt.val} </p>
                  }
                </div>
              ))
            }
          </div>
          {
            currentChat.messageHistory.length === 1 ?
            <div className='prompt-section'>
              <div className='prompt-options'>
                <div className="suggestion" >
                  <h2> Organizzami lo studio </h2>
                  <p id='sugg'>Organizza un piano di studi in base alle tue materie</p>
                  <button type="button" id="btn" class="btn btn-outline-primary"onClick={() => {selectPrompt(1)}}> Chiedi </button>
                </div>
                <div className="suggestion">
                  <h2> Opzioni orientamento </h2>
                  <p id='sugg'>Propone una serie di opzioni d'orientamento in uscita</p>
                  <button type="button" id="btn" class="btn btn-outline-primary"onClick={() => {selectPrompt(2)}}> Chiedi </button>
                </div>
                <div className="suggestion">
                  <h2> Collegamenti argomento </h2>
                  <p id='sugg'> Parte da un argomento e collega diverse materie</p>
                  <button type="button" id="btn" class="btn btn-outline-primary"onClick={() => {selectPrompt(3)}}> Chiedi </button>
                </div>

              </div>
              {
                isLoged ?
                null :
                <div className='alert-login'>
                  <div class="alert alert-danger" role="alert" id='alert'>
                    <h5 className='titolo-alert'> Devi prima inserire i dati dell'account per usare questa funzionalità</h5>
                    <Link to="/Homepage Account">
                      <button type="button" class="btn btn-danger" id='btn'>Rimedia</button>
                    </Link>
                  </div>
                </div> 
              }
            </div>
              
            : null
          }
          <div className="bottom-bar">
            <input className='text-field' type='text' placeholder='Scrivi qua il tuo messaggio...'
                onChange={(e) => setMessage(e.target.value)}
                value={message} onKeyDown={handleKeyDown}
              />
            <button className='start-button' onClick={() => {sendMessage(message)}}>
              <FontAwesomeIcon icon={faArrowUp} className='arrow' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat_bot;