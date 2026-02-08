import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react'; // Using your icon library
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ text: "Hello! How can I help you?", isBot: true }]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return;

    const userMsg = { text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Call your Python Backend
    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.reply, isBot: true }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Error connecting to AI.", isBot: true }]);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chat-toggle" onClick={() => setIsOpen(true)}>
          <MessageSquare color="white" />
        </button>
      )}

      {isOpen && (
        <div className="chat-window wrapper"> {/* Reusing your glassmorphism wrapper class */}
          <div className="chat-header">
            <h3>AI Assistant</h3>
            <X size={18} onClick={() => setIsOpen(false)} style={{cursor:'pointer'}} />
          </div>
          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={m.isBot ? "bot-msg" : "user-msg"}>{m.text}</div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="chat-footer">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." />
            <button type="submit"><Send size={16} /></button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;