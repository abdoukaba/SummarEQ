import { useEffect, useState } from "react";
import { Input } from '../components/search/search';
import './home.css';
import NavBar from "../components/NavBar";

export default function HomePage() {
  const [contacts, setContacts] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div>
        <NavBar />
      <div className="imessage-container">
      <div className="sidebar">
        <h2>Conversations</h2>
        <div>
            <Input type="text" placeholder="Search contacts" />
        </div>
        <ul>
          {contacts.map((contact) => (
            <li
              key={contact.id}
              onClick={() => setSelectedChat(contact)}
              className={selectedChat?.id === contact.id ? "active" : ""}
            >
              {contact.name}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Chat Window */}
      <div className="chat-window">
        {selectedChat ? (
          <div className="chat-content">
            <h2>Contacts</h2>
            <p>{selectedChat.email}</p>
            <p>{selectedChat.phone}</p>
            <h2>Notes</h2>
            <p>{selectedChat.company.name}</p>
            <p>{selectedChat.company.catchPhrase}</p>
          </div>
        ) : (
          <div className="placeholder">Select a chat to start messaging</div>
        )}
      </div>
    </div>
    </div>
  );
}
