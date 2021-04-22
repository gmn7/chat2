import Rect from "react";
import "./ChatListItem.css";

export default ({ onClick, active, data }) => {
  return (
    /* faz o efeito de seleção de mensagem */
    <div className={`chatListItem  ${active ? "ative" : ""}`} onClick={onClick}>
      <img className="chatListItem--avatar" src={data.image} alt="" />
      <div className="chatListItem--lines">
        <div className="chatListItem--Line">
          <div className="chatListItem--name"> {data.title} </div>
          <div className="chatListItem--date"> 12:00 </div>
        </div>
        <div className="chatListItem--Line">
          <div className="chatListItem--lastMsg">
            <p>teste de mensagem</p>
          </div>
        </div>
      </div>
    </div>
  );
};
