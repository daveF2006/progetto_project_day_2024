import React from 'react';
import './Side_bar.css';

const Side_bar = ({chatList, setChatList, currentChat, setCurrentChat}) => {

  const newChat = () => {
    const id = chatList.length + 1;
    const newChat = {
      id: id,
      title: "Chat n. " + id,
      messageHistory: [
        {
          role: "model",
          parts: [{text: "Ciao! Sono School ChatBot. Come posso aiutarti?"}]
        }
      ]
    };
    setCurrentChat(newChat);
    setChatList([newChat, ...chatList]);
  }

  const openChat = (selectedChat) => {
    setCurrentChat(selectedChat);
    setChatList(prevChatList => {
      const updatedChatList = prevChatList.filter(chat => chat.id !== selectedChat.id);
      return [selectedChat, ...updatedChatList];
    });
  };

  return (
    <div className="side-bar">
        
        <div className="new-chat">
            <button className='chat-button' onClick={newChat}> Nuova chat </button>
        </div>

        <div className="chat-list">
          {
            chatList.map(chat => (
              <div key={chat.id}>
                <button className='chat-button' onClick={() => openChat(chat)}>{chat.title}</button>
              </div>
            ))
          }
        </div>

    </div>
  )
}

export default Side_bar;