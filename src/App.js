import React, { useState, useEffect } from "react";
import "./App.css";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { keys } from "@material-ui/core/styles/createBreakpoints";
export default () => {
  {
    /* Criado o array de conversa*/
  }
  const [chatlist, setChalist] = useState([
    {
      chatId: 1,
      title: "nome teste",
      image: "https://www.w3schools.com/w3images/avatar2.png"
    },
    {
      chatId: 2,
      title: "nome teste",
      image: "https://www.w3schools.com/w3images/avatar2.png"
    },
    {
      chatId: 3,
      title: "nome teste",
      image: "https://www.w3schools.com/w3images/avatar2.png"
    }
  ]);
  /* Mostrando o chat que está ativo*/
  const [activeChat, setActiveChat] = useState({});
  return (
    <div className="app-window">
      <div className="sidebar">
        {/*topo */}
        <header>
          <img
            className="header--avatar"
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt=""
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        {/*busca */}
        <div className="search">
          <div className="serch--input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou Iniciar Uma Nova Comversa"
            />
          </div>
        </div>
        {/* Criação do menu das conversas lista de pesoas */}
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      {/*conteudo segunda tela conversa*/}
      <div className="contentarea">
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
};
